import { Box, Typography , Button} from "@mui/material"
import CustomizedInput from "../components/shared/CustomizedInput"
import { IoIosLogIn } from "react-icons/io";
import { HiAnnotation } from "react-icons/hi";

export default function Login ()

{
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>
  {
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    const email = formData.get( "email" );
    const password = formData.get( "password" );
    // console.log(email,password)
  }

  return (
    <Box width={ "100%" } height={ "100%" } display='flex' flex={ 1 }>
      <Box padding={8} mt={8} display={{md: "flex", sm: "none", xs:"none"}}>
        <img src="robo.png" alt='airoboimage' style={{width: "400px"}}/>
      </Box>
      <Box
        display={ "flex" }
        flex={ { xs: 1, md: 0.5 } }
        justifyContent={ "center" }
        alignItems={ "center" }
        padding={ 2 }
        ml={ "auto" }
        mt={16}
      >
        <form
          onSubmit={ (handleSubmit)}
          style={{
            margin: 'auto',
            padding: '30px',
            boxShadow: "10px 10px 20px #000",
            borderRadius: '10px',
            border:"none",
          } }>
          <Box sx={ {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          } }
          >
            <Typography
              variant="h4"
              textAlign="center"
              padding={ 2 }
              fontWeight={ 600 }
            >
              Login
            </Typography>
            <CustomizedInput name="email" label="Email" type="email"/>
            <CustomizedInput name="password" label="Password" type="password"/>
            <Button
              type="submit"
              sx={ {
                px: 2,
                py: 1,
                mt: 2,
                width: "400px",
                borderRadius: 2,
                bgcolor: "#00fffc",
                ":hover": {
                  bgcolor: "white",
                  color: "black",
                }
                
              } }

              endIcon={<IoIosLogIn />}
            >
              Login
            </Button>
          </Box>
          </form>
      </Box>
    </Box>
  )
}
