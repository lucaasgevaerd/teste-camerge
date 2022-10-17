import { Months } from "../types/months";
import { formatDayAndMonth } from "./formatters";

export const chartFilter = (value: string, data: Months[]) => {
  const filterMonths = data.filter(
    (item: any) => item.dia.split("-")[1] === value
  );
  const offPeakMonthlyConsumption = filterMonths.map((item: any) => {
    return {
      day: formatDayAndMonth(item.dia),
      offPeakConsumption: item.consumo_fora_ponta,
      color: "#31A5F5",
    };
  });

  const changeArrayToGoogleChart = offPeakMonthlyConsumption
    .reverse()
    .map(Object.values);
  changeArrayToGoogleChart.push([
    "Element",
    "Consumo fora ponta",
    { role: "style" },
  ]);
  return changeArrayToGoogleChart.reverse();
};
