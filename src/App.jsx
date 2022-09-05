import { useState } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import Result from "./components/Result"

function App() {
  const navigate = useNavigate()
  const types = ["people", "planets", "starships", "species", "films"]

  const [type, setType] = useState(types[0])
  const [id, setId] = useState(1)
  const [query, setQuery] = useState([])

  const handleClick = (e) => {
    e.preventDefault()
    setQuery([type, id])
    navigate(`${type}/${id}`)
  }

  return (
    <div className="container">
      <h1 className="text-center text-warning">Luke APIwalker</h1>
      <div className="row">
        <form className="col">
          <div className="row">
            <div className="col">
              <label htmlFor="type" className="me-3">
                Search for:
              </label>
              <select
                name="type"
                id="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                {types.map((type, i) => (
                  <option key={i} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <label htmlFor="id" className="me-3">
                ID:
              </label>
              <input
                type="text"
                name="id"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </div>
          </div>
          <button className="btn btn-primary mt-3" onClick={handleClick}>
            Go
          </button>
        </form>
        <div className="col">
          <Routes>
            <Route path=":type/:id" element={<Result query={query} />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
