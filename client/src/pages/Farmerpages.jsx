import React, { useState, useEffect } from "react";
import axios from "axios";

const FarmerPages = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:8000/predict?temp=25&humidity=60&supply=100&day=12&month=2&year=2025");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center">Farmer Dashboard</h1>
      {loading ? (
        <p className="text-center mt-4">Loading...</p>
      ) : (
        <div className="mt-6 p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-lg font-semibold">Predicted Produce Price</h2>
          <p className="text-xl font-bold text-green-600">${data?.predicted_price}</p>
        </div>
      )}
    </div>
  );
}

export default FarmerPages;
