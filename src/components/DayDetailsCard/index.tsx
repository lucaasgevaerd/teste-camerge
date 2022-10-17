import { useState } from "react";
import {
  CardContainer,
  CardDetails,
  CardDetailsContainer,
  CardDetailsContent,
  CardDetailsTitle,
  CardTitle,
  ItemContainer,
  ItemContent,
  ItemTitle,
} from "../../styles/main";
import { Medicao } from "../../types/medicao";
import { formatDate, formatDateAndHour } from "../../util/formatters";

type Props = {
  data: Medicao;
};

function DayDetailsCard({ data }: Props) {
  const [showContent, setShowContent] = useState<any>({});

  return (
    <CardContainer>
      <CardTitle
        onClick={() =>
          setShowContent({
            ...showContent,
            [data.id]: !showContent[data.id],
          })
        }
      >
        {formatDate(data.dia)}
      </CardTitle>
      {showContent[data.id] && (
        <CardDetailsContainer>
          <CardDetails>
            <CardDetailsTitle>Ponta</CardDetailsTitle>
            <CardDetailsContent>
              <ItemContainer>
                <ItemTitle>Data</ItemTitle>
                <ItemContent>
                  {String(data.date_demanda_ponta) === "NULL"
                    ? "Sem registro"
                    : formatDateAndHour(data.date_demanda_ponta)}
                </ItemContent>
              </ItemContainer>

              <ItemContainer>
                <ItemTitle>Horas</ItemTitle>
                <ItemContent>
                  {String(data.horas_ponta) === "NULL"
                    ? "Sem registro"
                    : data.horas_ponta}
                </ItemContent>
              </ItemContainer>

              <ItemContainer>
                <ItemTitle>Consumo</ItemTitle>
                <ItemContent>
                  {String(data.consumo_ponta) === "NULL"
                    ? "Sem registro"
                    : data.consumo_ponta}
                </ItemContent>
              </ItemContainer>

              <ItemContainer>
                <ItemTitle>Demanda</ItemTitle>
                <ItemContent>
                  {String(data.demanda_ponta) === "NULL"
                    ? "Sem registro"
                    : data.demanda_ponta}
                </ItemContent>
              </ItemContainer>
            </CardDetailsContent>
          </CardDetails>

          <CardDetails>
            <CardDetailsTitle>Fora ponta</CardDetailsTitle>
            <CardDetailsContent>
              <ItemContainer>
                <ItemTitle>Data</ItemTitle>
                <ItemContent>
                  {String(data.date_demanda_fora_ponta) === "NULL"
                    ? "Sem registro"
                    : formatDateAndHour(data.date_demanda_fora_ponta)}
                </ItemContent>
              </ItemContainer>

              <ItemContainer>
                <ItemTitle>Horas</ItemTitle>
                <ItemContent>
                  {String(data.horas_fora_ponta) === "NULL"
                    ? "Sem registro"
                    : data.horas_fora_ponta}
                </ItemContent>
              </ItemContainer>

              <ItemContainer>
                <ItemTitle>Consumo</ItemTitle>
                <ItemContent>
                  {String(data.consumo_fora_ponta) === "NULL"
                    ? "Sem registro"
                    : data.consumo_fora_ponta}
                </ItemContent>
              </ItemContainer>

              <ItemContainer>
                <ItemTitle>Demanda</ItemTitle>
                <ItemContent>
                  {String(data.demanda_fora_ponta) === "NULL"
                    ? "Sem registro"
                    : data.demanda_fora_ponta}
                </ItemContent>
              </ItemContainer>
            </CardDetailsContent>
          </CardDetails>
        </CardDetailsContainer>
      )}
    </CardContainer>
  );
}

export default DayDetailsCard;
