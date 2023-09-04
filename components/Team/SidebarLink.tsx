"use client";
import Link from "next/link";

const SidebarLink = () => {

  return (
    <>
      <li className="block">
        <Link
          href={`/team`}
          className={`text-base py-2 px-3 mb-3 bg-white rounded-3xl flex w-full bg-stroke text-black dark:text-white dark:bg-black`}
        >
          Introduction
        </Link>
        <Link
          href={`/team`}
          className={`text-base py-2 px-3 mb-3 bg-white rounded-3xl flex w-full text-black dark:text-white dark:bg-black`}
        >
          Bootstrap Template Guide
        </Link>
        <Link
          href={`/team`}
          className={`text-base py-2 px-3 mb-3 bg-white rounded-3xl flex w-full text-black dark:text-white dark:bg-black`}
        >
          Style Guide
        </Link>
        <Link
          href={`/team`}
          className={`text-base py-2 px-3 bg-white rounded-3xl flex w-full text-black dark:text-white dark:bg-black`}
        >
          Using Tailwind Components
        </Link>
      </li>
    </>
  );
};

export default SidebarLink;
