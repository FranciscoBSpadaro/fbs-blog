import styled from "styled-components"
import Img from "gatsby-image"
import media from "styled-media-query"

export const AvatarWrapper = styled(Img)`
  border-radius: 50%;
  height: 4.75rem;
  margin: auto;
  width: 4.75rem;

  ${media.lessThan("large")`
    height: 2.875rem;
    width: 2.875rem;
  `}
`