import React from 'react'

const Results = ({ results }) => {
  return (
    <div>
      {results.map((result, index) => (
            <div key={index}>
                <h2>{result.original_title}</h2>
            </div>
          )
      )}
    </div>
  )
}

export default Results
