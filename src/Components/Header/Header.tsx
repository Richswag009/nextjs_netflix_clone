import React, { useEffect, useState } from "react";
import Image from "next/image";
import { GoBell, GoSearch } from "react-icons/go";
import Link from "next/link";
const Header = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`${isScroll && "bg-[#141414]"} `}>
      <div className={`flex items-center space-x-2 md:space-x-10`}>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          width={100}
          height={100}
          alt="logo"
          className="cursor-pointer object-contain"
        />

        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">Tv Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>
      {/*  */}
      <div className="flex items-center space-x-4 text-sm font-light">
        <GoSearch className="hidden  h-6 w-6 sm:inline" />
        <p className="hidden lg:inline">kids</p>
        <GoBell className="  h-6 w-6" />
        <Link href="/account">
          <Image
            src="https://occ-0-1190-2774.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
            alt="account logo"
            width={30}
            height={25}
            className="rounded cursor-pointer object-cover "
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
