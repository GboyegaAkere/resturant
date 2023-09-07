import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import MainContainer from './components/MainContainer'
import CreateContainer from './components/CreateContainer'
import { AnimatePresence } from 'framer-motion'


const App = () => {
  return (
    <AnimatePresence>
        <div className='w-screen h-auto flex flex-col bg-gray-100'>
          <Header/>
          <main className='mt-24 p-8'>
            <Routes>
              <Route path='/*' element ={<MainContainer/>}/>
              <Route path='/createitem' element={<CreateContainer/>}/>
            </Routes>
          </main>
        </div>
    </AnimatePresence>
    
  )
}

export default App