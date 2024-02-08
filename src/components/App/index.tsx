import { NotFound } from "components/NotFound"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Portfolio } from "views/Portfolio"
import { Site } from "views/Site"

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Portfolio />} />
        <Route path='/site/:id' element={<Site />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
