import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const VerifyAccountPage = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(30);
  const inputsRef = useRef([]);
  const navigate = useNavigate();

  const maskedEmail = "b***@gmail.com";

  useEffect(() => {
    if (timer <= 0) return;
    const interval = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  useEffect(() => {
    if (code.join("").length === 6) handleSubmit();
  }, [code]);

  const handleChange = (value, index) => {
    if (/^\d?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value && index < 5) inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleSubmit = async () => {
    const otp = code.join("");
    if (otp.length < 6) return;

    setLoading(true);
    setMessage("");

    try {
      await new Promise((res) => setTimeout(res, 1200));
      setMessage("✔️ Email verified successfully!");

      setTimeout(() => navigate("/onboarding/start"), 1200);
    } catch (err) {
      setMessage("❌ Verification failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const resendCode = () => {
    if (timer > 0) return;
    setTimer(30);
    setMessage("A new verification code has been sent.");
    setCode(["", "", "", "", "", ""]);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-light p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-lg p-8 rounded-2xl w-full max-w-md"
      >
        <h1 className="text-2xl font-bold text-blue-primary text-center mb-2">
          Verify Your Email
        </h1>
        <p className="text-gray-dark text-center mb-4">
          Enter the verification code sent to{" "}
          <span className="font-semibold">{maskedEmail}</span>
        </p>

        <div className="space-y-6 mt-8">
          <div className="flex justify-between gap-3">
            {code.map((digit, index) => (
              <motion.input
                key={index}
                type="text"
                maxLength="1"
                className="w-12 h-14 text-center backdrop-blur-md bg-white/40 shadow-inner border border-gray-dark/20 rounded-xl text-xl focus:outline-none focus:border-blue-primary"
                value={digit}
                ref={(el) => (inputsRef.current[index] = el)}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                whileFocus={{ scale: 1.1 }}
              />
            ))}
          </div>

          {message && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-orange-accent font-medium"
            >
              {message}
            </motion.p>
          )}

          <button
            disabled={loading}
            onClick={handleSubmit}
            className="w-full bg-blue-primary text-white py-3 rounded-lg font-semibold hover:bg-blue-primary/90 transition disabled:bg-blue-primary/50"
          >
            {loading ? "Verifying..." : "Verify Email"}
          </button>

          <div className="text-center text-sm text-gray-dark mt-2">
            {timer > 0 ? (
              <p>
                Resend code in{" "}
                <span className="text-blue-primary font-semibold">
                  {timer}s
                </span>
              </p>
            ) : (
              <span
                onClick={resendCode}
                className="text-blue-primary cursor-pointer font-semibold"
              >
                Resend Code
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default VerifyAccountPage;
