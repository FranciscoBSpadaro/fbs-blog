import React from "react"
import propTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink"


import * as S from "./styled"
                                                                       // se nao for a primeira pagina entao mostre o link , bool = boleano
const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => (
  <S.PaginationWrapper>                   
    {!isFirst && (
      <AniLink
      to={prevPage}
      cover
      direction="left"
      duration={3}
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
        ← página anterior
      </AniLink>
    )}        
    <p>
      {currentPage} de {numPages}
    </p>
    {!isLast && (
      <AniLink
        to={nextPage}
        cover
        direction="right"
        duration={3}
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
        proxima página →
      </AniLink>
    )}
  </S.PaginationWrapper>
)

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
}

export default Pagination