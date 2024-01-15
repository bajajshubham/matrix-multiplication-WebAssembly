import './App.css'
import WithWasm from './components/WithWasm'
import WithoutWasm from './components/WithoutWasm'


function App() {

  return (
    <>
      <WithoutWasm />
      <WithWasm />
    </>
  )
}

export default App
