import React, { createContext, useContext, useState } from "react";

const OnboardingContext = createContext();

export const useOnboarding = () => useContext(OnboardingContext);

export const OnboardingProvider = ({ children }) => {
  const [data, setData] = useState({
    userId: null,
    email: null,
    role: null, // 'tenant' | 'landlord' | 'housekeeper'
    personal: {
      fullName: "",
      idName: "",
      citizenship: "",
      phone: "",
      photo: null, // File or URL
    },
    location: {
      country: "Kenya",
      state: "",
      county: "",
      city: "",
      ward: "",
    },
    landlord: {
      properties: [], // array of property objects
    },
    housekeeper: {
      skills: [],
      experienceYears: 0,
    },
  });

  const update = (patch) => setData((d) => ({ ...d, ...patch }));
  const updateNested = (path, value) => {
    // simple helper: path like 'personal.fullName' or 'location.city'
    const keys = path.split(".");
    setData((d) => {
      const copy = JSON.parse(JSON.stringify(d));
      let cur = copy;
      for (let i = 0; i < keys.length - 1; i++) cur = cur[keys[i]];
      cur[keys[keys.length - 1]] = value;
      return copy;
    });
  };

  const addProperty = (property) => {
    setData((d) => ({
      ...d,
      landlord: {
        ...d.landlord,
        properties: [...d.landlord.properties, property],
      },
    }));
  };

  const removeProperty = (index) => {
    setData((d) => ({
      ...d,
      landlord: {
        ...d.landlord,
        properties: d.landlord.properties.filter((_, i) => i !== index),
      },
    }));
  };

  return (
    <OnboardingContext.Provider
      value={{ data, update, updateNested, addProperty, removeProperty }}
    >
      {children}
    </OnboardingContext.Provider>
  );
};
