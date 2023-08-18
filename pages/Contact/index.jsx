/* eslint-disable react-hooks/rules-of-hooks */
//  eslint-disable react-hooks/rules-of-hooks
import { useState } from "react";

import ServerUrl from "../../Baseurl/ServerURL";
import axios from "axios";

import Contectssss from "../../public/assets/Contect_us/bg-contactus.jpg";
const index = () => {
  //hooks
  const [first, setfirst] = useState();
  const [username, setUsername] = useState("");
  const [errorsname, setErrorsName] = useState("");
  const [errorsNa, setErrorsNa] = useState("");
  const [email, setEmail] = useState("");

  const [contactNumber, setContactNumber] = useState("");
  const [errorscon, setErrorsCon] = useState(false);
  const [errorscontact, setErrorsContact] = useState("");
  const [serviceId, setServiceId] = useState("");

  const [message, setMessage] = useState("");

  // Form Validation
  const onchangeFullName = (e) => {
    const username = e.target.value.replace(/[^a-z]/gi, " ");
    setUsername(username);
    if (username.length <= 5) {
      setErrorsName("Enter Name");
      setErrorsNa(true);
      return username;
    } else {
      setErrorsName(false);
    }
  };
  const onchangeContact = (e) => {
    // console.log("onchangeContact");
    const contactNumber = e.target.value.replace(/([^0-9])+/i, "");
    setContactNumber(contactNumber);
    // (contact.length < 10 || contact.length > 10)
    if (contactNumber.length < 10) {
      setErrorsContact("Enter valid Contact");
      setErrorsCon(true);
    } else {
      setErrorsCon(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const insertData = {
      contactus_name: username,
      contactus_mobile: contactNumber,
      contactus_email: email,
      contactus_message: message,
    };

    axios
      .post(`${ServerUrl}/insertContactus`, insertData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log("Insert  Res", res);
        console.log("afterrun api", res.data);

        setTimeout(() => {
          window.location.reload();
        }, 5000);
      })
      .catch((err) => {
        console.log("not post", err);
        toast.error("something wrong");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      });
  };

  return (
    <>
      <div className="py-6 pt-24">
        <div className="flex  bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-7xl md:p-5 ">
          <div className="hidden lg:block lg:w-1/2 bg-cover">
            {/* <div className="text-2xl font-semibold text-gray-700 text-center">
              Emarge Computer
            </div> */}
            <img
              src="https://img.freepik.com/premium-photo/contact-us-business-icon-computer-keyboard-with-globe_117856-2468.jpg"
              alt="Description of the image"
              className="flex justify-center mx-auto cursor-pointer px-2 object-contain rounded-2xl"
            />
            {/* <img
              src={Contectssss}
              alt="Emarge"
              className="flex justify-center mx-auto cursor-pointer px-2 object-contain rounded-2xl"
            ></img> */}
          </div>

          <div className="w-full p-8 lg:w-1/2">
            <div className="text-2xl font-semibold text-gray-700 text-center">
              Emerge Computer
            </div>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="flex flex-wrap -mx-3 mb-6 md:pt-10">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <input
                    className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                    id="grid-first-name"
                    type="text"
                    placeholder="Name"
                    value={username}
                    required
                    onChange={onchangeFullName}
                  />
                  {errorsNa && (
                    <div className="text-left text-red-500">{errorsname}</div>
                  )}
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <input
                    className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                    id="grid-last-name"
                    type="text"
                    required
                    placeholder="10-digit mobile No."
                    value={contactNumber}
                    onChange={onchangeContact}
                    maxLength="10"
                  />
                  {errorscon && (
                    <div className="text-left text-red-500">
                      {errorscontact}
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-4">
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="email"
                  placeholder="Email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div class="mt-4">
                <textarea
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Your message"
                  required
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                />
              </div>
              <div className="mt-8">
                <input
                  class="bg-gray-700 text-white font-bold py-2 px-4 w-full
               rounded hover:bg-gray-600"
                  disabled={
                    username === "" || contactNumber === "" ? true : false
                  }
                  type="submit"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
