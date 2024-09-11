"use client";

import React, { useState } from 'react';
import Image from 'next/image'; // Uncomment if using Next.js for optimized images
import sampleImage from '../../public/images/bg-image.jpg';
import sampleImage2 from '../../public/images/a1.png';
import { signup } from '../services/api'; // Update the path accordingly
import Link from 'next/link';
import '../../src/app/globals.css'; // Adjust the path accordingly

const SignupPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); // Update based on input name
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(formData);
      // Redirect or show success message
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex h-screen bg-white items-center justify-center rounded-2xl">
      <div className="flex bg-white shadow-lg rounded-2xl overflow-hidden w-full max-w-6xl" style={{ padding: '30px' }}>
        {/* Left Side */}
        <div className="w-1/2 p-12 flex flex-col justify-center text-black" style={{ margin: '20px' }}>
        <div style={{ width: '200px', height: '150px', overflow: 'hidden', marginBottom:0 }}>
        <Image
        src={sampleImage2}
        alt="illustration"
        layout="fixed"
        objectFit="cover"
        className="rounded-2xl"

      />
          </div>
          <h1 className="text-3xl font-bold mb-2" style={{marginTop:0}}>Streamline Your Engineering Projects with Engieer&apos;s Cradle</h1>
          <p className="text-lg mb-6">Sign up to join our community </p>
          <button className="w-full py-2 bg-white text-black rounded-lg mb-6 hover:bg-gray-100 border border-gray-500 flex items-center justify-center">
            <img src="/google.svg" alt="Google Logo" className="w-5 h-5 mr-2" />
            Sign in with Google
          </button>
          <div className="flex items-center mb-6">
            <hr className="flex-1 border-t border-gray-300" />
            <span className="mx-4 text-gray-500">or</span>
            <hr className="flex-1 border-t border-gray-300" />
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={formData.name}
                type="text"
                placeholder="Enter your name"
                onChange={handleChange} // Correct handleChange function
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange} // Correct handleChange function
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                onChange={handleChange} // Correct handleChange function
                placeholder="Enter your password"
                value={formData.password}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-black text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Create Account
            </button>
          </form>
          {error && <p>{error}</p>}
          <p className="mt-4">
            Already have an account?{' '}
            <Link href="/login">
              <button className="text-blue-500 hover:text-blue-600" type="button">
                Login here
              </button>
            </Link>
          </p>
        </div>

        <div className="w-1/2 rounded-2xl overflow-hidden">
          <Image
            src={sampleImage}
            alt="Signup illustration"
            layout="responsive"
            objectFit="cover"
            className="rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
