import React, { useState, useEffect } from "react";
import { useQuery } from "../shared/useQuery";

const url = "https://restcountries.com/v2/alpha/";

export function CountryPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [searchData, setSearchData] = useState([]);
  const query = useQuery();

  const searchQuery = query.get("alpha");

  const fetchData = async () => {
    try {
      const response = await fetch(url + searchQuery);
      const data = await response.json();
      setIsLoading(false);
      setSearchData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(searchData);

  if (isLoading) {
    return (
      <div>
        <h3>...Loading</h3>
      </div>
    );
  }

  if (searchData) {
    return (
      <div className="country-page">
        <div className="container">
          <div className="country-content">
            <div className="country-side-bar">
              <div className="country-flag">
                <img
                  src={searchData.flags[0]}
                  alt=""
                  className="country-flag-image"
                />
              </div>
              <h4 className="country-name">{searchData.name}</h4>
            </div>
            <div className="country-info">
              <table class="table-fill">
                <tbody class="table-hover">
                  {Object.keys(searchData).map((key) => {
                    return (
                      <tr>
                        <td class="text-left">key</td>
                        <td class="text-left">value</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <h3>No Results</h3>;
}
