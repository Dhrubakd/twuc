import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (send data to backend or alert the user)
    alert(`Thank you, ${formData.name}. Your message has been sent!`);
    setFormData({ name: "", email: "", phone: "", message: "" }); // Clear the form
  };

  return (
    <div className="container mx-auto py-10 px-4 mt-20">
      <h2 className="text-4xl font-bold text-center mb-6">Contact Us</h2>
      <p className="text-lg text-center text-gray-700 mb-8">
        Have a question or need assistance? Get in touch with us today!
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-blue-700">
            Send Us a Message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Contact Details */}
        <div className="bg-blue-100 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-blue-700">
            Contact Details
          </h3>
          <p className="mb-2">
            <span className="font-bold">Email:</span>{" "}
            <a
              href="mailto:twuc.ed@gmail.com"
              className="text-blue-600 hover:underline"
            >
              twuc.bardiya2049@gmail.com
            </a>
          </p>
          {/* <p className="mb-2">
            <span className="font-bold">Phone:</span> +977 - 9858021457
          </p> */}
          <p className="mb-2">
            <span className="font-bold">Land-line:</span> 084 - 420350 / 347
          </p>
          <p className="mb-4">
            <span className="font-bold">Address:</span> Gulariya-7, Bardiya,
            Nepal
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-blue-700">
            Office Hours
          </h3>
          <p className="mb-2">
            <span className="font-bold">Sunday - Friday:</span> 9:00 AM - 5:00
            PM
          </p>
          <p className="mb-4">
            <span className="font-bold">Saturday:</span> Closed
          </p>

          <div className="rounded-lg overflow-hidden shadow-md mt-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.1651298833184!2d81.23130597420642!3d28.21356766050181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3997cf3eb24eae0f%3A0x7ab45b89e60dcbd3!2sGulariya%207%2C%20Bardiya%2C%20Nepal!5e0!3m2!1sen!2snp!4v1684234548123!5m2!1sen!2snp"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Maps Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
