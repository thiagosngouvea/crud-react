import { createContext, useContext, useState } from "react";

type ModalContextData = {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  modalData: any;
  setModalData: (data: any) => void;
  typeModal: string;
  setTypeModal: (type: string) => void;
};

type ModalProviderProps = {
    children: React.ReactNode;
  };

const ModalContext = createContext<ModalContextData>({
  isModalOpen: false,
  openModal: () => {},
  closeModal: () => {},
  modalData: {},
  setModalData: () => {},
  typeModal: "",
  setTypeModal: () => {},
});

export const useModal = () => useContext(ModalContext);

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const [typeModal, setTypeModal] = useState("add");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal, modalData, setModalData, typeModal, setTypeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
