import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
// import { useRouter } from 'next/router';
import NavLogo from "../public/assets/NavbarIcon/Emerge Logo.svg";
import Admin from "../public/assets/NavbarIcon/Admin1.svg";
import Layer from "../public/assets/NavbarIcon/Layer_user.svg";
import Cart from "../public/assets/NavbarIcon/Cart.svg";
import Admin1 from "../public/assets/NavbarIcon/Admin.svg";
import Layer1 from "../public/assets/NavbarIcon/Layer_x0020_1.svg";
import Cart1 from "../public/assets/NavbarIcon/cart2.svg";
// import Products from "./PRODUCTS/Products";
import Products from "./PRODUCTS/Products";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
const Navbar = () => {
  const [User, setUser] = useState("");

  const router = useRouter();
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  // const [position, setPosition] = useState('fixed')
  // const router = useRouter();

  // useEffect(() => {
  //   if (
  //     router.asPath === '/property' ||
  //     router.asPath === '/crypto' ||
  //     router.asPath === '/netflix' ||
  //     router.asPath === '/twitch'
  //   ) {
  //     setNavBg('transparent');
  //     setLinkColor('#ecf0f3');
  //   } else {
  //     setNavBg('#ecf0f3');
  //     setLinkColor('#1f2937');
  //   }
  // }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);
  // ----------------

  useEffect(() => {
    const curentuser = localStorage.getItem("User_token");
    setUser(curentuser);
    console.log(curentuser);
  }, []);
  // logout start

  const Logout = () => {
    document.getElementById("LogoutModalCenter").style.display = "block";
  };

  const modalclose = () => {
    document.getElementById("LogoutModalCenter").style.display = "none";
  };
  const LogoutDone = () => {
    localStorage.clear();
    router.push("/");
    window.location.replace("/");
    // window.location.reload();
  };

  const cartCount = useSelector((state) => state.cartReducer.carts);

  return (
    <>
      <div
        style={{ backgroundColor: `${navBg}` }}
        className={
          shadow
            ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
            : "fixed w-full h-20 z-[100]"
        }
      >
        <div className="flex md:justify-evenly justify-around items-center w-full h-full px-2 2xl:px-16  xl:gap-5 gap-1 ">
          <Link href="/">
            <Image
              src={NavLogo}
              alt="/"
              width="60"
              height="60"
              className="cursor-pointer  md:flex"
            />
          </Link>
          <div>
            <div className="md:flex gap-5 md:pt-10">
              <div className=" md:flex  hidden  outline-none ">
                <ul>
                  <li className="flex">
                    <input
                      type="text"
                      placeholder="Search Product"
                      className="lg:w-72 lg:h-10  md:w-60 md:h-8  drop-shadow-2xl outline-none rounded-2xl md:pl-10"
                    />
                    <svg
                      class="absolute text-slate-400 h-5 w-5 my-2 mx-2 "
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </li>
                </ul>
              </div>
              <div>
                <ul
                  style={{ color: `${linkColor}` }}
                  className="hidden md:flex gap-10"
                >
                  <li className=" text-sm uppercase  ">
                    <Link
                      href="/"
                      className="hover:border-b-2 hover:border-b-blue-700 "
                    >
                      Company
                    </Link>
                  </li>
                  <li className=" text-sm uppercase  ">
                    <Products />
                    {/* <Link href="/products">Products</Link> */}
                  </li>
                  <li className=" text-sm uppercase  ">
                    <Link
                      href="/Contact "
                      className="hover:border-b-2 hover:border-b-blue-700"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              {/* <div> */}

              <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
                <div class="relative group cursor-pointer">
                  <li>
                    <Image
                      src={Admin1}
                      alt="/"
                      width="20"
                      height="20"
                      className="cursor-pointer ml-10 text-sm uppercase hover:border-b"
                    />
                  </li>
                  <div class="absolute z-10 hidden bg-grey-200 group-hover:block">
                    <div class="px-2 py-5 mt-10 pb-4 bg-white  w-32 shadow-lg rounded-lg">
                      <div class="grid grid-cols-1 gap-4 md:grid-cols-1">
                        <p className="text-center ">Hi Emerge !</p>

                        <Link href="/Userorders">
                          {" "}
                          <p className="text-center  rounded-lg">All Order</p>
                        </Link>
                        {User ? (
                          <p
                            className="bg-red-800 text-center text-white rounded-lg"
                            onClick={Logout}
                          >
                            Logout
                          </p>
                        ) : (
                          <Link href="/Quicklogin">
                            <p className="bg-blue-800 text-center text-white rounded-lg">
                              Login
                            </p>
                          </Link>
                        )}
                        {/* <Link href="/Quicklogin">
                            <p className="bg-blue-800 text-center text-white rounded-lg">
                              Login
                            </p>
                          </Link> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="relative group cursor-pointer">
                  <li>
                    <Image
                      src={Layer}
                      alt="/"
                      width="20"
                      height="20"
                      className="cursor-pointer ml-10 text-sm uppercase hover:border-b"
                    />
                  </li>
                  <div class="absolute z-10 hidden bg-grey-200 group-hover:block">
                    <div class="px-2 py-5 mt-10 pb-4 bg-white  w-32 shadow-lg rounded-lg">
                      <div class="grid grid-cols-1 gap-4 md:grid-cols-1">
                        <p className="text-center ">Hi customer !</p>
                        <p className="text-center  flex justify-between">
                          <BiPhoneCall className="mt-1" />{" "}
                          <a href="tel:9669469547"> 9669469547</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <li>
                  <Link href="/">
                    <Image
                      src={Cart}
                      alt="/"
                      width="20"
                      height="20"
                      className="cursor-pointer ml-10 text-sm uppercase hover:border-b"
                    />
                  </Link>
                </li>
                {/* <div className="-mt-3  
                  right-44  top-1 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0
                   text-white font-mono text-sm  leading-tight text-center ">
                  {cartCount.length}
                </div> */}
              </ul>
              {/* </div>{" "} */}
            </div>
            {/* Hamburger Icon */}
            <div
              style={{ color: `${linkColor}` }}
              onClick={handleNav}
              className="md:hidden "
            >
              <AiOutlineMenu size={25} />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {/* Overlay */}
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
              : ""
          }
        >
          {/* Side Drawer Menu */}
          <div
            className={
              nav
                ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
            }
          >
            <div>
              <div className="flex w-full items-center justify-between">
                <Link href="/">
                  <Image src={NavLogo} width="50" height="50" alt="/" />
                </Link>
                <div
                  onClick={handleNav}
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                >
                  <AiOutlineClose />
                </div>
              </div>
              <div className="border-b border-gray-300 my-4">
                <p className="w-[85%] md:w-[90%] py-4">
                  Your&#39;s Perfect Tech Partner
                </p>
              </div>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                <Link href="/">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Company
                  </li>
                </Link>
                {/* <Link href="/products"> onClick={() => setNav(false)} */}
                <li className="py-4 -mx-3 text-sm">
                  <Products />
                </li>
                {/* </Link> */}
                {/* <Link href="/blog">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Blog
                  </li>
                </Link> */}
                <Link href="/Contact">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Contact
                  </li>
                </Link>
              </ul>
              <div className="pt-40">
                <p className="uppercase tracking-widest text-[#5651e5]">
                  Let&#39;s Connect
                </p>
                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                  <a href="/" target="_blank" rel="noreferrer">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a href="/" target="_blank" rel="noreferrer">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>
                  <Link href="/Contact">
                    <div
                      onClick={() => setNav(!nav)}
                      className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                    >
                      <AiOutlineMail />
                    </div>
                  </Link>
                  <Link href="/">
                    <div
                      onClick={() => setNav(!nav)}
                      className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                    >
                      <BsFillPersonLinesFill />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile bottom start  */}
        {/* mx-auto   bg-mobailbotem  p-3 bg-cover  bg-center
         */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 w-screen mx-auto ">
          <div className="mx-auto w-screen h-20 py-1 px-1 bg-CPUSFF1 bg-cover bg-center ">
            <div className="flex justify-evenly pt-1">
              <div className="relative group cursor-pointer">
                <Image
                  src={Admin1}
                  alt="/"
                  width="20"
                  height="20"
                  className="cursor-pointer text-sm uppercase hover:border-b mt-4"
                />
                <div class="absolute z-10 hidden bg-grey-200 group-hover:block ">
                  <div class="px-2 -py-5 -mt-48 pb-4 bg-white  w-32 shadow-lg rounded-lg">
                    <div class="grid grid-cols-1 gap-4 md:grid-cols-1">
                      <p className="text-center ">Hi Emerge !</p>
                      <Link href="/Userorders">
                        <p className="text-center  rounded-lg">All Order</p>
                      </Link>

                      {User ? (
                        <p
                          className="bg-red-800 text-center text-white rounded-lg"
                          onClick={Logout}
                        >
                          Logout
                        </p>
                      ) : (
                        <Link href="/Quicklogin">
                          <p className="bg-blue-800 text-center text-white rounded-lg">
                            Login
                          </p>
                        </Link>
                      )}
                      {/* <Link href="/Quicklogin">
                          <p className="bg-blue-800 text-center text-white rounded-lg">
                            Login
                          </p>
                        </Link> */}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Link href="/">
                  {/* <div className=" z-1 float-right font-bold   bg-blue-600  text-center text-white  ">
                    {cartCount.length}
                  
                  </div> */}
                  <Image
                    src={Cart1}
                    alt="/"
                    width="50"
                    height="50"
                    className="cursor-pointer  text-sm uppercase hover:border-b z-0 "
                  />{" "}
                  <span class="absolute right-44  top-1 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                    {/* {cartCount.length} */}1
                  </span>
                  {/* <svg class="flex-1 w-8 h-8 fill-current" viewbox="0 0 24 24">
                    <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                  </svg> */}
                </Link>
              </div>
              <div class="relative group cursor-pointer">
                <Image
                  src={Layer1}
                  alt="/"
                  width="20"
                  height="20"
                  className="cursor-pointer  text-sm uppercase hover:border-b mt-4"
                />
                <div class="absolute z-10 hidden bg-grey-200 group-hover:block ">
                  <div class="px-2  -py-5 -ml-20 -mt-36 pb-4 bg-white  w-32 shadow-lg rounded-lg">
                    <div class="grid grid-cols-1 gap-4 md:grid-cols-1">
                      <p className="text-center ">Hi customer !</p>
                      <p className="text-center  flex justify-between">
                        <BiPhoneCall className="mt-1" />{" "}
                        <a href="tel:9669469547"> 9669469547</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile bottom End  */}
      </div>

      {/* oppen logout modal start  */}

      <div
        className="fixed z-10 overflow-y-auto top-0 w-full left-0 hidden"
        id="LogoutModalCenter"
      >
        <div className="flex items-center justify-center max-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-900 opacity-75" />
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
            &#8203;
          </span>

          {/* To open contact form */}
          <div
            className="inline-block 
              justify-center
              justify-items-center
          
        
              rounded-lg text-left shadow-xl transform transition-all  "
          >
            <div className="flex items-center justify-center h-screen">
              <div className="p-1 rounded shadow-lg bg-gradient-to-r from-purple-500 via-green-500 to-blue-500">
                <div
                  className="flex flex-col items-center p-4 space-y-2 bg-white rounded-lg  "
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(156,195,255,1) 30%, rgba(138,255,116,1) 100%)",
                  }}
                >
                  <div className="flex justify-center text-lg py-5">
                    Are you sure you want to log out?
                  </div>
                  <div className="flex justify-between gap-20 py-5 cursor-pointer">
                    <div
                      className="bg-red-800 text-white rounded-md p-1"
                      onClick={() => LogoutDone()}
                    >
                      Yes
                    </div>
                    <div
                      className="bg-green-800 text-white rounded-md p-1"
                      onClick={() => modalclose()}
                    >
                      No
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------ */}
    </>
  );
};

export default Navbar;
