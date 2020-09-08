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
      duration={3}
      direction="left">
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
        duration={3}
        direction="right">
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