import React, { useEffect, useState } from "react";
import Header from "../Header";
import HomeLink from "../HomeLink";
import "./style.scss";

import { PieChart, Pie } from "recharts";

const Charts = () => {
  const [dessertItems, setDessertItems] = useState([]);
  let currentItems = [];

  useEffect(() => {
    currentItems = JSON.parse(localStorage.getItem("items"));
    currentItems && setDessertItems(currentItems);
  }, []);

  return (
    <div className="chart-container">
      <Header />
      <HomeLink />
      <div className="content">
        {currentItems && (
          <PieChart width={700} height={700}>
            <Pie
              data={dessertItems}
              dataKey="price"
              outerRadius={250}
              fill="#8884d8"
              cx="50%"
              cy="50%"
              nameKey="name"
              label={({
                cx,
                cy,
                midAngle,
                innerRadius,
                outerRadius,
                value,
                index,
              }) => {
                const RADIAN = Math.PI / 180;
                // eslint-disable-next-line
                const radius = 25 + innerRadius + (outerRadius - innerRadius);
                // eslint-disable-next-line
                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                // eslint-disable-next-line
                const y = cy + radius * Math.sin(-midAngle * RADIAN);

                return (
                  <text
                    x={x}
                    y={y}
                    fill="#3c3c3c"
                    textAnchor={x > cx ? "start" : "end"}
                    dominantBaseline="central"
                  >
                    {dessertItems[index].name} ({value})
                  </text>
                );
              }}
            />
          </PieChart>
        )}
      </div>
    </div>
  );
};

export default Charts;
