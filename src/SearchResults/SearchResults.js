import React, { useState, useEffect } from "react";

const url = "https://restcountries.eu/rest/v2/name/";
export function SearchResults() {
  const [isLoading, setIsLoading] = useState(true);
  const [searchData, setSearchData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setIsLoading(false);
      setSearchData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(searchData);

  if (isLoading) {
    return (
      <div>
        <h3>...Loading</h3>
      </div>
    );
  }

  return (
    <div>
      <h2>SearchResults</h2>
    </div>
  );
}
