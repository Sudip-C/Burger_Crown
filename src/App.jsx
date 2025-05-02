import { useLocation } from "react-router-dom"
import AllRoutes from "./components/allRoutes"
import Navbar from "./components/navbar"

function App (){

  const location = useLocation()
  const hideNavbarPaths = ['/','/dashboard']
  
  const hideNavbar = hideNavbarPaths.includes(location.pathname)
  return (
    <section>
      {!hideNavbar&&<Navbar/>}
      <AllRoutes/>
    </section>
  )
}
export default App