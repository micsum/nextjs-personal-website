"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import { SpotifyTrackData } from "../types/spotify";
import useSWR from "swr";

const Spotify = () => {
  const spotifyData = async (url: string) => {
    const res = await fetch(url);
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Failed to fetch data");
    }
  };

  const { data, error, isLoading } = useSWR<SpotifyTrackData>(
    "api/spotify",
    spotifyData,
    process.env.NODE_ENV === "production" ? { refreshInterval: 2000 } : {}
  );

  if (isLoading || error)
    return (
      <div className="flex flex-col items-center mb-10">
        <div className="inline-flex min-w-[250px] rounded-xl bg-slate-700 p-3 pr-3 md:pr-10">
          <div className="w-[75px] animate-pulse overflow-hidden mt-5 ml-10 rounded-lg sm:w-[100px]">
            <FontAwesomeIcon icon={faSpotify} size="3x" />
          </div>
          <div className="mx-5">
            <div className="mb-5 mt-1">
              <div className="w-28 animate-pulse rounded-full bg-gray-800 p-2 sm:w-40"></div>
            </div>
            <div className="mb-2 w-32 animate-pulse rounded-full bg-gray-800 p-3 sm:w-48"></div>
            <div className="w-40 animate-pulse rounded-full bg-gray-800 p-2 sm:w-52"></div>
          </div>
        </div>
      </div>
    );

  if (data) {
    return (
      <div className="flex flex-col items-center mb-10">
        <div className="relative inline-flex min-w-[250px] rounded-xl bg-slate-700 p-3 pr-3 md:pr-10">
          <a href={data.href} target="_blank" rel="noopener noreferrer">
            <div className="w-[75px] overflow-hidden rounded-lg sm:w-[100px]">
              <Image
                src={data.albumArt.url}
                alt="Album art"
                width={100}
                height={100}
              />
              <div className="absolute top-2 right-3 z-20 w-6">
                <FontAwesomeIcon icon={faSpotify} size="2x" color="#63E6BE" />
              </div>
            </div>
          </a>

          <div className="mx-5 overflow-x-hidden">
            <div className="mb-3 text-xs font-semibold text-gray-300 sm:text-sm">
              {data.currentlyPlaying ? "LISTENING TO SPOTIFY" : "LAST PLAYED"}
            </div>
            <a
              href={data.href}
              target="_blank"
              rel="noopener noreferrer"
              className="line-clamp-1 text-base font-bold hover:line-clamp-none hover:animate-marquee hover:whitespace-nowrap hover:underline sm:text-lg"
            >
              {data.name}
            </a>
            <div className="line-clamp-1 text-sm font-semibold hover:line-clamp-none hover:animate-marquee hover:whitespace-nowrap sm:text-base">
              By
              {data.artists.map((artist, i) => (
                <span key={`artist${i}`} className="ml-1">
                  <a
                    className="hover:cursor-pointer hover:underline"
                    href={artist.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {artist.name}
                  </a>
                  {i === data.artists.length - 1 ? "" : ","}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Spotify;
