'use client'
import React from 'react';
import {Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

const data = [
    {
        name: 'Page A',
        click: 4000,
        visit: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        click: 3000,
        visit: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        click: 2000,
        visit: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        click: 2780,
        visit: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        click: 1890,
        visit: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        click: 2390,
        visit: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        click: 3490,
        visit: 4300,
        amt: 2100,
    },
];

const Chart = () => {
    return (
        <div className='h-1/3 custom-container'>
            <h2 className='text-2xl text-slate-500 dark:text-slate-400 mb-2.5'>Weekly Recap</h2>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip contentStyle={{background: '#151c2c', border: 'none', borderRadius: '6px'}}/>
                    <Legend/>
                    <Line type="monotone" dataKey="visit" stroke="#8884d8" strokeDasharray="5 5"/>
                    <Line type="monotone" dataKey="click" stroke="#82ca9d" strokeDasharray="3 4 5 2"/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;