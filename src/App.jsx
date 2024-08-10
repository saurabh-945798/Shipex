import React from 'react';

const VerificationForm = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center relative">
      {/* Background Design */}
      <div className="absolute inset-0">
        <div className="bg-white h-full w-full absolute top-0 left-0 z-0" style={{
          backgroundImage: "url('https://img.freepik.com/free-vector/abstract-green-wave-modern-background-design_1055-6555.jpg?w=740&t=st=1723274478~exp=1723275078~hmac=fd1d7018e05693ffa3b142cd5e8e6915e41c9c441c79e0e743de37d28d51c9ec')", // Replace with your image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1,
        }}></div>

        <div className="bg-gradient-to-b from-transparent to-white opacity-90 h-full w-full absolute top-0 left-0 z-0"></div>
      </div>

      {/* Form Container */}
      <div className="w-full max-w-screen-lg bg-white shadow-md rounded-lg p-8 z-10 relative">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-800">Ship<span className="text-green-600">ex</span></h1>
          <p className="text-gray-600">Verify your Account</p>
          <div className="mt-2 flex justify-center">
            <div className="w-1/3 bg-green-500 h-1 rounded-full"></div>
            <div className="w-1/3 bg-gray-300 h-1 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-1 md:col-span-2 bg-green-50 p-6 rounded-lg border border-green-100 shadow-md">
            <label className="block text-sm text-gray-600 mb-2">Aadhar Card Number</label>
            <input type="text" placeholder="Enter your number" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
            <div className="mt-4 flex justify-between">
              <button className="text-gray-500 border border-gray-500 hover:bg-green-500 hover:text-white px-4 py-2 rounded-md transition ease-in-out duration-300">Cancel</button>
              <button className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-green-500 transition ease-in-out duration-300">Verify</button>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border border-green-100 shadow-md">
            <label className="block text-sm text-gray-600 mb-2">Account Number</label>
            <input type="text" placeholder="Enter your Account number" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />

            <label className="block text-sm text-gray-600 mt-4 mb-2">IFSC Code</label>
            <input type="text" placeholder="Enter your code" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>

          <div className="bg-green-50 p-6 rounded-lg border border-green-100 shadow-md">
            <label className="block text-sm text-gray-600 mb-2">Account Holder Name</label>
            <input type="text" placeholder="Enter your name" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />

            <label className="block text-sm text-gray-600 mt-4 mb-2">Phone Number</label>
            <input type="text" placeholder="Enter your number" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />

            <div className="mt-4 flex justify-between">
              <button className="text-gray-500 border border-gray-500 hover:bg-green-500 hover:text-white px-4 py-2 rounded-md transition ease-in-out duration-300">Cancel</button>
              <button className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-green-500 transition ease-in-out duration-300">Verify</button>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 bg-green-50 p-6 rounded-lg border border-green-100 shadow-md">
            <label className="block text-sm text-gray-600 mb-2">PAN</label>
            <input type="text" placeholder="XXXXX XXXXXX" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" disabled />

            <label className="block text-sm text-gray-600 mt-4 mb-2">Name (optional)</label>
            <input type="text" placeholder="Enter your number" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />

            <div className="mt-4 flex justify-between">
              <button className="text-gray-500 border border-gray-500 hover:bg-green-500 hover:text-white px-4 py-2 rounded-md transition ease-in-out duration-300">Cancel</button>
              <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition ease-in-out duration-300">Verify</button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition ease-in-out duration-300">Next</button>
        </div>
      </div>
    </div>
  );
};

export default VerificationForm;


// import React from 'react';

// const VerificationForm = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center relative">
//       {/* Background Design */}
//       <div className="absolute inset-0">
//         <div className="bg-white h-full w-full absolute top-0 left-0 z-0" style={{
//           backgroundImage: "url('https://img.freepik.com/free-vector/abstract-green-wave-modern-background-design_1055-6555.jpg?w=740&t=st=1723274478~exp=1723275078~hmac=fd1d7018e05693ffa3b142cd5e8e6915e41c9c441c79e0e743de37d28d51c9ec')", // Replace with your image path
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           opacity: 0.1,
//         }}></div>

//         <div className="bg-gradient-to-b from-transparent to-white opacity-90 h-full w-full absolute top-0 left-0 z-0"></div>
//       </div>

//       {/* Form Container */}
//       <div className="w-full max-w-screen-lg bg-white shadow-md rounded-lg p-8 z-10 relative">
//         <div className="text-center mb-8">
//           <h1 className="text-5xl font-bold text-gray-800">Ship<span className="text-green-600">ex</span></h1>
//           <p className="text-gray-600">Verify your Account</p>
//           <div className="mt-2 flex justify-center">
//             <div className="w-1/3 bg-green-500 h-1 rounded-full"></div>
//             <div className="w-1/3 bg-gray-300 h-1 rounded-full"></div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Aadhar Card Number Section */}
//           <div className="col-span-1 md:col-span-2 bg-green-50 p-6 rounded-lg border border-green-100 shadow-md">
//             <label className="block text-sm text-gray-600 mb-2">Aadhar Card Number</label>
//             <input type="text" placeholder="Enter your number" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
//             <div className="mt-4 flex justify-between">
//               <button className="text-gray-500 hover:text-white hover:bg-green-500 transition ease-in-out duration-300">Cancel</button>
//               <button className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-green-500 transition ease-in-out duration-300">Verify</button>
//             </div>
//           </div>

//           {/* Combined Box for Account Details */}
//           <div className="bg-green-50 p-6 rounded-lg border border-green-100 shadow-md">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm text-gray-600 mb-2">Account Number</label>
//                 <input type="text" placeholder="Enter your Account number" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
//               </div>

//               <div>
//                 <label className="block text-sm text-gray-600 mb-2">IFSC Code</label>
//                 <input type="text" placeholder="Enter your code" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
//               </div>

//               <div>
//                 <label className="block text-sm text-gray-600 mb-2">Account Holder Name</label>
//                 <input type="text" placeholder="Enter your name" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
//               </div>

//               <div>
//                 <label className="block text-sm text-gray-600 mb-2">Phone Number</label>
//                 <input type="text" placeholder="Enter your number" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
//               </div>
//             </div>
//             <div className="mt-4 flex justify-between">
//               <button className="text-gray-500 hover:text-white hover:bg-green-500 transition ease-in-out duration-300">Cancel</button>
//               <button className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-green-500 transition ease-in-out duration-300">Verify</button>
//             </div>
//           </div>

         
//           {/* PAN Section */}
//           <div className="col-span-1 md:col-span-2 bg-green-50 p-6 rounded-lg border border-green-100 shadow-md">
//             <label className="block text-sm text-gray-600 mb-2">PAN</label>
//             <input type="text" placeholder="XXXXX XXXXXX" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" disabled />

//             <label className="block text-sm text-gray-600 mt-4 mb-2">Name (optional)</label>
//             <input type="text" placeholder="Enter your name" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />

//             <div className="mt-4 flex justify-between">
//               <button className="text-gray-500 hover:text-white hover:bg-green-500 transition ease-in-out duration-300">Cancel</button>
//               <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition ease-in-out duration-300">Verify</button>
//             </div>
//           </div>
//         </div>

//         <div className="mt-8 text-center">
//           <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition ease-in-out duration-300">Next</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VerificationForm;
