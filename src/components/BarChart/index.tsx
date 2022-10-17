import { Chart } from "react-google-charts";
import { useEffect, useState, useCallback } from "react";
import { Medicao } from "../../types/medicao";
import { CustomSelect } from "../../styles/main";
import { Months } from "../../types/months";
import { chartFilter } from "../../util/chartFilter";
import { monthNames } from "../../util/months";
import Loader from "../Loader";
import { BarChartContainer, Title } from "../../styles/header";

function BarChart() {
  const [months, setMonths] = useState<Months[]>([]);
  const [data, setData] = useState<Months[]>([]);
  const [offPeakDailyConsumption, setOffPeakDailyConsumption] = useState<any[]>(
    []
  );

  const getMonths = useCallback(async () => {
    const response = await fetch(`http://localhost:3001/dadosmedicao`);
    const receivedData = await response.json();
    setData(receivedData);

    const receivedMonths = receivedData.map(
      (item: Medicao) => item.dia.split("-")[1]
    );
    const repeatedMonths = receivedMonths.filter(
      (month: number, number: number) =>
        receivedMonths.indexOf(month) === number
    );
    const monthsUpdate = repeatedMonths.map((item: any) => {
      return { number: item, month: monthNames[parseInt(item) - 1] };
    });

    setMonths(monthsUpdate);
  }, []);

  useEffect(() => {
    if (months.length !== 0) {
      setOffPeakDailyConsumption(chartFilter(String(months[0].number), data));
    }
  }, [data, months]);

  useEffect(() => {
    getMonths();
  }, [getMonths]);

  const handleChange = (value: any) => {
    setOffPeakDailyConsumption(chartFilter(value.target.value, data));
  };

  return (
    <>
      {data.length !== 0 &&
      months.length !== 0 &&
      offPeakDailyConsumption.length !== 0 ? (
        <>
          <BarChartContainer>
            <Title>Consumo fora ponta de cada mês</Title>
            <CustomSelect onChange={handleChange}>
              {months.map((e) => {
                return (
                  <option key={e.number} value={e.number}>
                    {e.month}
                  </option>
                );
              })}
            </CustomSelect>
            <Chart
              chartType="ColumnChart"
              width="100%"
              height="400px"
              data={offPeakDailyConsumption}
              options={{
                chartArea: { width: "100%", height: "80%" },
                backgroundColor: "transparent",
                hAxis: {
                  direction: -1,
                  slantedText: true,
                  slantedTextAngle: 45,
                },
              }}
            />
          </BarChartContainer>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default BarChart;
