'use client';

import Link from 'next/link';

function Login() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-blue-900">My Account</h1>
          <p className="text-gray-500 mt-2">
            <span>Home</span>
            <span className="mx-2">.</span>
            <span>Pages</span>
            <span className="mx-2">.</span>
            <span className="text-pink-500">My Account</span>
          </p>
        </div>
      </header>

      {/* Login Form Section */}
      <main className="flex justify-center items-center py-16">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
          <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>
          <p className="text-gray-500 text-center mb-6">
            Please login using account details below.
          </p>

          <form className="space-y-4">
            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-gray-600 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Email Address"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-gray-600 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Password"
              />
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <Link href="/forgot-password" className="text-pink-500 text-sm">
                Forgot your password?
              </Link>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-2 rounded-md font-semibold hover:bg-pink-600"
            >
              Sign In
            </button>
          </form>

          {/* Create Account Link */}
          <p className="text-center text-gray-500 mt-4">
            Don’t have an Account?{' '}
            <Link href="/signup" className="text-pink-500 underline">
              Create account
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}

export default Login;
