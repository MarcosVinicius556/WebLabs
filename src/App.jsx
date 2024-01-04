import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { Page } from "./style/GlobalStyle";

function App() {

  return (
    <Page>
      <Header />
      <span>
        <Outlet />
      </span>
      <Footer />
    </Page>
  )
}

export default App
