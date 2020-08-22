import { useState, useEffect } from 'react'
import { API_KEY , ENGINE_ID } from './keys'

const useSearchEngine = (term) => {
  const [data,setData] = useState(null)

  useEffect( () => {
    const fetch_d = async() => {
      fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${ENGINE_ID}&q=${term}`)
        .then( r => r.json() )
        .then( result => { setData(result) })
        .catch( e => console.log(e) )
      
    } 

    fetch_d();
    

  }, [term] )

  return { data }
}

export default useSearchEngine
