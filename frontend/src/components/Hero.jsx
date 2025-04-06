// import React from 'react';
// import Slider from 'react-slick';

// // Import images explicitly
// import img1 from '../assets/img1.jpg';
// import img2 from '../assets/img2.jpg';
// import img3 from '../assets/img3.jpg';
// import img4 from '../assets/img4.jpg';

// const Hero = () => {
//   const images = [img1, img2, img3, img4];  // Use imported images

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: false
//   };

//   return (
//     <div className="hero-slider">
//       <Slider {...settings}>
//         {images.map((image, index) => (
//           <div key={index} className="w-full h-[500px]">
//             <img
//               src={image}
//               alt={`Slide ${index + 1}`}
//               className="w-full h-full object-contain rounded-md"
//             />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Hero;


// import React from 'react';
// import Slider from 'react-slick';

// // Import images explicitly
// import img1 from '../assets/img1.jpg';
// import img2 from '../assets/img2.jpg';
// import img3 from '../assets/img3.jpg';
// import img4 from '../assets/img4.jpg';

// const Hero = () => {
//   const images = [img1, img2, img3, img4];  // Use imported images

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: false
//   };

//   return (
//     <div className="hero-slider">
//       <Slider {...settings}>
//         {images.map((image, index) => (
//           <div key={index} className="w-full h-[500px]">
//             <img
//               src={image}
//               alt={`Slide ${index + 1}`}
//               className="w-full h-full object-contain rounded-md"
//             />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Hero;


// import React from 'react';
// import Slider from 'react-slick';

// // Import images explicitly
// import img1 from '../assets/img1.jpg';
// import img2 from '../assets/img2.jpg';
// import img3 from '../assets/img3.jpg';
// import img4 from '../assets/img4.jpg';

// const Hero = () => {
//   const images = [img1, img2, img3, img4]; // Array of images

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: false,
//   };

//   return (
//     <div className="relative">
//       <Slider {...settings}>
//         {images.map((image, index) => (
//           <div key={index} className="w-full h-[600px] relative">
//             {/* Background Image */}
//             <img
//               src={image}
//               alt={`Slide ${index + 1}`}
//               className="w-full h-full object-contain"
//             />
//             {/* Overlay */}
//             <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
//             {/* Text Overlay */}
//             <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 z-10">
//               <h1 className="text-5xl font-bold mb-4">
//                 Welcome to Tharu Women Upliftment Center
//               </h1>
//               <p className="text-lg max-w-3xl leading-relaxed">
//                 Our mission is to empower women, foster sustainable development, and create a community where everyone has equal opportunities. Through education, leadership programs, and support services, we strive to make a positive and lasting impact.
//               </p>
//               <div className="mt-6 flex gap-4">
//                 <a
//                   href="/about"
//                   className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300"
//                 >
//                   Learn More
//                 </a>
//                 <a
//                   href="/donate-us"
//                   className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
//                 >
//                   Donate Now
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Hero;


import React from 'react';
import Slider from 'react-slick';

// Import images explicitly
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';

const Hero = () => {
  const images = [img1, img2, img3, img4]; // Array of images

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="relative h-[650px]">
      {/* Image Slider */}
      <Slider {...settings} className="h-full">
        {images.map((image, index) => (
          <div key={index} className="w-full h-full">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[650px] object-cover"
            />
          </div>
        ))}
      </Slider>

      {/* Static Text Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end items-center text-center text-white px-6 z-10">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to Tharu Women Upliftment Center
        </h1>
        <h1 className="text-5xl font-bold mb-4">थारु महिला उत्थान केन्द्रमा स्वागद छ ।
        </h1>
        {/* <p className="text-lg max-w-3xl leading-relaxed">
          Our mission is to empower women, foster sustainable development, and
          create a community where everyone has equal opportunities. Through
          education, leadership programs, and support services, we strive to
          make a positive and lasting impact.
        </p> */}
        <div className="mt-6 flex gap-4">
          {/* <a
            href="/about"
            className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300"
          >
            Learn More
          </a>
          <a
            href="/donate-us"
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Donate Now
          </a> */}
        </div>
      </div>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
    </div>
  );
};

export default Hero;
