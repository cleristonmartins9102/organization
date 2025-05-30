import { expressAdapter } from "@/infra/adapters";
import { Router } from "express";
import { createOrganizationControllerFactory } from "../factories/controllers/create-organization-controller-factory"

export const createOrganizationRouter = (router: Router) => {
  router.post('/', expressAdapter(createOrganizationControllerFactory()))
}