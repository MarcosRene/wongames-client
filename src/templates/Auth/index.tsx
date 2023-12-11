import Heading from 'components/Heading'
import Logo from 'components/Logo'

import * as S from './styles'

import { AuthProps } from './types'

const Auth = ({ title, children }: AuthProps) => (
  <S.Wrapper>
    <S.BannerBlock>
      <Logo />

      <Heading>All your favorite games in one place</Heading>
      <S.BannerSubtitle>
        <strong>WON</strong> is the best and most complete gaming platform.
      </S.BannerSubtitle>

      <S.BannerFooter>Won Games 2023 © All Rights Reserverd</S.BannerFooter>
    </S.BannerBlock>

    <S.BannerContent>
      <Logo color="black" size="large" />

      <Heading color="black" lineColor="secondary" lineLeft>
        {title}
      </Heading>

      {children}
    </S.BannerContent>
  </S.Wrapper>
)

export default Auth
