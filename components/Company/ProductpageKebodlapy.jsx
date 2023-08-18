import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import IntexKeyboardMouse1 from '../../public/assets/keybordLaptop/Intex Keyboard Mouse1.svg';
import IntexKeyboardMouse2 from '../../public/assets/keybordLaptop/Intex Keyboard Mouse2.svg';
import IntexKeyboardMouse3 from '../../public/assets/keybordLaptop/Intex Keyboard Mouse3.svg';
import IntexKeyboardMouse4 from '../../public/assets/keybordLaptop/Intex Keyboard Mouse4.svg';

import LenovoLaptop from '../../public/assets/keybordLaptop/Lenovo Laptop.svg';
import DELLLaptop from '../../public/assets/keybordLaptop/DELL Laptop.svg';
import HPLaptop from '../../public/assets/keybordLaptop/HP Laptop.svg';
import SamsungLaptop from '../../public/assets/keybordLaptop/Samsung Laptop.svg';
import Link from 'next/link';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { ADD } from '../../redux/actions/cartAction';
function ProductpageKebodlapy() {
  const [data, setData] = useState([]);
  console.log(data);
  // useEffect(() => {
  //   axios.get(`https://fakestoreapi.com/products`).then((res) => {
  //     setData(res.data);
  //     console.log('product2', res.data);
  //   });
  // }, []);

  const dispatch = useDispatch();

  //create a add to cart function using redux
  const send = (id) => {
    console.log(id);
    dispatch(ADD(id));
  };
  return (
    <div>
      {/* w-56 h-60 */}
      <div className="grid md:grid-cols-4 lg:py-5 gap-10 lg:px-5 grid-cols-1 py-10 px-10 my-10">
        {/* {data.map((item, i) => (
          <div className="bg-slate-300 rounded-lg" key={i}>
            <img
              src={item.image}
              width="50"
              height="50"
              alt="emarge"
              className=" hover:scale-100  scale-100 duration-200 hover:delay-100  flex justify-center mx-auto cursor-pointer md:w-60 md:h-56 w-44 h-44 object-contain "
            />
            <label
              htmlFor=""
              className="flex justify-center mt-10 font-bold text-lg hover:scale-100  scale-90 duration-100"
            >
              {item.title}
            </label>
            <div className="flex justify-around py-3 gap-5  px-5">
              <div>
                <div className="md:text-md   text-blue-900 font-bold text-md">
                  Buy @ ₹ {item.price}
                </div>
              </div>

              <div>
                <div className=" md:text-md   text-pink-600 font-bold text-md">
                  Rent @ ₹ {item.price}
                </div>
              </div>
            </div>
            <div className="py-5 flex justify-center">
              <button
                className="md:text-md text-xs  bg-blue-500 hover:bg-blue-700  text-white font-bold py-3 px-20 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => send(item)}
              >
                <a> Add to cart</a>
              </button>
            </div>
          </div>
        ))} */}

        <div className="bg-slate-300 rounded-lg">
          <Image
            src={IntexKeyboardMouse2}
            alt="/"
            className=" hover:scale-125  scale-100 duration-200 hover:delay-100  flex justify-center mx-auto cursor-pointer md:w-60 md:h-56 w-44 h-44 object-contain "
          />
          <label
            htmlFor=""
            className="flex justify-center mt-10 font-bold text-lg hover:scale-100  scale-90 duration-100"
          >
            Intex Keyboard Mouse
          </label>
          <div className="flex justify-around py-3 gap-5  px-5">
            <div>
              <div className="md:text-md   text-blue-900 font-bold text-md">
                Buy @ ₹ 8,000
              </div>
            </div>
            <div>
              <div className=" md:text-md   text-pink-600 font-bold text-md">
                Rent @ ₹ 2,000
              </div>
            </div>
          </div>
          <div className="py-5 flex justify-center">
            <button
              className="md:text-md text-xs  bg-blue-500 hover:bg-blue-700  text-white font-bold py-3 px-20 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              <Link href="/Cart"> Add to cart</Link>
            </button>
          </div>
        </div>
        <div className="bg-slate-300 rounded-lg">
          <Image
            src={IntexKeyboardMouse3}
            alt="/"
            className=" hover:scale-125  scale-100 duration-200 hover:delay-100  flex justify-center mx-auto cursor-pointer md:w-60 md:h-56 w-44 h-44 object-contain "
          />
          <label
            htmlFor=""
            className="flex justify-center mt-10 font-bold text-lg hover:scale-100  scale-90 duration-100"
          >
            Intex Keyboard Mouse
          </label>
          <div className="flex justify-around py-3 gap-5  px-5">
            <div>
              <div className="md:text-md   text-blue-900 font-bold text-md">
                Buy @ ₹ 8,000
              </div>
            </div>
            <div>
              <div className=" md:text-md   text-pink-600 font-bold text-md">
                Rent @ ₹ 2,000
              </div>
            </div>
          </div>
          <div className="py-5 flex justify-center">
            <button
              className="md:text-md text-xs  bg-blue-500 hover:bg-blue-700  text-white font-bold py-3 px-20 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              <Link href="/Cart"> Add to cart</Link>
            </button>
          </div>
        </div>
        <div className="bg-slate-300 rounded-lg">
          <Image
            src={IntexKeyboardMouse4}
            alt="/"
            className=" hover:scale-125  scale-100 duration-200 hover:delay-100  flex justify-center mx-auto cursor-pointer md:w-60 md:h-56 w-44 h-44 object-contain "
          />
          <label
            htmlFor=""
            className="flex justify-center mt-10 font-bold text-lg hover:scale-100  scale-90 duration-100"
          >
            Intex Keyboard Mouse
          </label>
          <div className="flex justify-around py-3 gap-5  px-5">
            <div>
              <div className="md:text-md   text-blue-900 font-bold text-md">
                Buy @ ₹ 8,000
              </div>
            </div>
            <div>
              <div className=" md:text-md   text-pink-600 font-bold text-md">
                Rent @ ₹ 2,000
              </div>
            </div>
          </div>
          <div className="py-5 flex justify-center">
            <button
              className="md:text-md text-xs  bg-blue-500 hover:bg-blue-700  text-white font-bold py-3 px-20 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              <Link href="/Cart"> Add to cart</Link>
            </button>
          </div>
        </div>
        <div className="bg-slate-300 rounded-lg">
          <Image
            src={LenovoLaptop}
            alt="/"
            className=" hover:scale-125  scale-100 duration-200 hover:delay-100  flex justify-center mx-auto cursor-pointer md:w-60 md:h-56 w-44 h-44 object-contain "
          />
          <label
            htmlFor=""
            className="flex justify-center mt-10 font-bold text-lg hover:scale-100  scale-90 duration-100"
          >
            Lenovo Laptop
          </label>
          <div className="flex justify-around py-3 gap-5  px-5">
            <div>
              <div className="md:text-md   text-blue-900 font-bold text-md">
                Buy @ ₹ 8,000
              </div>
            </div>
            <div>
              <div className=" md:text-md   text-pink-600 font-bold text-md">
                Rent @ ₹ 2,000
              </div>
            </div>
          </div>
          <div className="py-5 flex justify-center">
            <button
              className="md:text-md text-xs  bg-blue-500 hover:bg-blue-700  text-white font-bold py-3 px-20 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              <Link href="/Cart"> Add to cart</Link>
            </button>
          </div>
        </div>
        <div className="bg-slate-300 rounded-lg">
          <Image
            src={DELLLaptop}
            alt="/"
            className=" hover:scale-125  scale-100 duration-200 hover:delay-100  flex justify-center mx-auto cursor-pointer md:w-60 md:h-56 w-44 h-44 object-contain "
          />
          <label
            htmlFor=""
            className="flex justify-center mt-10 font-bold text-lg hover:scale-100  scale-90 duration-100"
          >
            DELL Laptop
          </label>
          <div className="flex justify-around py-3 gap-5  px-5">
            <div>
              <div className="md:text-md   text-blue-900 font-bold text-md">
                Buy @ ₹ 8,000
              </div>
            </div>
            <div>
              <div className=" md:text-md   text-pink-600 font-bold text-md">
                Rent @ ₹ 2,000
              </div>
            </div>
          </div>
          <div className="py-5 flex justify-center">
            <button
              className="md:text-md text-xs  bg-blue-500 hover:bg-blue-700  text-white font-bold py-3 px-20 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              <Link href="/Cart"> Add to cart</Link>
            </button>
          </div>
        </div>
        <div className="bg-slate-300 rounded-lg">
          <Image
            src={HPLaptop}
            alt="/"
            className="hover:scale-125  scale-100 duration-200 hover:delay-100  flex justify-center mx-auto cursor-pointer md:w-60 md:h-56 w-44 h-44 object-contain "
          />
          <label
            htmlFor=""
            className=" flex justify-center mt-10 font-bold text-lg hover:scale-100  scale-90 duration-100"
          >
            HP Laptop
          </label>
          <div className="flex justify-around py-3 gap-5  px-5">
            <div>
              <div className="md:text-md   text-blue-900 font-bold text-md">
                Buy @ ₹ 8,000
              </div>
            </div>
            <div>
              <div className=" md:text-md   text-pink-600 font-bold text-md">
                Rent @ ₹ 2,000
              </div>
            </div>
          </div>
          <div className="py-5 flex justify-center">
            <button
              className="md:text-md text-xs  bg-blue-500 hover:bg-blue-700  text-white font-bold py-3 px-20 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              <Link href="/Cart"> Add to cart</Link>
            </button>
          </div>
        </div>
        <div className="bg-slate-300 rounded-lg">
          <Image
            src={SamsungLaptop}
            alt="/"
            className=" hover:scale-125  scale-100 duration-200 hover:delay-100 flex justify-center mx-auto cursor-pointer md:w-60 md:h-56 w-44 h-44 object-contain "
          />
          <label
            htmlFor=""
            className="flex justify-center mt-10 font-bold text-lg hover:scale-100  scale-90 duration-100 "
          >
            Samsung Laptop
          </label>
          <div className="flex justify-around py-3 gap-5  px-5">
            <div>
              <div className="md:text-md   text-blue-900 font-bold text-md">
                Buy @ ₹ 8,000
              </div>
            </div>
            <div>
              <div className=" md:text-md   text-pink-600 font-bold text-md">
                Rent @ ₹ 2,000
              </div>
            </div>
          </div>
          <div className="py-5 flex justify-center">
            <button
              className="md:text-md text-xs  bg-blue-500 hover:bg-blue-700  text-white font-bold py-3 px-20 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              <Link href="/Cart"> Add to cart</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductpageKebodlapy;
