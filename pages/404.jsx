import Image from "next/image";
import Link from "next/link";
import React from "react";

function notfound() {
  return (
    <div className="pt-40 px-10 py-10 ">
      <div class="h-screen w-screen bg-gray-50 flex items-center">
        <div class="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700">
          <div class="w-full lg:w-1/2 mx-8">
            <div class="text-7xl text-blue-500 font-dark font-extrabold mb-8">
              404
            </div>
            <p class="text-2xl md:text-3xl font-light leading-normal mb-8">
              Sorry we couldnt find the page youre looking for
            </p>

            <Link
              href="/"
              class="px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-blue-800 active:blue-red-600 hover:bg-blue-700"
            >
              back to homepage
            </Link>
          </div>
          <div class="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
            <Image
              src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg"
              class=""
              alt="Page not found"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default notfound;
