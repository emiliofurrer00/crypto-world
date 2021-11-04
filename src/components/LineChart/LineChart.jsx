import React from 'react';
import { Line } from 'react-chartjs-2';
import { Select } from './LineChartElements';
import { Crypto24Change } from '../Crypto24Change/Crypto24Change'

//Special thanks to @adrianhajdin and his tutorials for providing guidance and code examples for the linechart implementation

function LineChart ({ coinHistory, currentPrice, coinName, timeFrameOptions, handleOptionChange }) {
    const coinPrices = [];
    const coinTimestamps = [];

    for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
        coinPrices.push(coinHistory?.data?.history[i].price);
    }

    for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
        coinTimestamps.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
    }

    const data = {
        labels: coinTimestamps,
        datasets: [
        {
            label: 'Price In USD',
            data: coinPrices,
            fill: false,
            backgroundColor: '#007c7c',
            borderColor: '#00adab',
        },
    ],
    };

    const options = {
        scales: {
            yAxes: [
            {
                ticks: {
                beginAtZero: true,
                },
            },
            ],
        },
    };

    return (
    <>
        <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
            <Select style={{maxWidth: 200}} onChange={handleOptionChange}>
                {timeFrameOptions.map((timeOption, index) => <option key={index} value={timeOption}>{timeOption}</option>)}
            </Select>
            <div className="price-container">
                <h4>Change: <Crypto24Change isPositive={true} coinChange={coinHistory?.data?.change}></Crypto24Change></h4>
                <h4 className="current-price">Current Price: $ {currentPrice}</h4>
            </div>
        </div>
        <Line data={data} options={options} />
    </>
    );
};


export default LineChart
