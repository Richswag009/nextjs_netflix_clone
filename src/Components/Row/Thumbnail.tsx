import React from "react";
import { Movie } from "../../../typing";
import { imageUrl } from "../../../Utils/request";
import Image from "next/image";
// https://image.tmbd.org/t/p/w500/
interface Props {
  movie: Movie;
  //   movie: Movie | DocumentData;
}
const Thumbnail = ({ movie }: Props) => {
  return (
    <div className=" ">
      <Image
        src={`${imageUrl}${movie.poster_path || movie?.backdrop_path} `}
        alt=""
        width={400}
        height={400}
        className=" object-cover rounded-sm md:rounded relative min-w-[180px] cursor-pointer transition duration-200 ease-out  md:h-36 md:w-[260px] md:hover-scale-105"
      />
    </div>
  );
};

export default Thumbnail;
