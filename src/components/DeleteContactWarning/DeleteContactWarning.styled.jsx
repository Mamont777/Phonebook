import styled from 'styled-components';

export const DeleteWarning = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  width: 250px;
  height: 100px;
  border-radius: 5px;
  border: 1px solid #000;
  box-shadow: 0px 1px 7px 6px rgba(0, 0, 0, 0.12),
    0px 4px 3px 3px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16);
  background-color: #dbdbdb;
`;

export const Text = styled.div`
  text-align: center;
  font-weight: bold;
`;

export const ButtonWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
`;

export const ButtonOk = styled.button`
  margin-right: 10px;
  background-color: #4caf50;
  color: #fff;
`;

export const ButtonNo = styled.button`
  background-color: #f44336;
  color: #fff;
`;
