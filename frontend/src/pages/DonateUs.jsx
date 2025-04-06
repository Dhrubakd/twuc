// import React from 'react';
// import { Link } from 'react-router-dom';

// const DonateUs = () => {
//   return (
//     <div className="container mx-auto py-10 px-4 mt-20">
//       <h2 className="text-4xl font-bold text-center mb-6">Donate Us</h2>
//       <p className="text-lg text-center text-gray-700 mb-8">
//         Your support helps us continue our mission of empowering women and uplifting communities. Any amount you donate makes a significant difference.
//       </p>

//       <div className="bg-green-100 p-6 rounded-lg shadow-md mb-8">
//         <h3 className="text-2xl font-semibold text-green-700 mb-4">Bank Account Details</h3>
//         <p className="text-lg">
//           <span className="font-bold">Bank Name:</span> Everest Bank Limited
//         </p>
//         <p className="text-lg">
//           <span className="font-bold">Branch:</span> Gulariya Branch, Bardiya
//         </p>
//         <p className="text-lg">
//           <span className="font-bold">Account Holder Name:</span> Tharu Women Upliftment Center
//         </p>
//         <p className="text-lg">
//           <span className="font-bold">Account Number:</span> 0840123456789001
//         </p>
//         <p className="text-lg">
//           <span className="font-bold">SWIFT Code:</span> EVBLNPKA
//         </p>
//       </div>

//       <div className="bg-blue-100 p-6 rounded-lg shadow-md">
//         <h3 className="text-2xl font-semibold text-blue-700 mb-4">Other Ways to Donate</h3>
//         <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
//           <li>By visiting our office at Gulariya-7, Bardiya, Nepal.</li>
//           {/* <li>Through mobile banking or QR code payment (available at the office).</li> */}
//           <li>For international donations, please contact us at <a href="mailto:twuc.bardiya2049@gmail.com" className="text-blue-600 hover:underline">twuc.bardiya2049@gmail.com</a>.</li>
//         </ul>
//       </div>
     
      
//       <div className=" mt-10">
//       {/* <div className="bg-blue-100 p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl  text-green-700 font-semibold mb-4">If you have special purpose for your donation, please  let us know.</h2>
//         <p>I want my donation to be dedicated</p>
//         <input type="text" name="" id="" placeholder='In honor of, in memory of, etc.' className='p-2' />
        
//       </div> */}
//       <div className="bg-blue-100 p-6 rounded-lg shadow-md">
//   <h2 className="text-2xl text-green-700 font-semibold mb-4">
//     If you have a special purpose for your donation, please let us know.
//   </h2>

//   <p>I want my donation to be dedicated</p>
//   <input 
//     type="text" 
//     placeholder="In honor of, in memory of, etc." 
//     className="p-2 border rounded w-full mb-4"
//   />

//   {/* Checkbox for sending an acknowledgment */}
//   <div className="flex items-center mb-4">
//     <input 
//       type="checkbox" 
//       id="acknowledgmentCheckbox" 
//       className="mr-2"
//       onChange={(e) => setAcknowledgment(e.target.checked)} // Hook to manage state
//     />
//     <label htmlFor="acknowledgmentCheckbox" className="text-gray-700">
//       Please send an acknowledgment to the individual or organization I am dedicating my donation to.
//     </label>
//   </div>

//   {/* Message input for the recipient (conditionally rendered) */}
//   {acknowledgment && (
//     <div className="mb-4">
//       <label htmlFor="recipientMessage" className="block text-gray-700 mb-2">Message to the recipient:</label>
//       <input 
//         type="text" 
//         id="recipientMessage" 
//         placeholder="Your message to the recipient..." 
//         className="p-2 border rounded w-full"
//       />
//     </div>
//   )}

//   {/* Radio buttons for sending email or other methods */}
//   <div className="mb-4">
//     <p className="text-gray-700 font-medium">How would you like to send the acknowledgment?</p>
//     <div className="flex items-center mb-2">
//       <input 
//         type="radio" 
//         id="sendEmail" 
//         name="sendMethod" 
//         className="mr-2"
//       />
//       <label htmlFor="sendEmail">Send via Email</label>
//     </div>
//     <div className="flex items-center">
//       <input 
//         type="radio" 
//         id="sendOther" 
//         name="sendMethod" 
//         className="mr-2"
//       />
//       <label htmlFor="sendOther">Other Method (Show all details)</label>
//     </div>
//   </div>

//   {/* Additional details section (optional) */}
//   {sendMethod === 'other' && (
//     <div className="mt-4 p-4 bg-gray-50 border rounded">
//       <h3 className="text-lg font-semibold">Additional Information</h3>
//       <p>Provide details for other acknowledgment methods (e.g., mailing address).</p>
//     </div>
//   )}
// </div>

//         <h2 className="text-2xl font-semibold mb-4">Thank You for Your Support!</h2>
//         <p className="text-lg text-gray-700">
//           Your generosity helps us create positive change and provide opportunities for women in need. Together, we can make a lasting impact.
//         </p>
//         {/* <button onClick={() => navigate('/contact-us')} className="bg-green-600 text-white py-2 px-4 mt-6 rounded-md hover:bg-green-700 transition duration-300">
//           Contact Us for More Information
//         </button> */}
//         <Link
//           to="/contact-us"
//           className="bg-green-600 text-white py-2 px-4 mt-6 inline-block rounded-md hover:bg-green-700 transition duration-300"
//         >
//           Contact Us for More Information
//         </Link>
//       </div>
      
//     </div>
//   );
// };

// export default DonateUs;
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const DonateUs = () => {
//   const [acknowledgment, setAcknowledgment] = useState(false); // Checkbox state
//   const [sendMethod, setSendMethod] = useState(""); // Radio button state

//   return (
//     <div className="container mx-auto py-10 px-4 mt-20">
//       <h2 className="text-4xl font-bold text-center mb-6">Donate Us</h2>
//       <p className="text-lg text-center text-gray-700 mb-8">
//         Your support helps us continue our mission of empowering women and
//         uplifting communities. Any amount you donate makes a significant
//         difference.
//       </p>

//       {/* Bank Details Section */}
//       <div className="bg-green-100 p-6 rounded-lg shadow-md mb-8">
//         <h3 className="text-2xl font-semibold text-green-700 mb-4">
//           Bank Account Details
//         </h3>
//         <p className="text-lg">
//           <span className="font-bold">Bank Name:</span> Everest Bank Limited
//         </p>
//         <p className="text-lg">
//           <span className="font-bold">Branch:</span> Gulariya Branch, Bardiya
//         </p>
//         <p className="text-lg">
//           <span className="font-bold">Account Holder Name:</span> Tharu Women
//           Upliftment Center
//         </p>
//         <p className="text-lg">
//           <span className="font-bold">Account Number:</span> 0840123456789001
//         </p>
//         <p className="text-lg">
//           <span className="font-bold">SWIFT Code:</span> EVBLNPKA
//         </p>
//       </div>

//       {/* Donation Purpose Section */}
//       <div className="bg-blue-100 p-6 rounded-lg shadow-md mt-10">
//         <h2 className="text-2xl text-green-700 font-semibold mb-4">
//           If you have a special purpose for your donation, please let us know.
//         </h2>

//         <p className="mb-2">I want my donation to be dedicated</p>
//         <input
//           type="text"
//           placeholder="In honor of, in memory of, etc."
//           className="p-2 border rounded w-full mb-4"
//         />

//         {/* Checkbox for acknowledgment */}
//         <div className="flex items-center mb-4">
//           <input
//             type="checkbox"
//             id="acknowledgmentCheckbox"
//             className="mr-2"
//             checked={acknowledgment}
//             onChange={() => setAcknowledgment(!acknowledgment)}
//           />
//           <label htmlFor="acknowledgmentCheckbox" className="text-gray-700">
//             Please send an acknowledgment to the individual or organization I
//             am dedicating my donation to.
//           </label>
//         </div>

//         {/* Conditional message input and acknowledgment method */}
//         {acknowledgment && (
//           <>
//             <div className="mb-4">
//               <label
//                 htmlFor="recipientMessage"
//                 className="block text-gray-700 mb-2"
//               >
//                 Message to the recipient:
//               </label>
//               <input
//                 type="text"
//                 id="recipientMessage"
//                 placeholder="Your message to the recipient..."
//                 className="p-2 border rounded w-full"
//               />
//             </div>

//             {/* Radio buttons for acknowledgment method */}
//             <div className="mb-4">
//               <p className="text-gray-700 font-medium">
//                 How would you like to send the acknowledgment?
//               </p>
//               <div className="flex items-center mb-2">
//                 <input
//                   type="radio"
//                   id="sendEmail"
//                   name="sendMethod"
//                   value="email"
//                   className="mr-2"
//                   onChange={() => setSendMethod("email")}
//                   checked={sendMethod === "email"}
//                 />
//                 <label htmlFor="sendEmail">Send via Email</label>
//               </div>
//               <div className="flex items-center">
//                 <input
//                   type="radio"
//                   id="sendPostal"
//                   name="sendMethod"
//                   value="postal"
//                   className="mr-2"
//                   onChange={() => setSendMethod("postal")}
//                   checked={sendMethod === "postal"}
//                 />
//                 <label htmlFor="sendPostal">Send Postal Mail Acknowledgment</label>
//               </div>
//             </div>

//             {/* Postal Mail Details (if selected) */}
//             {sendMethod === "postal" && (
//               <div className="mt-4 p-4 bg-gray-50 border rounded">
//                 <h3 className="text-lg font-semibold mb-4">Postal Mail Information</h3>
//                 <div className="mb-4">
//                   <label htmlFor="name" className="block text-gray-700 mb-2">
//                     Name:
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     placeholder="Recipient's full name"
//                     className="p-2 border rounded w-full"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label htmlFor="address" className="block text-gray-700 mb-2">
//                     Address:
//                   </label>
//                   <input
//                     type="text"
//                     id="address"
//                     placeholder="Street address"
//                     className="p-2 border rounded w-full"
//                   />
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div className="mb-4">
//                     <label htmlFor="city" className="block text-gray-700 mb-2">
//                       City:
//                     </label>
//                     <input
//                       type="text"
//                       id="city"
//                       placeholder="City"
//                       className="p-2 border rounded w-full"
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label htmlFor="state" className="block text-gray-700 mb-2">
//                       State:
//                     </label>
//                     <input
//                       type="text"
//                       id="state"
//                       placeholder="State"
//                       className="p-2 border rounded w-full"
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label htmlFor="zipcode" className="block text-gray-700 mb-2">
//                       Zip Code:
//                     </label>
//                     <input
//                       type="text"
//                       id="zipcode"
//                       placeholder="Zip Code"
//                       className="p-2 border rounded w-full"
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label htmlFor="country" className="block text-gray-700 mb-2">
//                       Country:
//                     </label>
//                     <input
//                       type="text"
//                       id="country"
//                       placeholder="Country"
//                       className="p-2 border rounded w-full"
//                     />
//                   </div>
//                 </div>
//               </div>
//             )}
//           </>
//         )}
//       </div>

//       {/* Final Section */}
//       <div className="mt-10 text-center">
//         <h2 className="text-2xl font-semibold mb-4">
//           Thank You for Your Support!
//         </h2>
//         <p className="text-lg text-gray-700 mb-6">
//           Your generosity helps us create positive change and provide
//           opportunities for women in need. Together, we can make a lasting
//           impact.
//         </p>
//         <Link
//           to="/contact-us"
//           className="bg-green-600 text-white py-2 px-4 inline-block rounded-md hover:bg-green-700 transition duration-300"
//         >
//           Contact Us for More Information
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default DonateUs;
import React, { useState } from "react";
import { Link } from "react-router-dom";

const DonateUs = () => {
  const [acknowledgment, setAcknowledgment] = useState(false); // Checkbox state
  const [sendMethod, setSendMethod] = useState(""); // Radio button state
  const [email, setEmail] = useState(""); // Email input state

  return (
    <div className="container mx-auto py-10 px-4 mt-20">
      <h2 className="text-5xl font-extrabold text-center mb-8 text-green-800">Donate Us</h2>
      <p className="text-lg text-center text-gray-600 mb-10">
        Your support helps us continue our mission of empowering women and uplifting communities. Any amount you donate makes a significant difference.
      </p>

      {/* Bank Details Section */}
      <div className="bg-gradient-to-r from-green-200 to-green-100 p-8 rounded-lg shadow-lg mb-10">
        <h3 className="text-3xl font-semibold text-green-700 mb-5">Bank Account Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <p className="text-lg font-medium">
            <span className="font-bold">Bank Name:</span> Everest Bank Limited
          </p>
          <p className="text-lg font-medium">
            <span className="font-bold">Branch:</span> Gulariya Branch, Bardiya
          </p>
          <p className="text-lg font-medium">
            <span className="font-bold">Account Holder Name:</span> Tharu Women Upliftment Center
          </p>
          <p className="text-lg font-medium">
            <span className="font-bold">Account Number:</span> 0840123456789001
          </p>
          <p className="text-lg font-medium">
            <span className="font-bold">SWIFT Code:</span> EVBLNPKA
          </p>
        </div>
      </div>

      {/* Donation Purpose Section */}
      <div className="bg-blue-50 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl text-green-700 font-bold mb-5">Special Purpose for Your Donation</h2>
        <p className="text-gray-700 mb-4">I want my donation to be dedicated:</p>
        <input
          type="text"
          placeholder="In honor of, in memory of, etc."
          className="p-3 border border-gray-300 rounded w-full mb-6 focus:outline-none focus:ring focus:ring-green-300"
        />

        {/* Checkbox for acknowledgment */}
        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            id="acknowledgmentCheckbox"
            className="mr-3 h-5 w-5 text-green-600 focus:ring-green-500"
            checked={acknowledgment}
            onChange={() => setAcknowledgment(!acknowledgment)}
          />
          <label htmlFor="acknowledgmentCheckbox" className="text-gray-700">
            Please send an acknowledgment to the individual or organization I am dedicating my donation to.
          </label>
        </div>

        {/* Conditional message input and acknowledgment method */}
        {acknowledgment && (
          <>
            <div className="mb-6">
              <label htmlFor="recipientMessage" className="block text-gray-700 font-medium mb-2">
                Message to the recipient:
              </label>
              <input
                type="text"
                id="recipientMessage"
                placeholder="Your message to the recipient..."
                className="p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:ring-green-300"
              />
            </div>

            {/* Radio buttons for acknowledgment method */}
            <div className="mb-6">
              <p className="text-gray-700 font-medium">How would you like to send the acknowledgment?</p>
              <div className="flex items-center mb-3">
                <input
                  type="radio"
                  id="sendEmail"
                  name="sendMethod"
                  value="email"
                  className="mr-3 h-5 w-5 text-green-600 focus:ring-green-500"
                  onChange={() => setSendMethod("email")}
                  checked={sendMethod === "email"}
                />
                <label htmlFor="sendEmail">Send via Email</label>
              </div>
              {/* Email Input */}
            {sendMethod === "email" && (
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Recipient's Email:
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Recipient's email address"
                  className="p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:ring-green-300"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            )}
              <div className="flex items-center">
                <input
                  type="radio"
                  id="sendPostal"
                  name="sendMethod"
                  value="postal"
                  className="mr-3 h-5 w-5 text-green-600 focus:ring-green-500"
                  onChange={() => setSendMethod("postal")}
                  checked={sendMethod === "postal"}
                />
                <label htmlFor="sendPostal">Send Postal Mail Acknowledgment</label>
              </div>
            </div>

            

            {/* Postal Mail Details (if selected) */}
            {sendMethod === "postal" && (
              <div className="mt-4 p-6 bg-gray-100 border rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Postal Mail Information</h3>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name:</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Recipient's full name"
                    className="p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:ring-green-300"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="address" className="block text-gray-700 mb-2">Address:</label>
                  <input
                    type="text"
                    id="address"
                    placeholder="Street address"
                    className="p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:ring-green-300"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="mb-4">
                    <label htmlFor="city" className="block text-gray-700 mb-2">City:</label>
                    <input
                      type="text"
                      id="city"
                      placeholder="City"
                      className="p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:ring-green-300"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="state" className="block text-gray-700 mb-2">State:</label>
                    <input
                      type="text"
                      id="state"
                      placeholder="State"
                      className="p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:ring-green-300"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="zipcode" className="block text-gray-700 mb-2">Zip Code:</label>
                    <input
                      type="text"
                      id="zipcode"
                      placeholder="Zip Code"
                      className="p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:ring-green-300"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="country" className="block text-gray-700 mb-2">Country:</label>
                    <input
                      type="text"
                      id="country"
                      placeholder="Country"
                      className="p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:ring-green-300"
                    />
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Final Section */}
      <div className="mt-10 text-center">
        <h2 className="text-3xl font-semibold mb-4 text-green-800">Thank You for Your Support!</h2>
        <p className="text-lg text-gray-700 mb-6">
          Your generosity helps us create positive change and provide opportunities for women in need. Together, we can make a lasting impact.
        </p>
        <Link
          to="/contact-us"
          className="bg-green-600 text-white py-3 px-6 inline-block rounded-md hover:bg-green-700 transition duration-300 shadow-lg"
        >
          Contact Us for More Information
        </Link>
      </div>
    </div>
  );
};

export default DonateUs;
