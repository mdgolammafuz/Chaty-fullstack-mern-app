import { Router } from "express";
import { getAllUsers, userLogIn, userSignUp, verifyUser } from "../controllers/user-controller.js";
import { validate, signupValidator, loginValidator } from "../utils/validators.js";
import { verifyToken } from "../utils/token-manager.js";
const userRoutes = Router();
userRoutes.get("/", getAllUsers);
userRoutes.post("/signup", validate(signupValidator), userSignUp);
userRoutes.post("/login", validate(loginValidator), userLogIn);
userRoutes.get("/auth-status", verifyToken, verifyUser);
export default userRoutes;
//# sourceMappingURL=user-routes.js.map