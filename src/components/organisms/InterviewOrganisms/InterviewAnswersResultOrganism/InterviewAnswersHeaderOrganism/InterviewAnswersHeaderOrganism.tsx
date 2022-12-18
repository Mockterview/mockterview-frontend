import Image from 'next/image';
import logo_blue from '../../../../../../public/images/item/logo_blue.svg';
import Link from 'next/link';

import * as S from './InterviewAnswersHeaderOrganism.style'
export default function InterviewAnswersHeader() {

    return (
        <S.HeaderContainer>
        <S.HeaderWrap>
            <S.Logo>
            <Link href="/"><Image src={logo_blue} alt="logo" width={111} height={15} /></Link>
            </S.Logo>
            <Link href="/interview"><S.Button>모의면접으로 돌아가기 </S.Button></Link>
        </S.HeaderWrap>
        </S.HeaderContainer>
    )
}