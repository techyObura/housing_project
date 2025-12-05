import { Link } from "react-router-dom";
import { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";

const LoginPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("LOGIN DATA:", form);
  };

  return (
    <div className="min-h-screen bg-[var(--color-gray-light)] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        {/* Logo Area */}
        <div className="text-center mb-6">
          <svg
            width="55"
            height="55"
            viewBox="0 0 24 24"
            fill="none"
            className="mx-auto mb-2"
          >
            <path
              d="M3 10L12 3L21 10V20C21 20.55 20.55 21 20 21H4C3.45 21 3 20.55 3 20V10Z"
              stroke="var(--color-blue-primary)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 21V12H15V21"
              stroke="var(--color-teal-secondary)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <h2 className="text-2xl font-semibold text-[var(--color-gray-dark)]">
            Welcome Back
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Log in to continue your housing journey
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-gray-600 mb-1 text-sm">Email</label>
            <div className="flex items-center space-x-2 border rounded-lg px-3 py-2 bg-gray-50">
              <FiMail className="text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-transparent focus:outline-none text-gray-700"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-600 mb-1 text-sm">Password</label>
            <div className="flex items-center space-x-2 border rounded-lg px-3 py-2 bg-gray-50">
              <FiLock className="text-gray-400" />
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={form.password}
                onChange={handleChange}
                className="w-full bg-transparent focus:outline-none text-gray-700"
                required
              />
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <Link
              to="/auth/forgot-password"
              className="text-[var(--color-blue-primary)] text-sm hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2.5 rounded-lg text-white font-semibold bg-[var(--color-blue-primary)] hover:bg-blue-700 transition"
          >
            Log In
          </button>
        </form>

        {/* Footer Links */}
        <p className="text-center text-gray-600 text-sm mt-5">
          Don’t have an account?
          <Link
            to="/auth/register"
            className="text-[var(--color-orange-accent)] font-medium ml-1"
          >
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
