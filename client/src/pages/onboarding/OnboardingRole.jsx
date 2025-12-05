import React from "react";
import { useNavigate } from "react-router-dom";
import { useOnboarding } from "./OnboardingContext";

export default function OnboardingRole() {
  const { data, updateNested } = useOnboarding();
  const navigate = useNavigate();

  const choose = (role) => {
    updateNested("role", role);
    // push to personal info next
    navigate("/onboarding/personal-info");
  };

  return (
    <div className="min-h-screen bg-[var(--color-gray-light)] flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-xl font-bold text-[var(--color-gray-dark)]">
          Select your role
        </h2>
        <p className="text-gray-600 mt-2">
          This determines the information we’ll collect and your dashboard
          experience.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button
            onClick={() => choose("tenant")}
            className="p-6 bg-white border rounded-lg text-left hover:shadow-md"
          >
            <h3 className="font-semibold">Tenant</h3>
            <p className="text-sm text-gray-500 mt-1">
              Find and rent verified homes.
            </p>
          </button>

          <button
            onClick={() => choose("landlord")}
            className="p-6 bg-white border rounded-lg text-left hover:shadow-md"
          >
            <h3 className="font-semibold">Landlord</h3>
            <p className="text-sm text-gray-500 mt-1">
              List properties and manage tenants.
            </p>
          </button>

          <button
            onClick={() => choose("housekeeper")}
            className="p-6 bg-white border rounded-lg text-left hover:shadow-md"
          >
            <h3 className="font-semibold">Housekeeper</h3>
            <p className="text-sm text-gray-500 mt-1">
              Offer domestic services and build reputation.
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
