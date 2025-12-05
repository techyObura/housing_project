import React from "react";
import { useNavigate } from "react-router-dom";
import { useOnboarding } from "./OnboardingContext";
import { useAfricaLocations } from "../../hooks/useAfricaLocations";

const OnboardingLocation = () => {
  const { data, updateNested } = useOnboarding();
  const navigate = useNavigate();

  const {
    countries,
    states,
    cities,
    wards,
    selectedCountry,
    selectedState,
    selectedCity,
    selectedWard,
    setSelectedCountry,
    setSelectedState,
    setSelectedCity,
    setSelectedWard,
  } = useAfricaLocations();

  const handleNext = () => {
    // Save location to onboarding context
    updateNested("location.country", selectedCountry);
    updateNested("location.county", selectedState);
    updateNested("location.city", selectedCity);
    updateNested("location.ward", selectedWard);

    // Navigate to next step based on role
    if (data.role === "landlord") navigate("/onboarding/landlord-details");
    else if (data.role === "housekeeper")
      navigate("/onboarding/housekeeper-details");
    else navigate("/onboarding/review");
  };

  return (
    <div className="min-h-screen bg-[var(--color-gray-light)] flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-[var(--color-gray-dark)] mb-2">
          Your Location
        </h2>
        <p className="text-gray-600 mb-6">
          We use this information to suggest properties and services near you.
        </p>

        <div className="space-y-4">
          {/* Country */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">Country</label>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-blue-primary)]"
            >
              <option value="">Select Country</option>
              {countries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* State/Province */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              State / Province
            </label>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-blue-primary)]"
            >
              <option value="">Select State</option>
              {states.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* City / County */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              City / County
            </label>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-blue-primary)]"
            >
              <option value="">Select City</option>
              {cities.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* Ward */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">Ward</label>
            <select
              value={selectedWard}
              onChange={(e) => setSelectedWard(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-blue-primary)]"
            >
              <option value="">Select Ward</option>
              {wards.map((w) => (
                <option key={w} value={w}>
                  {w}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 border rounded-lg text-gray-700 hover:bg-gray-100 transition"
          >
            Back
          </button>
          <button
            onClick={handleNext}
            disabled={
              !selectedCountry ||
              !selectedState ||
              !selectedCity ||
              !selectedWard
            }
            className="px-6 py-2 bg-[var(--color-teal-secondary)] text-white rounded-lg hover:bg-teal-500 transition disabled:bg-gray-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingLocation;
