import styled from '@emotion/styled';

const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  /* align-items: center; */
  justify-content: center;
`;

const ModalWrapper = styled.div`
  margin-top: 10%;
  background-color: white;
  border-radius: 10px;
  width: 572px;
  height: 312px;
  text-align: center;
  padding: 14px 16px;
  font-family: Pretendard400;
`;
const ModalTitle = styled.div`
  font-size: 25px;
  font-weight: 400px;
  margin-top: 14px;
  margin-bottom: 31px;
`;

const ModalContent = styled.div`
  font-size: 18px;
  line-height: 150%;
  font-family: Pretendard400;
`;

const ModalButton = styled.button`
  font-size: 16px;
  background: #177dff;
  border-radius: 10px;
  width: 140px;
  height: 48px;
  color: white;
  border: none;
  padding: 16px 14px;
  margin-top: 28px;
  cursor: pointer;
`;
const Cancel = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
export {
  ModalContainer,
  ModalWrapper,
  ModalTitle,
  ModalButton,
  Cancel,
  ModalContent,
};
