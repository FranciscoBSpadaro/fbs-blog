import React from 'react'
import PropTypes from 'prop-types'

import Avatar from '../Avatar'
import * as S from './styled'



const Profile = ({ title, position, description, isMobileHeader }) => {
  return (
    <S.ProfileContainer isMobileHeader={isMobileHeader}>
      <S.ProfileLink
        to="/"
        cover
        duration={3}
        direction="left"
        bg="
        url(https://source.unsplash.com/random)
        center / cover /* position / size */
        no-repeat                /* repeat */
        fixed                    /* attachment */
        padding-box              /* origin */
        content-box              /* clip */
        white                     /* color */
        "
      >
        <Avatar />
        <S.ProfileAuthor>
          {title}
          <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>
      <S.ProfileDescription>{description}</S.ProfileDescription>
    </S.ProfileContainer>
  )
}

Profile.propTypes = {
  title: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Profile