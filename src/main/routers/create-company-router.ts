import { expressAdapter } from "@/infra/adapters";
import { Router } from "express";
import { createCompanyControllerFactory } from "../factories/controllers";
import { storage } from "@/application/storage/storage";
import { AsyncScope } from "@/application/hooks/async-scope";

export const createCompanyRouter = (router: Router) => {
  const middleware = (req: any, res: any, next: any) => {
    const scope = new AsyncScope(() => {
      storage.currentUser.set({ organizationId: 2 })
      next()
    })
  }
  router.post('/company', middleware, expressAdapter(createCompanyControllerFactory()))
}