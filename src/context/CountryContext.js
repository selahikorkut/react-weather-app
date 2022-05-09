import { createContext, useState } from "react";

const CountryContext = createContext();
export const CountryProvider = ({ children }) => {
  const [country, setCountry] = useState([]);
  const [currentContryid, setCurrentCountryid] = useState({"country":"304183"});
  const [currentContry, setCurrentCountry] = useState({"coord":{"lon":28.355709,"lat":37.230331}});

  const values = {
    country,
    setCountry,
    currentContry,
    setCurrentCountry,
    currentContryid,
    setCurrentCountryid,
  };
  return (
    <CountryContext.Provider value={values}>{children}</CountryContext.Provider>
  );
};
export default CountryContext;
