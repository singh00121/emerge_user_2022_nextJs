import React, { useState, useEffect } from 'react';

import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { authentication } from '../../firebase';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [totalBuyPrice, settotalBuyPrice] = useState([]);
  const [totalRentPrice, settotalRentPrice] = useState([]);
  const [User, setUser] = useState('');

  const countryCode = '+91';
  const [phoneNumber, setphoneNumber] = useState(countryCode);
  console.log(phoneNumber);
  const [expendForm, setexpendForm] = useState(false);
  const [OTP, setOTP] = useState('');
  console.log(totalBuyPrice);
  console.log(totalRentPrice);

  const router = useRouter();

  const {
    query: { totalCartPrice, totalrentPrice },
  } = router;

  const props = {
    totalCartPrice,
    totalrentPrice,
  };
  useEffect(() => {
    settotalBuyPrice(props.totalCartPrice);
    settotalRentPrice(props.totalrentPrice);
  }, []);

  function AddressPage() {
    Router.push({
      pathname: '/UserAdress',
      query: {
        totalBuyPrice,
        totalRentPrice,
        phoneNumber,
      },
    });
  }

  const required = (value) => {
    if (!value) {
      return (
        <div className="bg-red-800 w-10 h-10 text-white">
          This field is required!
        </div>
      );
    }
  };

  // for generateRecaptcha start
  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      'recaptcha-container',
      {
        size: 'invisible',
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      },
      authentication
    );
  };
  //  generateRecaptcha End

  // for requestOTP start
  const requestOTP = (e) => {
    e.preventDefault();
    if (phoneNumber.length >= 12) {
      console.log(phoneNumber);

      setexpendForm(true);
      generateRecaptcha();
      let appVerifier = window.recaptchaVerifier;
      signInWithPhoneNumber(authentication, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          toast.success('OTP sent Successfully ');
        })
        .catch((error) => {
          // Error; SMS not sent
          console.log(error);
          toast.error('error happned');
        });
    }
  };
  // for requestOTP End
  // for OTPverfiction start
  const VerifyOTP = (e) => {
    let otp = e.target.value;
    setOTP(otp);

    if (otp.length === 6) {
      let confirmationResult = window.confirmationResult;

      confirmationResult
        .confirm(otp)
        .then((result) => {
          // User signed in successfully.
          const user = result.user;
          console.log(user.accessToken);
          localStorage.setItem('User_token', user.accessToken);
          toast.success('User signed in successfully');

          AddressPage();
          // router.push(
          //   {
          //     pathname: '/UserAdress',
          //     query: { Phone: '9669469547' },
          //   },
          //   '/UserAdress'
          // );
          // router.push(
          //   { pathname: '/UserAdress', query: { Phone: phoneNumber } },
          //   'UserAdress'
          // );

          // router.push('/UserAddress');

          // ...
        })
        .catch((error) => {
          // User couldn't sign in (bad verification code?)
          // ...
          console.log(error);
          toast.error('Invalid OTP ');
        });
    }
  };

  useEffect(() => {
    const curentuser = localStorage.getItem('User_token');
    setUser(curentuser);
    console.log(curentuser);
  });

  return (
    <>
      {User ? (
        // router.push('/UserAdress')
        // window.location.replace('/UserAdress')
        AddressPage()
      ) : (
        <div className="md:w-[1280px] mx-auto pt-40">
          <div className="bg-white  my-10">
            <div className=" bg-blue-900  flex gap-5 px-20 py-5 ">
              <div className=" bg-white w-fit h-fit px-1 ">1</div>

              <div className="text-white">LOGIN OR SIGNUP</div>
            </div>
            <br />
            <form onSubmit={requestOTP}>
              <div className="px-20  ">
                <label htmlFor="">Enter Mobile no.</label>
              </div>
              <div></div>
              <div class=" flex  px-20 md-w-[100px]  ">
                <span>
                  <input
                    className="lining-nums  focus:outline-none focus:ring-0 peer bg-transparent border-0 border-b-2 border-b-black  appearance-none  border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight   focus:border-blue-500"
                    id="phoneNumberInput"
                    type="tel "
                    value={phoneNumber}
                    onChange={(e) => setphoneNumber(e.target.value)}
                    required
                    validations={[required]}
                  />
                </span>
              </div>

              {expendForm === true ? (
                <>
                  <div className=" px-20  py-5">
                    <input
                      id="otpInput"
                      type="number "
                      placeholder="OTP ..."
                      value={OTP}
                      onChange={VerifyOTP}
                      className="lining-nums  focus:outline-none focus:ring-0 peer bg-transparent border-0 border-b-2 border-b-black  appearance-none  border-gray-200 rounded w-52 py-2 px-4 text-gray-700 leading-tight   focus:border-blue-500"
                    />
                  </div>
                </>
              ) : null}
              {expendForm === false ? (
                <div className=" px-32  py-5">
                  <button
                    className="   md:text-md text-xs bg-pink-500 hover:bg-pink-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    GET OTP
                  </button>
                </div>
              ) : null}
              <div id="recaptcha-container"></div>
            </form>
          </div>
        </div>
      )}
      <ToastContainer />
      {/* <div className="md:w-[1280px] mx-auto pt-40">
        <div className="bg-white  my-10">
          <div className=" bg-blue-900  flex gap-5 px-20 py-5 ">
            <div className=" bg-white w-fit h-fit px-1 ">1</div>

            <div className="text-white">LOGIN OR SIGNUP</div>
          </div>
          <form onSubmit={requestOTP}>
            <div className="px-20  ">
              <label htmlFor="">Enter Mobile no.</label>
            </div>
            <div className=" flex  px-20 md-w-[100px]">
           
              <input
                id="phoneNumberInput"
                type="tel "
                value={phoneNumber}
                onChange={(e) => setphoneNumber(e.target.value)}
                className=" lining-nums  focus:outline-none focus:ring-0 peer bg-transparent border-0 border-b-2 border-b-black  appearance-none  border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight w-52  focus:border-blue-500"
              />
            </div>
            {expendForm === true ? (
              <>
                <div className=" px-32  py-5">
                 
                  <input
                    id="otpInput"
                    type="number "
                    value={OTP}
                    onChange={VerifyOTP}
                    className="lining-nums w-32 focus:outline-none focus:ring-0 peer bg-transparent
                    bg-slate-200 border-b-black  appearance-none  border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight   focus:border-blue-500"
                  />
                </div>
              </>
            ) : null}
            {expendForm === false ? (
              <div className=" flex justify-center my-5">
                <button
                  className=" h-10 w-52 bg-blue-800 text-white  rounded-lg"
                  type="submit"
                >
                  Request OTP
                </button>
              </div>
            ) : null}

            <div id="recaptcha-container"></div>
          </form>
        </div>
      </div> */}
    </>
  );
}

export default Login;
