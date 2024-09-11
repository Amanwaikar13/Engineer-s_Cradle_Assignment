"use client"

import React,{useState} from 'react';
import Image from 'next/image'; // For optimized images
import loginImage from '../../public/images/bg-image.jpg';
import { login } from '../services/api';
import { useRouter } from 'next/router'; 
import '../../src/app/globals.css'; // Adjust the path accordingly

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(formData);
      localStorage.setItem('token', data.token); // Store token
      router.push('/'); // Redirect to the homepage or a protected route
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex min-h-screen bg-white items-center justify-center" >
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-5xl" >
      <div className="w-1/2 overflow-hidden">
        <Image
          src={loginImage}
          alt="Login illustration"
          layout="responsive"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>

      {/* Right side: Form content */}
      <div className="w-1/2 p-12 flex flex-col justify-center">
        {/* Header section */}
        <div className="mb-6">
          <h1 className="text-xl font-semibold mb-2 text-black">
            Welcome back to Engineer&apos;s Cradle👋
          </h1>
          <p className="text-gray-500">
            Enter your username and password to continue
          </p>
        </div>

        {/* Google Sign-in Button */}
        <button className="w-full py-2 bg-white text-black rounded-lg mb-6 hover:bg-gray-100 border border-black flex items-center justify-center">
          <img src="/google.svg" alt="Google Logo" className="w-5 h-5 mr-2" />
          Sign in with Google
        </button>

        {/* Divider */}
        <div className="flex items-center mb-6">
          <hr className="flex-1 border-t border-gray-300" />
          <span className="mx-4 text-gray-500">or</span>
          <hr className="flex-1 border-t border-gray-300" />
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" className="block mb-2">
            Email
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange} 
              name="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-md"
            />
          </label>
          <label htmlFor="password" className="block mb-2">
            Password
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleChange} 
              value={formData.password}
              className="w-full px-3 py-2 border rounded-md"
            />
          </label>
          <button
            type="submit"
            onClick={() => router.push('/home-page')} className="w-full py-2 bg-blue-500 text-white rounded-lg mt-4 hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        {error && <p>{error}</p>}

        <p className="mt-4">
          Don&apos;t have an account?{' '}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign up here
          </a>
        </p>
      </div>
    </div>
  </div>

  );
};

export default LoginPage;