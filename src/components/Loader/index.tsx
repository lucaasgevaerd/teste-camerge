import {
  CirclesMovingHorizontallyLoaderContainer,
  DivLoader,
  LdsEllipsis,
} from "../../styles/loader";

function Loader() {
  return (
    <>
      <CirclesMovingHorizontallyLoaderContainer>
        <LdsEllipsis>
          <DivLoader />
          <DivLoader />
          <DivLoader />
          <DivLoader />
        </LdsEllipsis>
      </CirclesMovingHorizontallyLoaderContainer>
    </>
  );
}

export default Loader;
