import { Router } from "express";
import { verifyToken } from "../utils/token-manager.js";
import { validate, chatCompletionValidator } from "../utils/validators.js";
// Protedted API
const chatRoutes = Router();
chatRoutes.post("/new", validate(chatCompletionValidator), verifyToken);
export default chatRoutes;
//# sourceMappingURL=chat-routes.js.map