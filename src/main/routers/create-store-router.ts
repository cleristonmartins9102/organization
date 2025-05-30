import { expressAdapter } from "@/infra/adapters";
import { Router } from "express";
import { createStoreControllerFactory } from "../factories/controllers";

export const createStoreRouter = (router: Router) => {
  router.post('/store', expressAdapter(createStoreControllerFactory()))
}