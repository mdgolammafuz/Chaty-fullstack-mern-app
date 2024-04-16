import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/LogIn"
import SignUp from "./pages/SignUp"
import Chat from "./pages/Chat"
import NotFound from "./pages/NotFound"
import Header from "./components/Header"
import { useAuth } from "./context/AuthContext"

function App() {
  
  console.log(useAuth()?.isLoggedIn)
  return (
    <main>
      <Header/>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/signup" element={ <SignUp /> } />
        <Route path="/chat" element={ <Chat /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </main>
  )
}

export default App
