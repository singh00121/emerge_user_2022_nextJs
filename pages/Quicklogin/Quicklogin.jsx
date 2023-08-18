import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Productpage from '../../components/Company/Productpage';
import Slider from '../../components/Company/Slider';
import { authentication } from '../../firebase';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import axios from 'axios';
import ServerUrl from '../../Baseurl/ServerURL';
function Quicklogin() {
  const router = useRouter();
  const countryCode = '+91';
  const [phoneNumber, setphoneNumber] = useState(countryCode);
  const [expendForm, setexpendForm] = useState(false);
  const [OTP, setOTP] = useState('');

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
          // console.log(user.accessToken);
          // localStorage.setItem('User_token', user.accessToken);
          // toast.success('User signed in successfully');
          onSubmit();
          // setTimeout(() => {
          //   // window.location.reload();
          //   router.push('/');
          // }, 2000);

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

  // for OTPverfiction End
  // Login api Start

  const onSubmit = async (e) => {
    
    // e.preventDefault();
    await axios
      .post(
       `${ServerUrl}/userLogin`,
        {
          user_mobile: phoneNumber,
        },
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
        // console.log(res.data.token);
        const user = res.data.token;
        console.log(user);
        localStorage.setItem('User_token', user);
        toast.success('User signed in successfully');
        setTimeout(() => {
          router.push('/'); 
          window.location.reload();
        }, 2000);
      })
      .catch((err) => {
        // toast.error("error happned");
        console.log('error happned');
      });
  };
  return (
    <>
      <ToastContainer />

      <div className=" pt-40 px-10 py-10 bg-gradient-to-r from-blue-500">
        <div className="text-center text-lg font-semibold ">
          <div>Login</div>
          <div className="my-5">Please enter your Mobile No.</div>
        </div>
        <form onSubmit={requestOTP}>
          <div className=" flex justify-center my-5">
            {/* <label htmlFor="phoneNumberInput">Phone Number</label> */}
            <input
              id="phoneNumberInput"
              type="tel "
              value={phoneNumber}
              onChange={(e) => setphoneNumber(e.target.value)}
              className=" lining-nums  h-14 w-80 bg-slate-200 border-2  rounded-lg   focus:bg-white focus:border-blue-500"
            />
          </div>
          {expendForm === true ? (
            <>
              <div className=" flex justify-center my-5">
                {/* <label htmlFor="otpInput">OTP</label> */}
                <input
                  id="otpInput"
                  type="number "
                  value={OTP}
                  onChange={VerifyOTP}
                  className=" lining-nums  h-14 w-80 bg-slate-200 border-2  rounded-lg   focus:bg-white focus:border-blue-500"
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
      {/* <Suspense fallback={`Loading...`}> */}
      <Productpage />
      {/* </Suspense> */}
      <Slider />
    </>
  );
}

export default Quicklogin;
