import { AppBar } from "@mui/material"
import { Toolbar } from "@mui/material"
import Logo from "./shared/Logo"
import { useAuth } from "../context/AuthContext"
import NavigationLink from "./shared/NavigationLink";
export default function Header ()
{
  const auth = useAuth();
  return (
    <AppBar sx={{bgcolor: "transparent", position:"static", boxShadow: "none"}}>
      <Toolbar sx={ { display: "flex" } }>
        <Logo />
        <div>
          { auth?.isLoggedIn ? (
            <>
              <NavigationLink
                bg="#00fffc"
                to="/chat"
                text="Go to Chat"
                textColor="black"
              />
              <NavigationLink
                bg="#51538f"
                to="/"
                text="logout"
                textColor="white"
                onClick={auth.logout}
              />
            </>
          ) : (
              <>
                <NavigationLink
                bg="#00fffc"
                to="/login"
                text="Login"
                textColor="black"
              />
              <NavigationLink
                bg="#51538f"
                to="/signup"
                text="SignUp"
                textColor="white"
              />
            </>
          ) }
        </div>
      </Toolbar>
    </AppBar>
  )
}
