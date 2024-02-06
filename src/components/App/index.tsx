import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"
import Portfolio from "views/Portfolio"
import Site from "views/Site"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Portfolio />} />
                <Route path="/site/:id" element={<Site />} />
            </Routes>
        </BrowserRouter>
    )
}