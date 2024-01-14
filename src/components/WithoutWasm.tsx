type Matrix = number[][];

import { useState } from 'react'
import { multiplyMatrices } from '../logic/Matrix';

const WithoutWasm = () => {
  const [mat1, setMat1] = useState<Matrix>([
    [0, 0],
    [0, 0],
  ])
  const [mat2, setMat2] = useState<Matrix>([
    [0, 0],
    [0, 0],
  ])
  const [showAnswer, setShowAnswer] = useState(false)
  const [answer, setAnswer] = useState<Matrix>([
    [0, 0],
    [0, 0],
  ])

  const handleChangeMat1 = (val: string, id: string) => {
    let dupMat1 = mat1.slice()
    if (id === "m1v1") {
      dupMat1[0].splice(0, 1, parseInt(val))
      setMat1((prev) => [[...dupMat1[0]], [...prev[1]]])
    } else if (id === "m1v2") {
      dupMat1[0].splice(1, 1, parseInt(val))
      setMat1((prev) => [[...dupMat1[0]], [...prev[1]]])
    } else if (id === "m1v3") {
      dupMat1[1].splice(0, 1, parseInt(val))
      setMat1((prev) => [[...prev[0]], [...dupMat1[1]]])
    } else if (id === "m1v4") {
      dupMat1[1].splice(1, 1, parseInt(val))
      setMat1((prev) => [[...prev[0]], [...dupMat1[1]]])
    }
  }

  const handleChangeMat2 = (val: string, id: string) => {
    let dupMat2 = mat2.slice()
    if (id === "m2v1") {
      dupMat2[0].splice(0, 1, parseInt(val))
      setMat2((prev) => [[...dupMat2[0]], [...prev[1]]])
    } else if (id === "m2v2") {
      dupMat2[0].splice(1, 1, parseInt(val))
      setMat2((prev) => [[...dupMat2[0]], [...prev[1]]])
    } else if (id === "m2v3") {
      dupMat2[1].splice(0, 1, parseInt(val))
      setMat2((prev) => [[...prev[0]], [...dupMat2[1]]])
    } else if (id === "m2v4") {
      dupMat2[1].splice(1, 1, parseInt(val))
      setMat2((prev) => [[...prev[0]], [...dupMat2[1]]])
    }
  }
  const handleOperation = () => {
    const start = performance.now()
    const result: Matrix | string = multiplyMatrices(mat1, mat2)
    if (typeof result === "object") {
      setAnswer(result)
      setShowAnswer(true)
    }
    const end = performance.now()
    console.log(`start:${start} end: ${end} time taken: ${end - start}`)
  }
  return (
    <>
      <div className="matrix">
        <h3>Matrix 1</h3>
        <div>
          <input type="number" className="matrix-element" id="m1v1" value={mat1[0][0]} onChange={(e) => handleChangeMat1(e.target.value, e.target.id)} />
          <input type="number" className="matrix-element" id="m1v2" value={mat1[0][1]} onChange={(e) => handleChangeMat1(e.target.value, e.target.id)} />
        </div>
        <div>
          <input type="number" className="matrix-element" id="m1v3" value={mat1[1][0]} onChange={(e) => handleChangeMat1(e.target.value, e.target.id)} />
          <input type="number" className="matrix-element" id="m1v4" value={mat1[1][1]} onChange={(e) => handleChangeMat1(e.target.value, e.target.id)} />
        </div>
      </div>
      <div className="mul-sign">X</div>
      <div className="matrix">
        <h3>Matrix 2</h3>
        <div>
          <input type="number" className="matrix-element" id="m2v1" value={mat2[0][0]} onChange={(e) => handleChangeMat2(e.target.value, e.target.id)} />
          <input type="number" className="matrix-element" id="m2v2" value={mat2[0][1]} onChange={(e) => handleChangeMat2(e.target.value, e.target.id)} />
        </div>
        <div>
          <input type="number" className="matrix-element" id="m2v3" value={mat2[1][0]} onChange={(e) => handleChangeMat2(e.target.value, e.target.id)} />
          <input type="number" className="matrix-element" id="m2v4" value={mat2[1][1]} onChange={(e) => handleChangeMat2(e.target.value, e.target.id)} />
        </div>
        <div className="equal-sign" onClick={handleOperation}>=</div>
        {showAnswer && <div className="answer">{answer.map((row, index) => { return <p key={index}>{row.map((ele, subIndex) => <span style={{ margin: "5px 10px" }} key={subIndex}>{ele}</span>)}</p> })}</div>}
      </div >
    </>
  )
}

export default WithoutWasm