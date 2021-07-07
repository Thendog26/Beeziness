import { Line } from "react-chartjs-2";
import { Router } from "react-router-dom";
import { useEffect } from "react";
import hive_temperature_temp from "./hive_temperature_temp";
import hive_temperature_trend from "./hive_temperature_trend";
const Chart = () => {

    let chartData;

    useEffect(() => {
        fetch("https://kzou8q92w8.execute-api.us-east-1.amazonaws.com/prod",{ 
            method: "GET",  
            mode: 'cors',
            headers: {
              'content-type': 'application/json',
                // 'Access-Control-Allow-Origin' : '*',
                // 'Access-Control-Allow-Credentials': 'false',
                // 'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                // 'Access-Control-Allow-Headers': '*',

            }
        }).then(function(data){
            chartData = data;
            console.log(chartData);
        });
    }, [])


        const dayLabels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const state = {
        // labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        labels: hive_temperature_temp.time.map(temp => dayLabels[new Date(temp).getDay()] + '-' + new Date(temp).getHours() + ":00"),
        datasets: [
          {
            label: 'Temperature',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            pointRadius: 0,
            // data: [65, 59, 80, 81, 56, 90, 70],
            data: hive_temperature_temp.temperatue
          },
          {
            label: 'Trend',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: '#ffbc5a',
            borderWidth: 2,
            pointRadius: 0,
            data: hive_temperature_trend.trend_line
          }
        ]
      }

    return (
      <div>
        <Line
          type="line"
          data={state}
          options={{
            title:{
              display:true,
              text:'Bee hive Temperature - Week',
              fontSize:30
            },
            legend:{
              display:true,
              position:'right'
            },
          }}
        />
      </div>
    );
}

export default Chart;