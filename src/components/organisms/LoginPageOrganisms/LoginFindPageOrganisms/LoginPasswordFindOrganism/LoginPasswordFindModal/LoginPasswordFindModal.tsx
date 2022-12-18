import styled from '@emotion/styled';
import Link from 'next/link';
import { ReactNode } from 'react'
import Image from 'next/image'
import * as S from './LoginPasswordFindModal.style'
import cancel from '/public/images/icon/cancel.png'

export default function LoginPasswordFindModal(props:any){

       interface Props {
        children?: ReactNode
        // any props that come into the component
      }
      
    // onClick={showModal(false)}
    return(
        <S.ModalContainer>
        <S.ModalWrapper>
            <S.Cancel>
            <Link href='/'>
            <Image src={cancel} alt="이미지" width={32} height={32} onClick={()=> {props.showModal(false)}}/></Link>
            </S.Cancel>
            <S.ModalTitle>링크발송 완료</S.ModalTitle>
            <S.ModalContent>메일이 성공적으로 발송되었습니다. 메일함을 확인해주세요.</S.ModalContent>
            <S.ModalContent>확인되지 않을 경우 스팸 메일함 확인을 부탁드립니다.</S.ModalContent>
            <Link href='/'><S.ModalButton onClick={()=> {props.showModal(false)}} >확인</S.ModalButton></Link>
        </S.ModalWrapper>
        </S.ModalContainer>
    )
}