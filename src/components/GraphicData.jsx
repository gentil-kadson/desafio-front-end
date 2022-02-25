import { useState, useEffect } from 'react'
import React from 'react'
import './GraphicData.css'

function GraphicData() {
    const [graphicData, setGraphicData] = useState([])
    const [tableData, setTableData] = useState([])
    
    useEffect(() => {
        fetch('https://621584abc9c6ebd3ce2a353c.mockapi.io/api/ps/invoice-summary')
        .then(response => {
            return response.json()
        })
        .then(data => {
            setGraphicData(data.data)
            setTableData(data.data)
        })
    }, [])

    console.log(tableData)


    return(
        <div className="data-container">
            <h2 className="graphic-title">RESUMO DAS NOTAS</h2>
            <div className="graphic-container">
                Graphics here 
            </div>
            <div className="graphic-table-container">
                <table>
                    <tbody>
                        {tableData.map((data, index) => {
                            return <tr key={index+1}>
                                <td key={data.label}>{data.label}</td>
                                <td key={data.value}>R$ {data.value}</td>
                                <td key={data.percentage}>R$ {data.percentage}%</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    ); 
}

export default GraphicData 