import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import styled from 'styled-components';

const data = [
    {
      name: '11:00',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: '12:00',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: '1:00',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: '2:00 ',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: '3:00',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: '4:00',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: '5:00',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

const Charts = styled.div`
  color: white;
  background-color: #111317;
  border-radius: 10px;
  padding: 1rem;
`


function Chart() {
  return (
    <Charts>
        <LineChart
            width={700}
            height={400}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
            }}
        >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
        />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
    </Charts>
  )
}

export default Chart