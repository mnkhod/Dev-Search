import React from 'react'
import './SearchPage.css'
import { useStateValue } from '../StateProvider'
import useSearchEngine from '../useSearchEngine'
import mock from '../mockdata'
import { Link } from 'react-router-dom'

import Brand from '../components/Brand'

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
      </div>

      <div className="searchPage__results">
      </div>
    </div>
  )
}

export default SearchPage
