import React from "react";
import { Chart } from "react-google-charts";
import { IGraficData } from "../../pages/Dashborad";
import { ConteinerGraphic } from "./style";

interface Iprops {
  data: IGraficData;
}

export const options = {
  legend: "none",
  colors: ["#FF7723", "#95AD8E", "#335BEA", "#3498db"],
};

const TotalGraphc = ({ data }: Iprops) => {
  const DataGraphc = [
    ["Tipo", "Total pago"],
    ["Hotel", data.hotel],
    ["Alimentaçao", data.food],
    ["Lojas", data.store],
    ["Passeios", data.turism],
  ];

  function getTotal() {
    return data.food + data.hotel + data.store + data.turism;
  }

  return (
    <ConteinerGraphic>
      <h2>Total: R${getTotal().toFixed(2).replace(".", ",")}</h2>
      {getTotal() > 0 && (
        <Chart
          chartType="PieChart"
          data={DataGraphc}
          options={options}
          width={"250px"}
          height={"250px"}
        />
      )}
    </ConteinerGraphic>
  );
};

export default TotalGraphc;
