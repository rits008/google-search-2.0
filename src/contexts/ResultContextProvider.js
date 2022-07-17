import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1'


function ResultContextProvider({ children }) {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // get result
  const getResults = async (type) => {
    setIsLoading(true);

    const res = await fetch(`${baseUrl}${type}`, {
      method: 'GET',
      headers: {
        'X-User-Agent': 'desktop',
        'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
        'X-RapidAPI-Key': 'f14355ff42msh8248adb2360cb45p1888f1jsnc08e5b359de9'
      }
    });

    const data = await res.json();

    if (type.includes('/news')) {
      setResults(data.entries);

    }
    else if (type.includes('/image')) {
      setResults(data.image_results);
    }
    else {
      setResults(data.results)
    }



    setIsLoading(false);
  };
  return (
    <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>
      {children}
    </ResultContext.Provider>
  )
}

export default ResultContextProvider

export const useResultContext = () => useContext(ResultContext);