import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FiMail, FiLock, FiUser } from "react-icons/fi";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(null);

  const [passwordStrength, setPasswordStrength] = useState({
    score: 0,
    label: "Weak",
    color: "red",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (name === "password") evaluatePasswordStrength(value);
  };

  // ----------------------------
  //  Password Strength Checker
  // ----------------------------
  const evaluatePasswordStrength = (password) => {
    if (!password || password.length === 0) {
      setPasswordStrength({
        score: 0,
        label: "",
        color: "transparent",
      });
      return;
    }

    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[\W]/.test(password)) score++;

    let label = "";
    let color = "";

    if (score <= 2) {
      label = "Weak";
      color = "var(--color-red-error)";
    } else if (score === 3) {
      label = "Fair";
      color = "var(--color-yellow-highlight)";
    } else if (score === 4) {
      label = "Good";
      color = "var(--color-teal-secondary)";
    } else {
      label = "Strong";
      color = "var(--color-blue-primary)";
    }

    setPasswordStrength({ score, label, color });
  };

  // ----------------------------
  //  Submit Handler
  // ----------------------------
  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    if (passwordStrength.score < 3) {
      setError("Password too weak. Please make it stronger.");
      return;
    }

    console.log("REGISTER DATA:", form);
    navigate("/verify-account");
  };

  setTimeout(() => {
    setError(null);
  }, [500]);

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
            Create Your Account
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Join thousands finding better homes.
          </p>
        </div>

        {/* Register Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-gray-600 mb-1 text-sm">
              Full Name
            </label>
            <div className="flex items-center space-x-2 border rounded-lg px-3 py-2 bg-gray-50">
              <FiUser className="text-gray-400" />
              <input
                type="text"
                name="fullName"
                placeholder="John Mwangi"
                value={form.fullName}
                onChange={handleChange}
                className="w-full bg-transparent focus:outline-none text-gray-700"
                required
              />
            </div>
          </div>

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

            {/* Password Strength Indicator */}
            {form.password && (
              <div className="mt-2">
                <div className="w-full h-1 bg-gray-200 rounded">
                  <div
                    className="h-1 rounded transition-all"
                    style={{
                      width: `${(passwordStrength.score / 5) * 100}%`,
                      background: passwordStrength.color,
                    }}
                  />
                </div>

                {passwordStrength.label && (
                  <p
                    className="text-sm mt-1 font-medium"
                    style={{ color: passwordStrength.color }}
                  >
                    {passwordStrength.label} Password
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-600 mb-1 text-sm">
              Confirm Password
            </label>
            <div className="flex items-center space-x-2 border rounded-lg px-3 py-2 bg-gray-50">
              <FiLock className="text-gray-400" />
              <input
                type="password"
                name="confirmPassword"
                placeholder="••••••••"
                value={form.confirmPassword}
                onChange={handleChange}
                className="w-full bg-transparent focus:outline-none text-gray-700"
                required
              />
            </div>
          </div>
          {error && (
            <>
              <p className="text-red-700 text-center">{error}</p>
            </>
          )}
          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-2.5 rounded-lg text-white font-semibold bg-[var(--color-blue-primary)] hover:bg-blue-700 transition"
          >
            Create Account
          </button>
        </form>

        {/* Footer Links */}
        <p className="text-center text-gray-600 text-sm mt-5">
          Already have an account?
          <Link
            to="/auth/login"
            className="text-[var(--color-orange-accent)] font-medium ml-1"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
