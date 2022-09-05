import React, { useEffect, useState } from "react"

const Result = ({ query }) => {
  const [result, setResult] = useState({})

  useEffect(() => {
    fetch(`https://swapi.dev/api/${query[0]}/${query[1]}`)
      .then((res) => res.json())
      .then((res) => setResult(res))
      .catch((err) => setResult(false))
  }, [query])

  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title text-center">
          {result.detail ? (
            <h6>These aren't the droids you're looking for...</h6>
          ) : (
            <h3>{result.name ? result.name : result.title}</h3>
          )}
        </div>
        {result.detail ? (
          <img src="/src/assets/not-the-droids.gif" alt="Obi-Wan Kenobi" />
        ) : (
          <ul>
            {Object.keys(result).map((key) => {
              return (
                <li key={key}>
                  {key}: {result[key]}
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Result
