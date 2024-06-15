import Results from '@/components/Results'
import { Suspense } from 'react'

const page = async({ searchParams}) => {

  const api_key = process.env.API_KEY
  const genre = searchParams.genre || "fetchTrending"

  const res = await fetch(`https://api.themoviedb.org/3${genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`}?api_key=${api_key}&language=en-US&page=1`)

  const data = await res.json()
 
  if(!res.ok){
    throw new Error("Error fetching the data")
    
  }

  const result = data.results
 
  return (
    <Suspense>
      <Results results={result}/>
      
    </Suspense>
  )
}

export default page
