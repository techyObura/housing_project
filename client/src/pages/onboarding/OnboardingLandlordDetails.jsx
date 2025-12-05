import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOnboarding } from "./OnboardingContext";

const OnboardingLandlordDetails = () => {
  const { data, addProperty, removeProperty } = useOnboarding();
  const navigate = useNavigate();

  const [property, setProperty] = useState({
    name: "",
    type: "Apartment",
    units: 1,
    rentRange: "",
  });

  const handleAdd = () => {
    if (!property.name) return alert("Enter property name");
    addProperty(property);
    setProperty({ name: "", type: "Apartment", units: 1, rentRange: "" });
  };
  const handleNext = () => {
    navigate("/onboarding/review");
  };
  return (
    <div className="min-h-screen bg-[var(--color-gray-light)] flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-xl font-bold text-[var(--color-gray-dark)]">
          Property details
        </h2>
        <p className="text-gray-600 mt-2">
          Add properties you manage — you can add more later from your
          dashboard.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <input
              value={property.name}
              onChange={(e) =>
                setProperty({ ...property, name: e.target.value })
              }
              placeholder="Property name"
              className="border rounded-lg px-3 py-2"
            />
            <select
              value={property.type}
              onChange={(e) =>
                setProperty({ ...property, type: e.target.value })
              }
              className="border rounded-lg px-3 py-2"
            >
              <option>Apartment</option>
              <option>House</option>
              <option>Bedsitter</option>
              <option>Studio</option>
            </select>
            <input
              type="number"
              value={property.units}
              onChange={(e) =>
                setProperty({ ...property, units: Number(e.target.value) })
              }
              className="border rounded-lg px-3 py-2"
            />
          </div>

          <div className="flex gap-3">
            <input
              value={property.rentRange}
              onChange={(e) =>
                setProperty({ ...property, rentRange: e.target.value })
              }
              placeholder="Rent range (KES) e.g. 15000-30000"
              className="flex-1 border rounded-lg px-3 py-2"
            />
            <button
              onClick={handleAdd}
              className="px-4 py-2 bg-[var(--color-blue-primary)] text-white rounded-lg"
            >
              Add
            </button>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Your Properties</h3>
            <div className="space-y-2">
              {data.landlord.properties.length === 0 && (
                <div className="text-sm text-gray-500">
                  No properties added yet.
                </div>
              )}
              {data.landlord.properties.map((p, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between border rounded-lg p-3"
                >
                  <div>
                    <div className="font-semibold">{p.name}</div>
                    <div className="text-sm text-gray-500">
                      {p.type} • {p.units} units • {p.rentRange}
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => removeProperty(idx)}
                      className="text-sm text-red-500"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

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

export default OnboardingLandlordDetails;
