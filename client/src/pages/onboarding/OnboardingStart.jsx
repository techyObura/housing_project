import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function OnboardingStart() {
  const navigate = useNavigate();

  const begin = () => {
    // ensure there's a userId or email in data in real app
    navigate("/onboarding/role");
  };

  return (
    <div className="min-h-screen bg-[var(--color-gray-light)] flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-[var(--color-gray-dark)]">
          Welcome — Let’s set up your account
        </h1>
        <p className="text-gray-600 mt-2">
          We only need a few details to get you started. You can complete the
          rest later.
        </p>

        <div className="mt-6 space-y-4">
          <div className="bg-[var(--color-blue-primary)] text-white p-4 rounded-lg">
            <h3 className="font-semibold">Why we ask this</h3>
            <p className="text-sm">
              Verifying identity, role and location helps us keep the community
              safe and trustworthy.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={begin}
              className="px-4 py-2 bg-[var(--color-teal-secondary)] text-white rounded-lg"
            >
              Get Started
            </button>
            <Link to="/" className="px-4 py-2 border rounded-lg">
              Maybe later
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
