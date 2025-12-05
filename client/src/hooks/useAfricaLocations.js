import { useState, useEffect } from "react";
import { africaLocations } from "../data/africaLocations";

export const useAfricaLocations = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [wards, setWards] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedWard, setSelectedWard] = useState("");

  useEffect(() => {
    setCountries(africaLocations.map((c) => c.country));
  }, []);

  useEffect(() => {
    if (!selectedCountry) return setStates([]);
    const countryObj = africaLocations.find(
      (c) => c.country === selectedCountry
    );
    setStates(countryObj ? countryObj.states.map((s) => s.name) : []);
    setSelectedState("");
    setCities([]);
    setWards([]);
    setSelectedCity("");
    setSelectedWard("");
  }, [selectedCountry]);

  useEffect(() => {
    if (!selectedState) return setCities([]);
    const countryObj = africaLocations.find(
      (c) => c.country === selectedCountry
    );
    const stateObj = countryObj.states.find((s) => s.name === selectedState);
    setCities(stateObj ? stateObj.cities.map((c) => c.name) : []);
    setSelectedCity("");
    setWards([]);
    setSelectedWard("");
  }, [selectedState]);

  useEffect(() => {
    if (!selectedCity) return setWards([]);
    const countryObj = africaLocations.find(
      (c) => c.country === selectedCountry
    );
    const stateObj = countryObj.states.find((s) => s.name === selectedState);
    const cityObj = stateObj.cities.find((c) => c.name === selectedCity);
    setWards(cityObj ? cityObj.wards : []);
    setSelectedWard("");
  }, [selectedCity]);

  return {
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
  };
};
