import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

export const Result = () => {
  const query = useSelector((state) => state.query.value.query);


  const [loading, setLoading] = useState(false);
  const [dummyData, setDummyData] = useState([]);

  const generateDummyData = (keyword) => {
    const kw = keyword.toLowerCase();
    console.log('Generating for keyword:', kw);
    if (kw.includes("sales") || kw.includes("trend")) {
      return [
        { name: "Jan", value: Math.floor(Math.random() * 1000) },
        { name: "Feb", value: Math.floor(Math.random() * 1000) },
        { name: "Mar", value: Math.floor(Math.random() * 1000) },
        { name: "Apr", value: Math.floor(Math.random() * 1000) },
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

  const [chartWidth, setChartWidth] = useState(window.innerWidth * 0.9);

  console.log('Rendering with dummyData:', dummyData);

  return (
    <div className="bg-gray-50 shadow-md rounded-lg w-[100%]">
      <h1 className="text-2xl font-bold mb-3 pl-2">Result</h1>
      {loading ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-10 w-10 border-t-4"></div>
          <p className="ml-3 font-medium">Loading data...</p>
        </div>
      ) : dummyData.length > 0 ? (
        <div className="w-full h-full">
          <div className="pl-2 text-lg font-semibold">{query}</div>
          <BarChart
            width={chartWidth > 500 ? 500 : chartWidth}
            height={300}
            data={dummyData}
            margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="1 " />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8" barSize={30} />
          </BarChart>
        </div>
      ) : (
        <>
          <p className="text-gray-600">No relevant data found for the query.</p><br />
          <p>query should consist of keyword sales or profit</p>
        </>

      )}
    </div>
  );
};