import React from "react";
import { ResponsiveContainer, XAxis, YAxis, LineChart, Line } from "recharts";
import styled from "styled-components";
import { useSelector } from "react-redux";

export default function Charts() {
  const product = useSelector((state) => state.appData.dataOb);

  const monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const string_to_month = (dateString) => {
    const dates = dateString.toString();
    const splitted = dates.split("-");
    return monthNames[parseInt(splitted[1] - 1)];
  };

  return (
    <PContainer>
      <Title>Retail Sales</Title>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={product.sales}>
          <XAxis
            dataKey="weekEnding"
            minTickGap={50}
            tickLine={false}
            tickFormatter={string_to_month}
          />
          <YAxis hide domain={["dataMin-1000000", "dataMax+1000000"]} />
          <Line
            type="monotone"
            dataKey="retailSales"
            strokeWidth={4}
            dot={false}
            stroke="#44a7f6"
          />
          <Line
            type="monotone"
            dataKey="wholesaleSales"
            strokeWidth={4}
            dot={false}
            stroke="#9aa5be"
          />
        </LineChart>
      </ResponsiveContainer>
    </PContainer>
  );
}

export const PContainer = styled.div`
  padding: 10px;
`;

export const Title = styled.p`
  padding: 0px 20px;
  font-size: 1.3rem;
`;
