import React from "react";
import { useNavigate } from "react-router-dom";
import { useOnboarding } from "./OnboardingContext";

const OnboardingReview = () => {
  const { data } = useOnboarding();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    // In a real app, submit `data` to backend and handle response
    console.log("FINAL ONBOARDING SUBMIT", data);

    // Mock: redirect to role dashboard
    if (data.role === "tenant") navigate("/tenant/dashboard");
    else if (data.role === "landlord") navigate("/landlord/dashboard");
    else navigate("/housekeeper/dashboard");
  };

  return (
    <div className="min-h-screen bg-[var(--color-gray-light)] flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-xl font-bold text-[var(--color-gray-dark)]">
          Review & Submit
        </h2>
        <p className="text-gray-600 mt-2">
          Confirm your details before we create your profile.
        </p>

        <div className="mt-6 space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Personal</h3>
            <div className="text-sm text-gray-700 mt-2">
              {data.personal.fullName}
            </div>
            <div className="text-sm text-gray-500">
              {data.personal.idName} • {data.personal.citizenship}
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Location</h3>
            <div className="text-sm text-gray-700 mt-2">
              {data.location.country} • {data.location.county} •{" "}
              {data.location.city}
            </div>
          </div>

          {data.role === "landlord" && (
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold">Properties</h3>
              <div className="mt-2 space-y-2">
                {data.landlord.properties.map((p, idx) => (
                  <div key={idx} className="text-sm text-gray-700">
                    {p.name} — {p.type} — {p.units} units — {p.rentRange}
                  </div>
                ))}
              </div>
            </div>
          )}

          {data.role === "housekeeper" && (
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold">Housekeeper Profile</h3>
              <div className="mt-2 text-sm text-gray-700">
                Skills: {data.housekeeper.skills.join(", ")}
              </div>
              <div className="mt-1 text-sm text-gray-700">
                Experience: {data.housekeeper.experienceYears} years
              </div>
            </div>
          )}

          <div className="flex justify-between mt-4">
            <button
              onClick={() => navigate(-1)}
              className="px-4 py-2 border rounded-lg"
            >
              Back
            </button>
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-[var(--color-blue-primary)] text-white rounded-lg"
            >
              Submit & Finish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingReview;
