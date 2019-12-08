import React, {useEffect, useRef} from 'react';
import Chart from 'chart.js';
import classes from './LineGraph.module.css';

export interface ChartProps {}
const MainChart: React.FC<ChartProps> = ({}) => {
  let chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    console.log('Use ref hook');
    let canvas = chartRef.current;
    if (canvas) {
      let context = canvas.getContext('2d');
      if (context) {
        /* context.beginPath(); */
        /* context.arc(50, 50, 50, 0, 2 * Math.PI); */
        /* context.fill(); */
        /* context.arc( */
        /*   canvas.width / 2, */
        /*   canvas.height / 2, */
        /*   canvas.width / 2, */
        /*   0, */
        /*   2 * Math.PI, */
        /* ); */
        /* context.fill(); */
        new Chart(context, {
          type: 'line',
          data: {
            //Bring in data
            labels: ['Jan', 'Feb', 'March'],
            datasets: [
              {
                label: 'Sales',
                data: [86, 67, 91],
              },
            ],
          },
          options: {
            //Customize chart options
          },
        });
      }
    }
  }, []);
  return (
    <div className={classes.graphContainer}>
      <canvas
        style={{width: '50px', height: '50px'}}
        id="myChart"
        ref={chartRef}
      />
    </div>
  );
};

export default MainChart;
