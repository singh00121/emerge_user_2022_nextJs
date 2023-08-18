import axios from "axios";
import Image from "next/image";
import Location from "../../public/assets/Footer/ic_my_location_24px.svg";
import React, { useEffect, useRef, useState } from "react";
import { async } from "@firebase/util";
import ServerURL from "../../Baseurl/ServerURL";

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
// online pamant

import { useRouter } from "next/router";
import Head from "next/head";
function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}
// online pamant end
function UserAdress() {
  const [name, setName] = useState("");

  const [number, setNumber] = useState("");
  const [pincode, setPincode] = useState("");
  const [landmark, setLandmark] = useState("");
  const [addressare, setAddressare] = useState("");
  // const [cityname, setCityname] = useState("");
  // const [statts, setStatts] = useState("");
  const [addresstype, setaddresstype] = useState("");
  //state error name
  const [nameerror, setNameerror] = useState(false);
  const [nameerr, setNameer] = useState("");
  //state error number
  const [numbererro, setNumbererro] = useState(false);
  const [errornum, setErrornum] = useState("");

  const router = useRouter();
  const {
    query: { totalBuyPrice, totalRentPrice, phoneNumber },
  } = router;
  const props = {
    totalBuyPrice,
    totalRentPrice,
    phoneNumber,
  };
  console.log(props.totalBuyPrice);
  console.log(props.totalRentPrice);
  console.log(props.phoneNumber);

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const API_Endpoint = "https://api.openweathermap.org/data/3.0/onecall?";
  const API_Key = "85b42589998157f19051ed0342194ff6";

  const [City, setCity] = useState("");
  const [State, setState] = useState("");

  const location = async () => {
    let url = "https://ipinfo.io/json?token=d7fe425877fbde";
    let res = await fetch(url);
    let data = await res.json();
    setCity(data.city);
    setState(data.region);
    console.log(data);
  };
  //validatione for name
  const chnagname = (e) => {
    const name = e.target.value.replace(/[^a-z]/gi, " ");
    setName(name);
    if (name.length < 3) {
      setNameerror(true);
      setNameer("Enter Name");
    } else {
      setNameerror(false);
    }
  };
  //validation for number
  const chnagnum = (e) => {
    const number = e.target.value.replace(/([^0-9])+/i, "");
    setNumber(number);
    if (number.length < 9) {
      setNumbererro(true);
      setErrornum("Enter contact number");
    } else {
      setNumbererro(false);
    }
  };
  //submit from
  const handlesubmit = async (e) => {
    e.preventDefault();
    const data = {
      user_name: name,
      user_contact: number,
      user_pincode: pincode,
      user_landmark: landmark,
      user_addressarea: addressare,
      user_city: City,
      user_state: State,
      user_addresstype: addresstype,
    };
    await axios
      .post(`${ServerURL}/insertAddress`, data)
      .then((res) => console.log(res.data));
  };
  //get user adddress
  // const getuseradd = async () => {
  //   await axios
  //     .get(
  //       `${ServerURL}/getUserAddress`
  //       // headers: {
  //       //   "Content-Type": "application/json",
  //       // },
  //     )
  //     .then((res) =>)
  //     //  console.log(res.data));
  // };
  // useEffect(() => {
  //   getuseradd();
  // }, []);

  //radio button ka state
  const chngcheked = (value) => {
    setaddresstype(value);
  };
  return (
    <div>
      <Head>
        <title>UserAddress</title>
        <link rel="icon" href="icons/favicon.ico" />
      </Head>
      <div className="md:w-[1280px] mx-auto pt-40">
        <div className="bg-white  pb-10 mb-10">
          <div className=" bg-blue-900  flex gap-5 px-20 py-5 ">
            <div className=" bg-white w-fit h-fit px-1 ">1</div>

            <div className="text-white">LOGIN OR SIGNUP</div>
          </div>
          <br />

          {/* Address start  */}

          <div className=" bg-blue-900  flex gap-5 px-20 py-5 my-5 ">
            <div className=" bg-white w-fit h-fit px-1">2</div>
            <div className="text-white">ADDRESS</div>
          </div>
          <div className=" px-20 py-5 my-5 " onClick={location}>
            <div className="  bg-blue-900 flex w-72 py-2  gap-5 rounded-lg text-center justify-center text-white">
              <Image src={Location} alt="/"></Image>
              {addressare ? addressare : "Use Current Location"}
            </div>
          </div>
          {/* form start  */}
          <div className="flex md:flex-row gap-10 md:justify-around flex-col justify-center   ">
            <form
              onSubmit={(e) => handlesubmit(e)}
              class="w-full max-w-lg  md:p-5 p-5"
            >
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => chnagname(e)}
                  />
                  {nameerror ? (
                    <div className="text-red-500"> {nameerr}</div>
                  ) : (
                    " "
                  )}
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="10-digit mobile No."
                    value={number}
                    onChange={(e) => chnagnum(e)}
                  />
                  {numbererro ? (
                    <div className="text-red-500">{errornum}</div>
                  ) : (
                    ""
                  )}
                </div>
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="Pincode"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                  />
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Landmark"
                    value={landmark}
                    onChange={(e) => setLandmark(e.target.value)}
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <input
                    class=" h-20 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    type="text"
                    placeholder="Address(Area State)"
                    value={addressare}
                    onChange={(e) => setAddressare(e.target.value)}
                  />
                  <p class="text-gray-600 text-xs italic">
                    Make it as long and as crazy as youd like
                  </p>
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-city"
                    type="text"
                    placeholder="City"
                    value={City}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>

                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  {/* <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-zip"
                  >
                    Zip
                  </label> */}
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-zip"
                    type="text"
                    placeholder="State"
                    value={State}
                    onChange={(e) => setState(e.target.value)}
                  />
                </div>
              </div>

              <div className=" mt-10">
                <div className="text-blue-700">Address Type</div>
                <div className="flex gap-10">
                  <div className="flex gap-3">
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="html"
                      onChange={() => chngcheked(addresstype)}
                    />
                    <label for="html">Home(All day delivery)</label>
                    <br />
                  </div>
                  <div className="flex gap-3">
                    <input
                      type="radio"
                      id="css"
                      name="fav_language"
                      value="CSS"
                      onChange={() => chngcheked(addresstype)}
                    />
                    <label for="css">Office (10-7)</label>
                    <br />
                  </div>
                </div>
              </div>
              <button type="submit">submit</button>
            </form>

            {/* card start  */}
            <div class="flex flex-col md:lg:xl:flex-row  p-5 md:p-5">
              <div class="bg-white p-8 rounded-xl shadow-sm border-1 border-zinc-600 shadow-zinc-400 md:w-96">
                <div>PRICE DETAILS</div>
                <div class="mt-5 border-t border-dashed space-y-1 py-4"></div>
                <div class="flex justify-between mb-4">
                  <div>
                    <p class="text-lg font-semibold text-neutral-700">Price</p>
                    <p class="mt-0.5  text-neutral-400 text-sm">Discount </p>
                    <p class="mt-0.5  text-neutral-400 text-sm">
                      Delivery Charges{" "}
                    </p>
                  </div>
                  <div class="text-right">
                    <p class="text-lg font-semibold text-neutral-700">
                      ₹ {props.totalBuyPrice}
                    </p>
                    <p class="mt-0.5  text-neutral-400 text-sm">− ₹8,000</p>
                    <p class="mt-0.5  text-neutral-400 text-sm">FREE</p>
                  </div>
                </div>
                <div class="mt-5 border-t border-dashed space-y-1 py-4"></div>
                <div class="flex items-center justify-between ">
                  <div class="flex items-center">
                    <span class="text-neutral-400 text-sm">
                      Total Buy Amount
                    </span>
                  </div>
                  <div class="flex items-center">
                    <span class="text-neutral-400 text-sm">
                      ₹{props.totalBuyPrice}
                    </span>
                  </div>
                </div>{" "}
                <br />
                <div class="flex items-center justify-between ">
                  <div class="flex items-center">
                    <span class="text-neutral-400 text-sm">
                      Total Rent Amount
                    </span>
                  </div>
                  <div class="flex items-center">
                    <span class="text-neutral-400 text-sm">
                      ₹{props.totalRentPrice}
                    </span>
                  </div>
                </div>
                {/* props.totalRentPrice */}
                <div class="mt-5 border-t border-dashed space-y-4 py-4"></div>
                <div class="text-center text-pink-500 cursor-pointer duration-150 hover:bg-neutral-200 py-0.5 bg-neutral-100  font-semibold rounded-lg mt-3">
                  You will save ₹8,000 on this order
                </div>
                <div className="flex justify-around py-5 gap-5  px-5">
                  <div>
                    <Link href="">
                      <button
                        className="
                    md:text-md text-xs py-1  px-5 
                    w-fit  font-bold rounded mt-3 focus:outline-none focus:shadow-outline
                   focus:shadow-outline
                    text-center justify-center flex items-center text-white cursor-pointer duration-150 hover:bg-blue-500  bg-blue-800   "
                        type="button"
                      >
                        Buy @ ₹ {props.totalBuyPrice}
                      </button>
                    </Link>
                  </div>
                  <div>
                    <button
                      className="
                    text-center justify-center flex items-center text-white cursor-pointer duration-150
                    hover:bg-pink-700   bg-pink-500 
                    md:text-md text-xs py-1  px-5 
                    w-fit  font-bold rounded mt-3 focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Rent @ ₹ {props.totalRentPrice}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserAdress;
