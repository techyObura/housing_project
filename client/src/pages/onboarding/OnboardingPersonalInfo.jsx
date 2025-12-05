import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useOnboarding } from "./OnboardingContext";
import { FiUpload } from "react-icons/fi";

// import full country list from package
import { countries } from "country-list-json/index.js"; // <-- Use this

const OnboardingPersonalInfo = () => {
  const { data, updateNested } = useOnboarding();
  const navigate = useNavigate();

  const [local, setLocal] = useState({
    fullName: data.personal.fullName || "",
    citizenship: data.personal.citizenship || countries[0].name,
    phone: data.personal.phone || "",
    photoPreview: data.personal.photo || null,
  });

  // Find selected country object
  const selectedCountry = useMemo(
    () => countries.find((c) => c.name === local.citizenship) || countries[0],
    [local.citizenship]
  );

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setLocal((prev) => ({ ...prev, photoPreview: url }));
    updateNested("personal.photo", file);
  };

  const handlePhoneChange = (e) => {
    const digits = e.target.value.replace(/\D/g, "");
    // optional: no strict length checking here because different countries have different lengths
    setLocal((prev) => ({ ...prev, phone: digits }));
  };

  const handleNext = () => {
    if (!local.fullName || !local.phone) {
      alert("Please fill in your full name and phone number.");
      return;
    }

    updateNested("personal.fullName", local.fullName);
    updateNested("personal.citizenship", local.citizenship);
    updateNested(
      "personal.phone",
      `${selectedCountry.dial_code}${local.phone}`
    );
    navigate("/onboarding/location");
  };

  return (
    <div className="min-h-screen bg-[var(--color-gray-light)] flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-xl font-bold text-[var(--color-gray-dark)]">
          Personal Information
        </h2>
        <p className="text-gray-600 mt-2">
          Tell us about yourself. We’ll keep this private and secure.
        </p>

        <div className="mt-6 space-y-4">
          {/* Full Name */}
          <div>
            <label className="text-sm text-gray-600">
              Full name (as on ID)
            </label>
            <input
              value={local.fullName}
              onChange={(e) => setLocal({ ...local, fullName: e.target.value })}
              className="w-full mt-1 border rounded-lg px-3 py-2"
            />
          </div>

          {/* Citizenship + Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-sm text-gray-600">Citizenship</label>
              <select
                value={local.citizenship}
                onChange={(e) =>
                  setLocal({ ...local, citizenship: e.target.value, phone: "" })
                }
                className="w-full mt-1 border rounded-lg px-3 py-2"
              >
                {countries.map((c) => (
                  <option key={c.code} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm text-gray-600">Phone number</label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-100 text-gray-600">
                  {selectedCountry.dial_code}
                </span>
                <input
                  type="text"
                  value={local.phone}
                  onChange={handlePhoneChange}
                  className="flex-1 border rounded-r-lg px-3 py-2"
                  placeholder="Enter phone number"
                />
              </div>
            </div>
          </div>

          {/* Profile Photo */}
          <div>
            <label className="text-sm text-gray-600">
              Upload profile photo
            </label>
            <div className="mt-2 flex items-center gap-3">
              <label className="flex items-center gap-2 px-3 py-2 bg-white border rounded-lg cursor-pointer">
                <FiUpload />
                <span className="text-sm">Choose file</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFile}
                  className="hidden"
                />
              </label>

              {local.photoPreview && (
                <img
                  src={local.photoPreview}
                  alt="preview"
                  className="w-20 h-20 object-cover rounded"
                />
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-4">
            <button
              onClick={() => navigate(-1)}
              className="px-4 py-2 border rounded-lg"
            >
              Back
            </button>
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-[var(--color-teal-secondary)] text-white rounded-lg"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingPersonalInfo;
