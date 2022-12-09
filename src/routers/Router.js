import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Detail from '../pages/Detail'
import LandingPage from '../pages/LandingPage'

export default function Router() {
  return (
    <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
  )
}
