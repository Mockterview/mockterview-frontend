import styled from '@emotion/styled';

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-family: Pretendard500;
`;
export const Header = styled.div`
  width: 1070px;
  text-align: center;
  border-radius: 10px;
`;

export const Line = styled.div`
  width: 80px;
  height: 80px;
  left: 615px;
  top: 1734px;
  border-right: 1px solid lightgray;
`;
export const HeaderCenter = styled.div`
  text-align: center;
`;
export const TitleCenter = styled.div`
  text-align: center;
  font-size: 28px;
  margin: 69px 0 30px;
`;
export const Title = styled.div`
  font-size: 28px;
  margin: 69px 0 30px;
`;

export const Text = styled.div`
  margin: 60px 0 130px;
`;

export const Description = styled.div`
  margin-top: 1rem;
  text-align: center;
  font-size: 20px;
  margin-bottom: 5rem;
`;
export const Category = styled.div`
  margin-top: 1rem;
  width: 1070px;
  border-radius: 10px;
  background: #f1f6fb;
`;

export const CategoryWrap = styled.div`
  width: 1070px;
  height: 140px;
  border-radius: 10px;
  display: flex;
  background-color: #f1f6fb;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 20px;
`;

export const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Body = styled.div`
  width: 1070px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 71px;
`;

export const CategoryLogo = styled.div`
  width: 60px;
  height: 60px;
  margin-right: 14px;
`;
export const CategoryDesc = styled.div`
  font-family: Pretendard400;
  font-size: 20px;
`;

export const CategoryDescText = styled.div`
  font-family: Pretendard600;
  font-size: 20px;
  margin-bottom: 2px;
  margin-left: 14px;
`;

export const CategoryDescSubText = styled.div`
  font-family: Pretendard500;
  color: #177dff;
  font-size: 14px;
  margin-left: 14px;
`;

export const Icon = styled.div`
  width: 32px;
  height: 32px;
  margin-left: 14px;
`;

export const Table = styled.div`
  display: grid;

  /* grid-template-columns:repeat(4, 100px); */
  /* grid-auto-flow: column; */
`;

export const Th = styled.div`
  display: grid;
  width: 1070px;

  grid-auto-flow: column;
  grid-template-columns: repeat(4, 272.5px);
  text-align: center;
  height: 56px;
  justify-items: center;
  border-bottom: 1px solid black;
  font-family: Pretendard600;
`;
export const Tr = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-items: center;
`;

export const Tb = styled.div`
  grid-template-columns: repeat(4, 272.5px);
  display: grid;
  grid-auto-flow: column;
  width: 1070px;

  height: 60px;
  text-align: center;
  justify-items: center;
  border-bottom: 1px solid lightgray;
`;

export const Button = styled.button`
  color: white;
  background-color: #177dff;
  padding: 8px 16px;
  border-radius: 999px;
  border: none;
  font-family: Pretendard600;
  cursor: pointer;
`;

//pagination
export const PageWrap = styled.div`
  display: flex;
  height: 100px;
  /* align-items: center; */
  justify-content: center;
  width: 100%;
  margin-top: 10px;
`;

export const PageContainer = styled.div`
  display: flex;
  align-items: center;
`;
type pageProps = {
  page: Number;
  num: Number;
};
export const PageButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 14px;
  gap: 10px;
  width: 48px;
  height: 48px;
  margin: 5px;
  color: ${(props: pageProps) =>
    props.num == props.page ? 'white' : '#177DFF'};
  background-color: ${(props: pageProps) =>
    props.num == props.page ? '#177DFF' : 'white'};
  font-family: Pretendard700;
  border: 1px solid #177dff;
  border-radius: 10px;
  cursor: pointer;
`;

export const ImageWrap = styled.button`
  cursor: pointer;
  border: none;
`;
