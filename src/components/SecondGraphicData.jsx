import React from "react";
import { useState, useEffect } from "react";
import "./SecondGraphicData.css";
import ReactApexChart from "react-apexcharts";

function SecondGraphicData() {
  const [secondData, setSecondData] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    fetch("https://621584abc9c6ebd3ce2a353c.mockapi.io/api/ps/invoice-receive")
      .then((response) => response.json())
      .then((data) => {
        setSecondData(data.data);
        setDataLoaded(true);
      });
  }, []);

  //   if(dataLoaded) {
  //     const options = {
  //         series: [secondData.public.value, secondData.private.value],
  //         colors: ['#25263B', '#7EC8C4'],
  //         legend: {
  //             show: false
  //         },
  //         chart: {
  //             width: 200,
  //             height: 214,
  //             type: 'donut'
  //         },
  //         plotOptions: {
  //             pie: {
  //                 donut: {
  //                 size: '50%'
  //                 },
  //                 startAngle: -90,
  //                 endAngle: 270
  //             }
  //         },
  //         dataLabels: {
  //             enabled: false
  //         },
  //         fill: {
  //             type: 'gradient'
  //         },
  //     }

  //     console.log(secondData)

  return (
    <div className="data-container">
      <h2 className="graphic-title">NOTAS A RECEBER - PÚBLICO E PRIVADO</h2>
      <div className="graphic-container">
        {/* <ReactApexChart options={options} series={options.series}/> */}
      </div>
      <div className="graphic-table-container">
        <table>
          <tbody>
            <tr className="chart-tr">
              <td className="color1">Público</td>
              {/* <td className='grey'><span className='real'>R$</span> {secondData.public.value} </td>
                                    <td>{secondData.public.percentage}<span className='percentage'> %</span></td> */}
            </tr>
            <tr className="chart-tr">
              <td className="color2">Privado</td>
              {/* <td className='grey'><span className='real'>R$</span> {secondData.private.value} </td>
                                    <td>{secondData.private.percentage}<span className='percentage'> %</span></td> */}
            </tr>
            <tr key="total">
              <td className="total-empty"></td>
              {/* <td className='total-amount'>
                                        <span className='total-real'>R$</span> {secondData.public.value + secondData.private.value}
                                    </td> */}
              <td className="total-percentage">
                100 <span className="percentage"> %</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SecondGraphicData;
