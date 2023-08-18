import axios from 'axios';
import React, { useState } from 'react';
import ServerUrl from '../../Baseurl/ServerURL';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function HomepageForm() {
  // Selct option Start

  const [selectedCountryId, setSelectedCountryId] = useState(null);
  const [selectedStateId, setSelectedStateId] = useState(null);

  const handleCountryChange = (e) => {
    setSelectedStateId(null);
    setSelectedCountryId(e.target.value);
  };

  const handleStateChange = (e) => {
    setSelectedStateId(e.target.value);
  };
  const countries = [
    { id: 'BUY', name: 'BUY' },
    { id: 'Reant', name: 'Reant' },
  ];

  const states = [
    { id: 'Full Time', name: ' Full Time', countryId: 'BUY' },
    { id: '1-3 Months', name: ' 1-3 Months', countryId: 'Reant' },
    { id: '3-6 Months', name: ' 3-6 Months', countryId: 'Reant' },
    { id: '6-9 Months', name: ' 6-9 Months', countryId: 'Reant' },
    { id: '9-12 Months', name: ' 9-12 Months', countryId: 'Reant' },
    { id: '1-Above Years', name: ' 1-Above Years', countryId: 'Reant' },
  ];

  function Select({ options, value, title, handleSelectChange }) {
    return (
      <select
        class="shadow appearance-none border rounded w-full py-2 md:w-40 px-5 text-gray-700  focus:outline-none focus:shadow-outline"
        name="title"
        value={value ? value : ''}
        onChange={handleSelectChange}
      >
        <option value="" disabled selected hidden>
          {title}
        </option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    );
  }

  // Selct option end

  const [Enquiry, setEnquiry] = useState({
    name: '',
    Mobail: '',
    Quntty: '',
    ProductType: '',
    selectedCountryId: '',
    selectedStateId: '',
  });

  const handleChange = (e) => {
    e.preventDefault();
    setEnquiry({ ...Enquiry, [e.target.name]: e.target.value });
  };
  // post api start

  const insertEnquiry = () => {
    const userObject = {
      enquiry_name: Enquiry.name,
      contact_number: Enquiry.Mobail,
      quantity: Enquiry.Quntty,
      product_typeId: Enquiry.ProductType,
      enquiry_type: selectedCountryId,
      rent_duration: selectedStateId,
    };
    axios
      .post(`${ServerUrl}/insertEnquiry`, userObject)
      .then((res) => {
        console.log(res);
        toast.success('Enquiry post Successfully');
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
        toast.error('enquiry not post');
        setTimeout(() => {
          // window.location.reload();
        }, 3000);
      });
  };
  // post api End

  return (
    <div>
      <div className="flex justify-center">
        <div className="md:w-[1366px] w-auto bg-blue-600 md:h-40  md:rounded-[60px]  md:-mt-24 -mt-10 ">
          {/* text div start  */}
          <div className="md:flex justify-center gap-10 text-white md:text-lg text-xs md:p-7 p-10">
            <div>FILL THIS FORM AND WE WILL GET BACK TO YOU SOONEST</div>
            <div>| CALL ME BACK </div>
            <div>| TALK TO US-NOW CALL : 0123456789</div>
          </div>
          {/* text div end  */}
          {/* Input div start  */}
          <div className="md:flex md:gap-10 md:pl-10 md:pr-10 pl-10 pr-10  gap-x-10">
            <div className="1 mb-5">
              <input
                class="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700  focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Name "
                name="name"
                onChange={handleChange}
              />
            </div>
            <div className="2 mb-5">
              <input
                class="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700  focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                name="Mobail" 
                placeholder="Mobile No."
                onChange={handleChange}
              />
            </div>

            <div className="4 mb-5">
              <input
                class="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700  focus:outline-none focus:shadow-outline"
                id="QTY"
                type="text"
                name="Quntty"
                placeholder="QTY"
                onChange={handleChange}
              />
            </div>

            <div className="3 mb-5">
              <select
                class="shadow appearance-none border rounded w-full py-2 md:w-40 px-5 text-gray-700  focus:outline-none focus:shadow-outline"
                aria-label="Default select example"
                onChange={handleChange}
                name="ProductType"
              >
                <option selected> Product Type </option>
                <option value="1">Laptop</option>
                <option value="2">Moneter</option>
                <option value="3"> CPU</option>
                <option value="4"> Storage</option>
                <option value="5"> Kebord</option>
                <option value="6"> Gaming Cpu</option>
              </select>
            </div>

            <div className="3 mb-5">
              <Select
                options={countries}
                value={selectedCountryId}
                title="Select Enquiry"
                name="enquirytype"
                handleSelectChange={handleCountryChange}
              />
            </div>
            <div className="3 mb-5">
              <Select
                options={states.filter(
                  (state) => state.countryId === selectedCountryId
                )}
                value={selectedStateId}
                title="Select Time"
                name="rentduration"
                handleSelectChange={handleStateChange}
              />
            </div>
            <div className="6 mb-5">
              <button
                class=" shadow bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
                type="button"
                onClick={insertEnquiry}
              >
                Submit
              </button>
            </div>
          </div>
          {/* Input div End  */}
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

export default HomepageForm;
