import { useState, useEffect } from 'react'
import React from 'react'
import './Details.css'

function Details() {
    const [tableData, setTabledata] = useState([])

    useEffect(() => {
        fetch('https://621584abc9c6ebd3ce2a353c.mockapi.io/api/ps/invoices')
        .then(response => {
            return response.json()
        })
        .then(data => {
            setTabledata(data.data.invoices)
        })
    }, [])

    return(
        <div className="details-container">
            <h3>NOTAS</h3>
            <div className="table-container">
                <table>
                    <thead>
                        <th>N</th>
                        <th>Valor</th>
                        <th>Data de Criação</th>
                        <th>País</th>
                        <th>Data</th>
                    </thead>
                    <tbody>
                        {tableData.map(tableValues => {
                            return <tr key={tableValues.id} className="details-tr">
                                <td key={tableValues.id} className="id">{tableValues.id}</td>
                                <td key={tableValues.value}>R$ {tableValues.value}</td>
                                <td key={tableValues.createdAt}>{tableValues.createdAt}</td>
                                <td key={tableValues.country}>{tableValues.country}</td>
                                <td key={tableValues.date}>{tableValues.date}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Details