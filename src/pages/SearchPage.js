import React from 'react'
import './SearchPage.css'
import { useStateValue } from '../StateProvider'
import useSearchEngine from '../useSearchEngine'
import mock from '../mockdata'
import { Link } from 'react-router-dom'

import Brand from '../components/Brand'
import Search from '../components/Search'

function SearchPage(){
  const [{term}, dispatch] = useStateValue();
  //const { data } = useSearchEngine(term);
  const data = mock;

  // https://developers.google.com/custom-search/v1/overview?authuser=3
  // https://cse.google.com/cse/all
  



  return (			
    <div className='searchPage'>
      <div className="searchPage__header">
        <Link to="/">
          <Brand />
        </Link>

        <Search hideButtons />
      </div>

      <div className="searchPage__results">
        <div className="searchPage__results">
          <p className="searchPage__resultCount">About {data.searchInformation.formattedTotalResults} results ({data.searchInformation.formattedSearchTime} seconds) for {term}</p>
          {data.items.map(item => (
            <div class="searchPage__result">
              <a className="searchPage__resultSub" href={item.link}>{item.displayLink}</a>
              <a className="searchPage__resultTitle" href={item.link}>{item.title}</a>
              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SearchPage
