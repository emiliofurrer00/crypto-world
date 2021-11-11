import React, { useState } from 'react'
import millify from 'millify'
import HTMLReactParser from 'html-react-parser'

function ExchangeTableRow({exchange}) {
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible(!isVisible)
    }

    return (
            <>
                <tr onClick={handleClick}>
                    <td>{exchange.rank}</td>
                    <td>
                        <img alt="" style={{width: 20, display: 'inline-block', marginRight: 10}}src={exchange.iconUrl}/>
                        <strong>{exchange.name}</strong>  
                    </td> 
                    <td>${millify(exchange.volume, {precision: 2})}</td>
                    <td>{exchange.numberOfMarkets}</td>
                    <td>${millify(exchange.marketShare, {precision: 2})}</td>
                </tr>
                {isVisible && <tr>
                    <td colSpan={5}>{HTMLReactParser(`${exchange.description}`)}</td>
                </tr>}
            </>
    )
}

export default ExchangeTableRow
