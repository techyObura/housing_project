import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOnboarding } from "./OnboardingContext";

const OnboardingHousekeeperDetails = () => {
  const { data, updateNested } = useOnboarding();
  const navigate = useNavigate();

  const [local, setLocal] = useState({
    skills: data.housekeeper.skills || [],
    experienceYears: data.housekeeper.experienceYears || 0,
    bio: "",
  });
  const [skillInput, setSkillInput] = useState("");

  const addSkill = () => {
    if (!skillInput) return;
    setLocal((l) => ({ ...l, skills: [...l.skills, skillInput] }));
    setSkillInput("");
  };

  const removeSkill = (idx) =>
    setLocal((l) => ({ ...l, skills: l.skills.filter((_, i) => i !== idx) }));

  const handleNext = () => {
    updateNested("housekeeper.skills", local.skills);
    updateNested("housekeeper.experienceYears", local.experienceYears);
    navigate("/onboarding/review");
  };
  return (
    <div className="min-h-screen bg-[var(--color-gray-light)] flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-xl font-bold text-[var(--color-gray-dark)]">
          Housekeeper Profile
        </h2>
        <p className="text-gray-600 mt-2">
          Share your skills and availability to get matched with jobs.
        </p>

        <div className="mt-6 space-y-4">
          <div>
            <label className="text-sm text-gray-600">Add a skill</label>
            <div className="flex gap-2 mt-2">
              <input
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                className="flex-1 border rounded-lg px-3 py-2"
                placeholder="e.g. Deep cleaning"
              />
              <button
                onClick={addSkill}
                className="px-4 py-2 bg-[var(--color-blue-primary)] text-white rounded-lg"
              >
                Add
              </button>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {local.skills.map((s, idx) => (
                <div
                  key={idx}
                  className="px-3 py-1 bg-gray-100 rounded-full flex items-center gap-2"
                >
                  <span className="text-sm">{s}</span>
                  <button
                    onClick={() => removeSkill(idx)}
                    className="text-xs text-red-500"
                  >
                    x
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-600">Years of experience</label>
            <input
              type="number"
              value={local.experienceYears}
              onChange={(e) =>
                setLocal({ ...local, experienceYears: Number(e.target.value) })
              }
              className="w-32 mt-1 border rounded-lg px-3 py-2"
            />
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

export default OnboardingHousekeeperDetails;
