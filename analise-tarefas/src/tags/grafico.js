// src/components/grafico.js

import React from 'react';
import { Chart } from 'react-google-charts'; // Certifique-se de importar o Chart corretamente

function Grafico() {
    // Lógica do seu componente de gráfico aqui...

    const data = [
        ["City", "2010 Population", "2000 Population"],
        ["New York City, NY", 8175000, 8008000],
        ["Los Angeles, CA", 3792000, 3694000],
        ["Chicago, IL", 2695000, 2896000],
        ["Houston, TX", 2099000, 1953000],
        ["Philadelphia, PA", 1526000, 1517000],
      ];

    const options = {
        title: "Population of Largest U.S. Cities",
        chartArea: { width: "50%" },
        hAxis: {
          title: "Total Population",
          minValue: 0,
        },
        vAxis: {
          title: "City",
        },
      };

    return (
        <div >
            <Chart
                chartType="BarChart"
                width="100%"
                height="400px"
                data={data}
                options={options}
            />
        </div>
    );
}

export default Grafico;
