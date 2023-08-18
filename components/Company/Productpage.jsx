import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { ADD } from "../../redux/actions/cartAction";
import Product from "../../StaticData/Alldata.json";
function Productpage() {
  const [data, setData] = useState([]);
  console.log(Product.products);
  const Data = Product.products;

  // useEffect(() => {
  //   axios.get('https://dummyjson.com/products').then((res) => {
  //     setData(res.data.data);
  //     console.log('product', res.data.data);
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
        {Data ? (
          Data.map((item, i) => (
            <div className="bg-slate-300 rounded-lg " key={i}>
              <Link href={item.Link}>
                <img
                  src={item.thumbnail.substring(7)}
                  alt="Laptop"
                  className="flex justify-center mx-auto cursor-pointer md:w-60 md:h-56 w-44 h-44 object-contain"
                ></img>
                <label
                  htmlFor=""
                  className="flex justify-center text-center text-black  font-bold text-sm my-3 "
                >
                  {item.title}
                </label>
                <div className="flex justify-around  gap-5 md:  px-5 ">
                  <div>
                    <button
                      className="md:text-md text-xs bg-blue-500 hover:bg-blue-700  text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Buy @ ₹ {item.price}
                    </button>
                  </div>
                  <div>
                    <button
                      className=" md:text-md text-xs bg-pink-500 hover:bg-pink-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Rent @ ₹ {item.Rentprice}
                    </button>
                  </div>
                </div>
                <div className="py-5 flex justify-center">
                  <div className="flex gap-5 mb-5">
                    <button className="md:text-md   bg-blue-500 hover:bg-blue-700  text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline">
                      Call Now
                    </button>
                    {/* <Image src={Call} alt="Call" className="md:w-8 md:h-8" /> */}
                    <p className="flex justify-center flex-col ">
                      <p className="text-xl text-black">9826206233</p>
                      <p className="text-xl text-black">8817576276</p>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <div className="container">No Detail Available</div>
        )}
      </div>
    </div>
  );
}

export default Productpage;
