import Heading from 'components/Heading'
import Logo from 'components/Logo'

import * as S from './styles'

import { AuthProps } from './types'

const Auth = ({ title, children }: AuthProps) => (
  <S.Wrapper>
    <S.BannerBlock>
      <S.BannerContent>
        <Logo id="banner" />

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
        <Logo id="form" color="black" size="large" />

        <Heading color="black" lineColor="secondary" lineLeft>
          {title}
        </Heading>

        {children}
      </S.BannerContainerWrapper>
    </S.BannerContainer>
  </S.Wrapper>
)

export default Auth
