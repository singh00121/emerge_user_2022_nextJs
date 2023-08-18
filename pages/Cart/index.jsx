import React, { useState } from "react";
import Lenvo from "../../public/assets/Productpage/Lenvo.svg";
import { GrAdd, GrFormSubtract } from "react-icons/gr";
import Image from "next/image";
import Link from "next/link";
import { GrFormClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { DLT } from "../../redux/actions/cartAction";
import Router from "next/router";

const Cart = () => {
  const cartData = useSelector((state) => state.cartReducer.carts);
  console.log("cart details", cartData);

  const dispatch = useDispatch();

  //delete product in cart function using redux
  const dlt = (id) => {
    dispatch(DLT(id));
    console.log("item delete", id);
  };

  var totalPrice = 0;
  var cartproduct_id;
  var offerId;
  var productQty = 0;
  var rentPrice = 0;
  if (cartData) {
    for (let i = 0; i < cartData.length; i++) {
      cartproduct_id = cartData[i].id;
      totalPrice += cartData[i].price;
      rentPrice += cartData[i].stock;
      // offerId = cartData[i].offer_id;
      productQty = cartData[i].product_quantity;
      // console.log(productQty);
    }
  }

  // logic for increment and decrement
  const [num, setNum] = useState(cartData.map((item) => 1));
  console.log(num[0]);
  const [disable, setDisable] = useState(cartData.map((item) => false));

  const increment = (index) => {
    num[index]++;
    setNum([...num]);
    disable[index] = false;
    setDisable([...disable]);
  };

  const decrement = (index) => {
    if (num[index] > 1) {
      disable[index] = false;
      setDisable([...disable]);
      num[index]--;
      setNum([...num]);
    } else {
      num[index] = 1;
      setNum([...num]);
      disable[index] = true;
      setDisable([...disable]);
    }
  };
  var totalCartPrice = 0;
  var totalrentPrice = 0;

  function routeChange() {
    Router.push({
      pathname: "/Loginpage",
      query: {
        totalCartPrice,
        totalrentPrice,
      },
    });
  }
  return (
    <>
      <div className="pt-40 md:flex gap-10 py-5 px-5 justify-around">
        <div className=" bg-white border-2 border-r-slate-200 rounded-md ">
          {cartData.map((item, i) => {
            totalCartPrice += item.price * num[i];
            totalrentPrice += item.stock * num[i];
            console.log("totalCartPrice", totalCartPrice);
            console.log("totalrentPrice", totalrentPrice);
            return (
              <div className="flex  my-10 px-5" key={i}>
                <div>
                  <img
                    src={item.thumbnail}
                    width="20"
                    height="20"
                    alt="thumbnail"
                    className="md:w-32 md:h-32"
                  ></img>
                </div>
                <div className="md:w-[700px] px-10">
                  {item.description}
                  <div className="flex justify-around gap-5 my-5 ">
                    <div className="">
                      {item.brand}
                      <div className="flex gap-10">
                        <div>₹{item.price}</div>

                        <div className="line-through">
                          ₹{item.discountPercentage}
                        </div>
                        <div>59% off</div>
                      </div>
                    </div>

                    <div>
                      <span className="flex gap-5 items-center">
                        <GrFormSubtract
                          className="bg-slate-400 w-6 h-6  p-1 rounded-full"
                          disabled={disable[i]}
                          onClick={() => decrement(i)}
                        />
                        {/* <input
                          type="text"
                          value={0}
                          className="w-10 h-10 bg-slate-200 rounded-sm text-center"
                        /> */}
                        <div className="w-8 h-8 rounded-lg  bg-slate-200  text-center">
                          {num[i]}
                        </div>
                        <GrAdd
                          className="bg-slate-400 w-6 h-6  p-1 rounded-full fill-red-100"
                          onClick={() => increment(i)}
                        />

                        <GrFormClose
                          className="bg-slate-400 w-6 h-6  p-1 rounded-full fill-red-100"
                          onClick={() => dlt(item.id)}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className=" border-1">
          {/* card start  */}

          <div className="flex flex-col md:lg:xl:flex-row  p-5 md:p-5">
            <div className="bg-white p-8 rounded-xl shadow-sm border-1 border-zinc-600 shadow-zinc-400 md:w-96">
              <div>PRICE DETAILS</div>
              <div className="mt-5 border-t border-dashed space-y-1 py-4"></div>
              <div className="flex justify-between mb-4">
                <div>
                  <p className="text-lg font-semibold text-neutral-700">
                    Price
                    {/* ({num[0]} item) */}
                  </p>
                  <p className="mt-0.5  text-neutral-400 text-sm">Discount </p>
                  <p className="mt-0.5  text-neutral-400 text-sm">
                    Delivery Charges
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-neutral-700">
                    ₹{totalCartPrice}
                  </p>
                  <p className="mt-0.5  text-neutral-400 text-sm">− ₹4,00</p>
                  <p className="mt-0.5  text-neutral-400 text-sm">FREE</p>
                </div>
              </div>
              <div className="mt-5 border-t border-dashed space-y-1 py-4"></div>
              <div className="flex items-center justify-between ">
                <div className="flex items-center">
                  <span className="text-neutral-400 text-sm">
                    Total Buy Amount
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-neutral-400 text-sm">
                    ₹{totalCartPrice}
                  </span>
                </div>
              </div>{" "}
              <br />
              <div className="flex items-center justify-between ">
                <div className="flex items-center">
                  <span className="text-neutral-400 text-sm">
                    Total Rent Amount
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-neutral-400 text-sm">
                    ₹{totalrentPrice}
                  </span>
                </div>
              </div>
              <div className="mt-5 border-t border-dashed space-y-4 py-4"></div>
              <div className="flex justify-around py-5 gap-5  px-5">
                <div>
                  <a>
                    <button
                      className="
                    md:text-md text-xs py-1  px-5 
                    w-fit  font-bold rounded mt-3 focus:outline-none focus:shadow-outline
                   focus:shadow-outline
                    text-center justify-center flex items-center text-white cursor-pointer duration-150 hover:bg-blue-500  bg-blue-800   "
                      type="button"
                      onClick={() => routeChange()}
                    >
                      Buy @ ₹ {totalCartPrice}
                    </button>
                  </a>
                </div>
                <div>
                  <Link href="/Loginpage">
                    <button
                      className="
                    text-center justify-center flex items-center text-white cursor-pointer duration-150
                    hover:bg-pink-700   bg-pink-500 
                    md:text-md text-xs py-1  px-5 
                    w-fit  font-bold rounded mt-3 focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Rent @ ₹ {totalrentPrice}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
