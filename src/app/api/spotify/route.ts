import { NextResponse } from "next/server";

async function getAccessToken() {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const bodyParam = new URLSearchParams();
  bodyParam.append("client_id", process.env.SPOTIFY_CLIENT_ID as string);
  bodyParam.append(
    "client_secret",
    process.env.SPOTIFY_CLIENT_SECRET as string
  );
  bodyParam.append("grant_type", "refresh_token");
  bodyParam.append(
    "refresh_token",
    process.env.SPOTIFY_REFRESH_TOKEN as string
  );

  const requestAction = {
    method: "POST",
    headers: myHeaders,
    body: bodyParam,
    next: { revalidate: 3600 },
  };

  try {
    const response = await fetch(
      "https://accounts.spotify.com/api/token",
      requestAction
    );
    const { access_token } = await response.json();
    return access_token;
  } catch (err) {
    console.error(err);
    return (err as Error).message;
  }
}

async function getCurrentTrack(accessToken: string) {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${accessToken}`);

  try {
    const response = await fetch(
      "https://api.spotify.com/v1/me/player/currently-playing",
      {
        method: "GET",
        headers: myHeaders,
        next: { revalidate: 0 },
      }
    );
    const data = await response.json();
    return data ? data : null;
  } catch (err) {
    console.error((err as Error).message);
  }
}

async function getLastTrack(accessToken: string) {
  const myHeaders = new Headers();
  myHeaders.append(`Authorization`, `Bearer ${accessToken}`);

  try {
    const response = await fetch(
      "https://api.spotify.com/v1/me/player/recently-played?limit=1",
      {
        method: "GET",
        headers: myHeaders,
        next: { revalidate: 60 },
      }
    );
    const data = await response.json();
    return data ? data : null;
  } catch (err) {
    console.error((err as Error).message);
  }
}

export async function GET() {
  const accessToken = await getAccessToken();

  if (accessToken) {
    const track = await getCurrentTrack(accessToken);

    if (track && track.is_playing) {
      return NextResponse.json({
        name: track.item.name,
        artists: track.item.artists.map((artist: any) => {
          return { name: artist.name, href: artist.external_urls.spotify };
        }),
        href: track.item.external_urls.spotify,
        albumArt: track.item.album.images[0],
        currentlyPlaying: track.is_playing,
      });
    }

    const lastPlayedTrack = await getLastTrack(accessToken);
    console.log("last", lastPlayedTrack);
    if (lastPlayedTrack && lastPlayedTrack.items && lastPlayedTrack.items[0]) {
      return NextResponse.json({
        name: lastPlayedTrack.items[0].track.name,
        artists: lastPlayedTrack.items[0].track.artists.map((artist: any) => {
          return { name: artist.name, href: artist.external_urls.spotify };
        }),
        href: lastPlayedTrack.items[0].track.external_urls.spotify,
        albumArt: lastPlayedTrack.items[0].track.album.images[0],
        currentlyPlaying: false,
      });
    }
    return NextResponse.json(
      { error: "Error fetching track" },
      { status: 500 }
    );
  }
  return NextResponse.json(
    {
      error: "Error fetching access token",
    },
    { status: 500 }
  );
}
