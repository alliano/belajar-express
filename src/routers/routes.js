import expres from "express";
import { createUser, createUsser2 } from "../controllers/user-controller.js";

const routers = expres.Router();
routers.get("/v1/api/users", createUser);

routers.post("/v1/users", createUsser2)

export { routers };

/**
 *
 * GET /v1/products
 *
 * {
 *      id: 1,
 *      name: "sampo",
 *      harga: "100k"
 * }
 *
 *
 */
