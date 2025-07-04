import BuyCredit from "./pages/BuyCredit"
import Home from "./pages/Home"
import Results from "./pages/Results"
import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Header from "./components/Header"
import Footer from "./components/Footer"


const App = () => (
  <div className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50">
  <NavBar />
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/results" element={<Results />} />
  <Route path="/buy-credit" element={<BuyCredit />} />
</Routes>
 <Footer/>


</div>
)

export default App