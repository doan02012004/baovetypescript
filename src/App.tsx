import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import List from './pages/web/List'
import Add from './pages/web/Add'
import Edit from './pages/web/Edit'
import Register from './pages/Register'
import Login from './pages/Login'
import Private from './privates/Private'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <Routes>
      <Route path='/' element={<Layout />}>
          <Route index element={<List />} />
          <Route path='add' element={<Add />} />
          <Route path='edit/:id' element={<Private><Edit /></Private>} />

      </Route>
      <Route path='register' element={<Register />} />
      <Route path='login' element={<Login />} />
    </Routes>
  </>
  )
}

export default App
