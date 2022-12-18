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
  z-index: 1;
`;

const ModalWrapper = styled.div`
  margin-top: 10%;
  background-color: white;
  border-radius: 10px;
  width: 572px;
  height: 312px;
  text-align: center;
  padding: 15px;
  font-family: Pretendard500;
`;
const ModalTitle = styled.div`
  font-size: 25px;
  margin-bottom: 31px;
  font-family: Pretendard500;
  line-height: 140%;
`;

const ModalContent = styled.div`
  font-size: 16px;
  font-weight: 500px;
  line-height: 150%;
`;

const ModalButton = styled.button`
  background: #177dff;
  border-radius: 10px;
  width: 140px;
  height: 48px;
  color: white;
  border: none;
  padding: 16px 14px;
  margin-top: 28px;
  cursor: pointer;
  font-size: 16px;
  font-family: Pretendard600;
`;
const Cancel = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding-bottom: 14px;
  cursor: pointer;
`;
export {
  ModalContainer,
  ModalWrapper,
  ModalTitle,
  ModalButton,
  Cancel,
  ModalContent,
};
