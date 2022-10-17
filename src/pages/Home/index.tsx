import { useCallback, useEffect, useState } from "react";
import DayDetailsCard from "../../components/DayDetailsCard";
import usePagination from "../../util/usePagination";
import { Medicao } from "../../types/medicao";
import { Button, ButtonContainer, Main } from "../../styles/main";
import Loader from "../../components/Loader";

function Home() {
  const [data, setData] = useState<Medicao[]>([]);
  const [pagesNumber, setPagesNumber] = useState<number>(0);

  // ABRIR O TERMINAL NA PASTA './consumption-and-demand/src'
  // EXECUTAR O COMANDO ==> 'npx json-server --watch db.json --port 3001'

  const getData = useCallback(async () => {
    const response = await fetch(`http://localhost:3001/dadosmedicao`);
    const receivedData = await response.json();
    setData(receivedData);
    setPagesNumber(Math.ceil(data.length / 10));
  }, [data.length]);

  useEffect(() => {
    getData();
  }, [getData]);

  const pageDatas = usePagination(data, pagesNumber);

  return (
    <Main>
      {data.length !== 0 ? (
        <>
          {pageDatas.currentData().map((v: any) => (
            <DayDetailsCard data={v} key={v.id} />
          ))}
          {
            <ButtonContainer>
              {pageDatas.currentPage === 1 ? (
                <Button isActive={false} onClick={() => pageDatas.prev()}>
                  Anterior
                </Button>
              ) : (
                <Button isActive={true} onClick={() => pageDatas.prev()}>
                  Anterior
                </Button>
              )}
              {pageDatas.currentPage === pageDatas.maxPage ? (
                <Button isActive={false} onClick={() => pageDatas.next()}>
                  Próxima
                </Button>
              ) : (
                <Button isActive={true} onClick={() => pageDatas.next()}>
                  Próxima
                </Button>
              )}
            </ButtonContainer>
          }
        </>
      ) : (
        <Loader />
      )}
    </Main>
  );
}

export default Home;
