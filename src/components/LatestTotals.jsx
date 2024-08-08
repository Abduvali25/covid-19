"use client";

import React, { useState, useEffect } from "react";

const LatestTotals = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = 'https://covid-19-data.p.rapidapi.com/totals?format=json';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '8f02c7ea33msh73faadcae112bdep16171ajsnafb0c35d4271',
        'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
      }
    };

    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error("Failed to fetch data.");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {error && <p>Error: {error}</p>}
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
};

export default LatestTotals;
