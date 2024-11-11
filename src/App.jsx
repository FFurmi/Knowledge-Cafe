import { useState } from 'react'
import './App.css'
import Header from './component/header/Header'
import AllBlogs from './component/allBlogs/AllBlogs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header></Header>
     <AllBlogs></AllBlogs>
    </>
  )
}

export default App
