import { useState, useEffect} from 'react'
import React from 'react'
import './FirstGraphicData.css'
import ReactApexChart from 'react-apexcharts'

function FirstGraphicData() {
    const [tableData, setTableData] = useState([])

    useEffect(() => {
        fetch('https://621584abc9c6ebd3ce2a353c.mockapi.io/api/ps/invoice-summary')
        .then(response => {
            return response.json()
        })
        .then(data => {
            setTableData(data.data)
        })
    }, [])

    const options = {
        series: tableData.map(dataObject => dataObject.value),
        colors: ['#80CAC6', '#EDB662', '#DF4764', '#C4487D', '#2B2D44'],
        legend: {
            show: false
        },
        chart: {
            width: 200,
            height: 214,
            type: 'donut'
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '50%'
                },
                startAngle: -90,
                endAngle: 270
            }
        },
        dataLabels: {
            enabled: false 
        },
        fill: {
            type: 'gradient'
        },
    }

    return(
        <div className="data-container">
            <h2 className="graphic-title">RESUMO DAS NOTAS</h2>
            <div className="graphic-container">
                <ReactApexChart options={options} series={options.series} type="donut" width={200} />
            </div>
            <div className="graphic-table-container">
                <table>
                    <tbody>
                        {tableData.map((data, index) => {
                            return <tr key={index+1} className="chart-tr">
                                <td key={data.label}><div key={'color' + (index+1)} className={'color' + (index+1)}></div>{data.label}</td>
                                <td key={data.value} className='grey'><span className='real'>R$</span> {data.value}</td>
                                <td key={data.percentage}>{data.percentage} <span className='percentage'> %</span></td>
                            </tr>
                        })}
                        <tr key="total">
                            <td className='total-empty'></td>
                            <td className='total-amount'>
                                <span className='total-real'>R$</span> {tableData.reduce((previousValue, currentValue) => {
                                    return previousValue + currentValue.value 
                                }, 0)}
                            </td>
                            <td className='total-percentage'>100 <span className='percentage'> %</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    ); 
}

export default FirstGraphicData 