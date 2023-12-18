import Link from 'next/link'

import Heading from 'components/Heading'
import Logo from 'components/Logo'

import * as S from './styles'

import { AuthTemplateProps } from './types'

const Auth = ({ title, children }: AuthTemplateProps) => (
  <S.Wrapper>
    <S.BannerBlock>
      <S.BannerContent>
        <Link href="/">
          <a>
            <Logo id="banner" />
          </a>
        </Link>

        <div>
          <Heading size="huge">All your favorite games in one place</Heading>
          <S.BannerSubtitle>
            <strong>WON</strong> is the best and most complete gaming platform.
          </S.BannerSubtitle>
        </div>

        <S.BannerFooter>Won Games 2023 © All Rights Reserverd</S.BannerFooter>
      </S.BannerContent>
    </S.BannerBlock>

    <S.BannerContainer>
      <S.BannerContainerWrapper>
        <Link href="/">
          <a>
            <Logo id="form" color="black" size="large" />
          </a>
        </Link>

        <Heading color="black" lineColor="secondary" lineLeft>
          {title}
        </Heading>

        {children}
      </S.BannerContainerWrapper>
    </S.BannerContainer>
  </S.Wrapper>
)

export default Auth
