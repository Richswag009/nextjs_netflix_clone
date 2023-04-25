import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Movie } from "../../../typing";
import { imageUrl } from "../../../Utils/request";
import { FaInfoCircle, FaPlay } from "react-icons/fa";
import { GoInfo } from "react-icons/go";
interface Props {
  netflixOrginals: Movie[];
}
const Banner = ({ netflixOrginals }: Props) => {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    setMovie(
      netflixOrginals[Math.floor(Math.random() * netflixOrginals.length)]
    );
  }, [netflixOrginals]);
  console.log(movie);
  return (
    <div className="flex flex-col  space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute  -z-30 top-0 left-0 h-[95] ">
        <Image
          src={`${imageUrl}${movie?.backdrop_path || movie?.poster_path} `}
          alt={`${imageUrl}${movie?.backdrop_path || movie?.poster_path} `}
          width={400}
          height={400}
          className="w-screen h-[95vh] object-cover"
        />
      </div>

      <h1 className="font-bold text-white text-2xl lg:text-6xl md:text-4xl ">
        {movie?.title || movie?.name}
      </h1>

      <p className="text-shadow-md text-white max-w-xs text-xs md:max-w-lg md:text-lg lg:text-2xl">
        {movie?.overview.substring(0, 250)} ...
      </p>

      <div className="flex space-x-3">
        <button className="banner__button bg-white text-black">
          <FaPlay className="h-4 w-4 text-black md:h-7" /> Play
        </button>
        <button className="banner__button bg-[gray]/70">
          {" "}
          More info
          <FaInfoCircle className="h-5 w-5 md:h-8 md:w-8" />{" "}
        </button>
      </div>
    </div>
  );
};

export default Banner;
