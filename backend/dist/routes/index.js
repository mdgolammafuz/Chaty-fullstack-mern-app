import { Router } from "express";
import usersRoutes from "./user-routes.js";
import chatsRoutes from "./chat-routes.js";
const appRouter = Router();
appRouter.use("/users", usersRoutes); //domain/api/v1/users
appRouter.use("/chats", chatsRoutes); //domain/api/v1/chats
export default appRouter;
//# sourceMappingURL=index.js.map