import React from "react"
import Hit from "./Hit"
import { InstantSearch, SearchBox, Hits, Stats } from "react-instantsearch-dom"

import * as S from "./styled"

const algolia = {
  appId: process.env.GATSBY_ALGOLIA_APP_ID,
  searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
}



const Search = () => (
    <S.SearchWrapper>
     <InstantSearch
      appId={algolia.appId}
      apiKey={algolia.searchOnlyApiKey}
      indexName={algolia.indexName}
    >
      <SearchBox  translations={{ placeholder: "Pesquisar..." }} />
      <Stats
        translations={{
          stats(nbHits, timeSpentMs) {
            return `${nbHits} resultados encontrados em ${timeSpentMs}ms`
          },
        }}
      />
      <Hits hitComponent={Hit} />
    </InstantSearch>
  </S.SearchWrapper>
)

export default Search

//  <SearchBox autoFocus translations={ traduz para portugues o nome de search para pesquisar.  removi autofocus para nao dar warnings
// stats funçao que recebe parametros para mostrar resultados e tempo gasto na busca e qts buscas encontradas
// hitcomponent é uma propriedade do hits onde eu digo qual o componente que vai renderizar os hits {hit}