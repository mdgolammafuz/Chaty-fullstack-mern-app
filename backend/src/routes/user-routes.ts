import { Router } from "express"
import { getAllUsers, userLogIn, userSignUp } from "../controllers/user-controller.js";
import { validate, signupValidator, loginValidator} from "../utils/validators.js"
const userRoutes = Router();

userRoutes.get("/", getAllUsers)
userRoutes.post( "/signup", validate( signupValidator ), userSignUp )
userRoutes.post( "/login", validate( loginValidator ), userLogIn )
//userRoutes.get("/auth-status",verifyToken , userLogIn)
export default userRoutes
