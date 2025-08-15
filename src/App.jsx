import LandingPage from "./pages/LandingPage"
import { Route, Routes } from "react-router-dom"

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />}></Route>
    </Routes>
  )
}