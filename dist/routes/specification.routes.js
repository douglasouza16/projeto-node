"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.specificationsRoutes = void 0;
const express_1 = require("express");
const CreateSpecification_1 = require("../modules/cars/useCases/createCategory/CreateSpecification");
const specificationsRoutes = (0, express_1.Router)();
exports.specificationsRoutes = specificationsRoutes;
specificationsRoutes.post("/", (request, response) => {
    return CreateSpecification_1.createSpecificationController.handle(request, response);
});
