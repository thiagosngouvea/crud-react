import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 4px;
  padding: 16px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`;

export const ModalCloseButton = styled.button`
//colocar o botão na direito superior do modal
  position: absolute;
  top: 8px;
  right: 8px;
  font-size: 16px;
  font-weight: bold;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;