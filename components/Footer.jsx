import Image from 'next/image';
import React from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import footer_logo from '../public/assets/NavbarIcon/Emerge Logo.svg';
// import footer_logo from '../public/assets/Logos/emreglogo2.svg';
import Location from '../public/assets/Footer/Location.svg';
import Call from '../public/assets/Footer/call.svg';
import Email from '../public/assets/Footer/Email1.svg';
import Whatssap from '../public/assets/Footer/whatsap.svg';
import facbook from '../public/assets/Footer/FB.svg';
import instgarm from '../public/assets/Footer/instgram1.svg';

import youtube from '../public/assets/Footer/Youtub.svg';
import Linkdin from '../public/assets/Footer/Linkdin.svg';
import Link from 'next/link';

function Footer() {
  return (
    <div>
      <div className="mx-auto w-full  py-1 px-4 bg-BGFooter bg-cover md:bg-top bg-center md:h-[400px] pb-10 mb-20 lg:mb-1">
        <div className="md:col-span-3 col-span-1 flex-1 flex flex-wrap md:justify-evenly justify-center md:items-center items-center  md:gap-20  gap-10">
          <div className="md:mt-10 lg:w-0  w-44 ">
            <ul className=" flex flex-col gap-2 md:text-lg text-white">
              <div>EXPLORE </div>
              <li className="text-sm">Company</li>
              <li className="text-sm">Products</li>
              <li className="text-sm">Blog </li>
              <li className="text-sm">Contact</li>
              <br />
              <br />
              <br />
            </ul>
          </div>
          <div className="md:mt-10   ">
            <ul className=" flex flex-col gap-2 md:text-lg text-white">
              <div>PRODUCTS </div>

              <li className="text-sm">
                {' '}
                <Link href="/moniters ">Moniters</Link>
              </li>
              <li className="text-sm">
                {' '}
                <Link href="/Keybords">Kebord</Link>
              </li>
              <li className="text-sm">
                <Link href="/Laptops">Laptop</Link>
              </li>
              <li className="text-sm">
                <Link href="/gaming">Gaming</Link>
              </li>
              <li className="text-sm">
                <Link href="/HardDisk/"> Storage</Link>
              </li>
              <li className="text-sm">
                <Link href="/CPUSFF">CPU SFF</Link>
              </li>

              <br />
            </ul>
          </div>
          <div className=" md:mt-5   ">
            <Image src={footer_logo} alt="/" className="w-40 h-52" />
          </div>
          <div className="md:mt-10    ">
            <ul className=" flex flex-col gap-2 md:text-lg text-white">
              <div>POLICY </div>

              <Link href="/aboutUS">
                <li className="text-sm">About us</li>
              </Link>
              <Link href="/terms-conditions">
                <li className="text-sm">Terms & Conditions</li>
              </Link>
              <Link href="/privacy-policy">
                <li className="text-sm">Privacy Policy</li>
              </Link>
              <Link href="/">
                <li className="text-sm">Return Policy</li>
              </Link>
              {/* <Link href="/">
                <li className="text-sm">Return Policy </li>
              </Link> */}

              <br />
            </ul>
          </div>
          <div className=" text-white md:mt-10 text-sm  ">
            <span className=" gap-5 mb-5 flex  ">
              <Image src={Location} alt="/" className="md:w-8 md:h-8" />
              <div className="flex-col">
                16, Lakshya Vihar
                <div>Kanadia Main Rd,</div>
                <div> Sanchar Nagar Ext, Indore, </div> <div>M.P.-452016</div>
              </div>
            </span>
            <div className="flex gap-5 mb-5">
              <Image src={Call} alt="/" className="md:w-8 md:h-8" />
              <p>+ 91 88175-76276</p>
            </div>
            <div className="flex gap-5 mb-5">
              <Image src={Whatssap} alt="/" className="md:w-8 md:h-8" />
              <p>9826206233, 8817576276</p>
            </div>
            <div className="flex justify-center content-center gap-5 ">
              <Image src={Email} alt="/" className="md:w-8 md:h-8" />
              <p className="flex justify-center flex-col ">
                <p>emergecomputerz@gmail.com</p>
                <p>sales@emergecomputers.com</p>
              </p>
            </div>
          </div>
        </div>
        {/* footer icon start  */}
        <div className="md:col-span-4 flex flex-wrap md:justify-center justify-center md:items-center items-center  md:gap-20  gap-10 my-5">
          <div className="flex items-center justify-center  w-full sm:w-[80%] gap-10">
            <a
              href="https://www.facebook.com/emergecomputers"
              target="_blank"
              rel="noreferrer"
            >
              {/* <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"> */}
              <Image src={facbook} className="w-10 h-10" />
              {/* </div> */}
            </a>
            <a
              href="https://www.instagram.com/emergecomputers/"
              target="_blank"
              rel="noreferrer"
            >
              {/* <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"> */}
              <Image src={instgarm} className="w-10 h-10" />
              {/* </div> */}
            </a>
            <Link
              href="https://www.linkedin.com/company/emergecomputers/"
              target="_blank"
              rel="noreferrer"
            >
              {/* <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"> */}
              <Image src={Linkdin} className="w-10 h-10" />
              {/* </div> */}
            </Link>
            <Link
              href="https://www.youtube.com/@emergecomputers"
              target="_blank"
              rel="noreferrer"
            >
              {/* <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"> */}
              <Image src={youtube} className="w-10 h-10" />
              {/* </div> */}
            </Link>
          </div>
        </div>
        <div class="mt-1 border-t border-solid space-y-4 py-1 "></div>

        <div className="  text-lg text-white md:col-span-4 flex gap-2 flex-wrap md:justify-center justify-center md:items-center items-center  ">
          Copyright <span>Emerge Computer@</span>
          {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
}

export default Footer;
