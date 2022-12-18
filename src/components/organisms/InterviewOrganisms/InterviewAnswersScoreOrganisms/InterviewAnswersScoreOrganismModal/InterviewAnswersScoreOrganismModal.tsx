
import styled from '@emotion/styled';
import Link from 'next/link';
import { ReactNode } from 'react'
import Image from 'next/image'
import * as S from './InterviewAnswersScoreOranismModal.style'
import cancel  from '../../../../../../public/images/icon/cancel.png'


export default function InterviewAnswersScoreOrganismModal(props:any){

       interface Props {
        children?: ReactNode
        // any props that come into the component
      }
      
    // onClick={showModal(false)}
    return(
        <S.ModalContainer>
        <S.ModalWrapper>
            <S.Cancel >
            <Image src={cancel} alt="이미지" width={32} height={32} onClick={()=> {props.showModal(false)}}/>
            </S.Cancel>
            <S.ModalTitle>채점이 완료되지 않았어요!</S.ModalTitle>
            <S.ModalContent>채점하지 않은 문항이 있습니다.</S.ModalContent>
            <S.ModalContent>모든 문항을 채점 완료해야 결과가 저장됩니다.</S.ModalContent>
          <S.ModalButton onClick={()=> {props.showModal(false)}} >확인</S.ModalButton>
        </S.ModalWrapper>
        </S.ModalContainer>
    )
}