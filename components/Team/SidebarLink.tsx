"use client";
import Link from "next/link";

const SidebarLink = () => {

  return (
    <>
      <li className="block">
        <Link
          href={`/team`}
          className={`text-base py-2 px-3 mb-3 bg-[#ffffff] rounded-3xl flex w-full bg-stroke text-black dark:text-white dark:bg-blackho`}
        >
          Introduction
        </Link>
        <Link
          href={`/team`}
          className={`text-base py-2 px-3 mb-3 bg-[#ffffff] rounded-3xl flex w-full text-black dark:text-white dark:bg-blackho`}
        >
          Bootstrap Template Guide
        </Link>
        <Link
          href={`/team`}
          className={`text-base py-2 px-3 mb-3 bg-[#ffffff] rounded-3xl flex w-full text-black dark:text-white dark:bg-blackho`}
        >
          Style Guide
        </Link>
        <Link
          href={`/team`}
          className={`text-base py-2 px-3 bg-[#ffffff] rounded-3xl flex w-full text-black dark:text-white dark:bg-blackho`}
        >
          Using Tailwind Components
        </Link>
      </li>
    </>
  );
};

export default SidebarLink;
