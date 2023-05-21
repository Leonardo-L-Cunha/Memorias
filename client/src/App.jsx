import {Container,} from "@material-ui/core"
import MainRoutes  from "./routes"

import { NavBar } from "./components/NavBar"

const App = ()  =>{
  return (
    
      <Container maxidth="lg">
        <NavBar/>
        <MainRoutes/>
      </Container>
   
  )
}

export default App
