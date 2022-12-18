import styled from '@emotion/styled';
import Link from 'next/link';
import { ReactNode } from 'react'
import Image from 'next/image'
import * as S from './InterviewAlertModal.style'
import cancel from '/public/images/icon/cancel.png'

export default function InterviewAlertModalOrganism(props:any){

       interface Props {
        children?: ReactNode
        // any props that come into the component
      }
      
    // onClick={showModal(false)}
    return(
        <S.ModalContainer>
        <S.ModalWrapper>
            <S.Cancel>
            <Link href='/interview'>
            {/* 클릭시 false로 prop 넘겨줘야함*/}
            {/* <Image src={cancel} alt="이미지" width={32} height={32} /></Link> */}
            <Image src={cancel} alt="이미지" width={32} height={32} onClick={()=> {props.setShowModal(false)}}/></Link>
            </S.Cancel>
            <S.ModalTitle>아직 모의면접을 응시할 수 없어요!</S.ModalTitle>
            <S.ModalContent>문제집에서 최소 10문제를 풀어야</S.ModalContent>
            <S.ModalContent>모의면접을 볼 수 있습니다.</S.ModalContent>
            {/* <Link href='/interview'><S.ModalButton  >확인</S.ModalButton></Link> */}
            {/* 클릭시 false로 prop */}
            <Link href='/interview'><S.ModalButton onClick={()=> {props.setShowModal(false)}} >확인</S.ModalButton></Link>
        </S.ModalWrapper>
        </S.ModalContainer>
    )
}