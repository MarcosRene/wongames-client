import { Container } from 'components/Container'
import Heading from 'components/Heading'
import ProfileMenu from 'components/ProfileMenu'

import BaseTemplate from 'templates/Base'

import { ProfileTemplateProps } from './types'

import * as S from './styles'
import { useRouter } from 'next/router'

const ProfileTemplate = ({ children }: ProfileTemplateProps) => {
  const { asPath } = useRouter()

  return (
    <BaseTemplate>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My profile
        </Heading>

        <S.Main>
          <ProfileMenu activeLink={asPath} />

          <S.Content>{children}</S.Content>
        </S.Main>
      </Container>
    </BaseTemplate>
  )
}

export default ProfileTemplate
