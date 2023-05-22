import GlobalStyle from "./styles/GlobalStyle";
import { useSelector } from "react-redux";

const GlobalStylesManagement = () => {
  const ModalState = useSelector((state) => state.Modal.modalState);

  return (
    <>
      <GlobalStyle scroll={ModalState} />
    </>
  );
};

export default GlobalStylesManagement;
