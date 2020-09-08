import React from "react"
import propTypes from "prop-types"
import * as S from "./styled"




const RecommendedPosts = ({ next, previous }) => (
  <S.RecommendedWrapper>
    {previous && (
            <S.RecommendedLink to={previous.fields.slug} cover direction="left" 
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
            className="previous">
        {previous.frontmatter.title}
      </S.RecommendedLink>
    )}
    {next && (
      <S.RecommendedLink
      to={next.fields.slug} cover direction="right" 
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
      className="next">
        {next.frontmatter.title}
      </S.RecommendedLink>
    )}
  </S.RecommendedWrapper>
)

RecommendedPosts.propTypes = {
  next: propTypes.shape({                               // shape tem informacoes ele é um objeto e as informacoes vai dentro dos {}
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
  previous: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
}

export default RecommendedPosts