export type SpotifyTrackData = {
  name: string;
  artists: Array<{ name: string; href: string }>;
  href: string;
  albumArt: {
    url: string;
    height: number;
    width: number;
  };
  currentlyPlaying: boolean;
};

export interface Artists {
  name: string;
  external_urls: { spotify: string };
}
