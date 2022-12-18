import styled from '@emotion/styled'
import Link from 'next/link'

export default function InterviewSubHeader(props: any){

    return (
<HeaderWrap>
<Header>
    
<Link href="/interview">
<Button   >모의면접으로 돌아가기</Button></Link>
</Header>
</HeaderWrap>
    )
}

const HeaderWrap = styled.div`
background-color: #C7DAF2;
width: 100%;
z-index: 5;
display: flex;
justify-content: center;
position: fixed;

`
const Header = styled.div`
    width: 1230px;
    height: 60px;
    background-color: #C7DAF2;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 80px;



`

const Button = styled.div`
    

`