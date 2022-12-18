import styled from '@emotion/styled'
import Link from 'next/link'

export default function InterviewScoreHeader(props: any,){

    // if(all clicked){
        async function handleSubmit() {
            let result = true;
      
            props.data.forEach((data: { practiceId: any; correct:boolean})=> {
              if(!props.clicked.includes(data.practiceId))
              result = false;
            })
            if(result == true){
              return 
            }
            props.showModal(true)
      
          }
    // }
    return (
<HeaderWrap>
<Header>
    
<Button  onClick={()=> {handleSubmit()}} >모의면접으로 돌아가기</Button>
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
cursor: pointer;
    

`