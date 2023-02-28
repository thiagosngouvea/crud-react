import React from 'react';
import ReactDOM from 'react-dom';
import { useModal } from '../../context/ModalContext';
import { ModalWrapper, ModalContent, ModalCloseButton } from './styles';

type ModalProps = {
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  const { closeModal } = useModal();

  const handleClose = () => {
    onClose();
  };

  return ReactDOM.createPortal(
    <ModalWrapper onClick={handleClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalCloseButton onClick={closeModal}>X</ModalCloseButton>
        {children}
      </ModalContent>
    </ModalWrapper>,
    document.body
  );
};

export default Modal;
