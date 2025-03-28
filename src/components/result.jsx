import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip} from "recharts";

export const Result = () => {
    const query = useSelector((state) => state.query.value.query);
  const [loading, setLoading] = useState(false);
  const [dummyData, setDummyData] = useState([]);

  const generateDummyData = (keyword) => {
    const kw = keyword.toLowerCase();
    console.log('Generating for keyword:', kw); 
    if (kw.includes("sales") || kw.includes("trend")) {
      return [
        { name: "January", value: Math.floor(Math.random() * 1000) },
        { name: "February", value: Math.floor(Math.random() * 1000) },
        { name: "March", value: Math.floor(Math.random() * 1000) },
        { name: "April", value: Math.floor(Math.random() * 1000) },
      ];
    } else if (kw.includes("profit")) {
      return [
        { name: "Jan", value: Math.floor(Math.random() * 500) },
        { name: "Feb", value: Math.floor(Math.random() * 300) },
        { name: "Mar", value: Math.floor(Math.random() * 200) },
      ];
    }
    return [];
  };

  useEffect(() => {
    console.log('Query changed to:', query);
    if (query) {
      setLoading(true);
      setDummyData([]);
      setTimeout(() => {
        const data = generateDummyData(query);
        console.log('Generated data:', data); 
        setDummyData(data);
        setLoading(false);
      }, 1500);
    }
  }, [query]);

  console.log('Rendering with dummyData:', dummyData);

  return (
    <div className="p-5 bg-gray-50 shadow-md rounded-lg">
      <h1 className="text-lg font-bold mb-3">Result</h1>
      {loading ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
          <p className="ml-3 text-blue-500 font-medium">Loading data...</p>
        </div>
      ) : dummyData.length > 0 ? (
        <div className="w-full h-64">
         <BarChart
    width={500}
    height={300}
    data={dummyData}
    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Bar dataKey="value" fill="#8884d8" />
  </BarChart>
        </div>
      ) : (
        <p className="text-gray-600">No relevant data found for the query.</p>
      )}
    </div>
  );
};