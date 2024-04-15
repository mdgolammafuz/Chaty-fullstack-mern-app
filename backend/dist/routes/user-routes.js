import { Router } from "express";
import { getAllUsers } from "../controllers/users-controller.js";
const usersRoutes = Router();
usersRoutes.get("/", getAllUsers);
export default usersRoutes;
//# sourceMappingURL=user-routes.js.map