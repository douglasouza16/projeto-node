"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listCategoriesController = void 0;
const CategoriesRepository_1 = require("../../../repositories/implementations/CategoriesRepository");
const ListCategoriesController_1 = require("./ListCategoriesController");
const ListCategoriesUseCase_1 = require("./ListCategoriesUseCase");
const categoriesRepository = CategoriesRepository_1.CategoriesRepository.getInstance(); /*new CategoriesRepository();*/
const listCategoriesUseCase = new ListCategoriesUseCase_1.ListCategoriesUseCase(categoriesRepository);
const listCategoriesController = new ListCategoriesController_1.ListCategoriesController(listCategoriesUseCase);
exports.listCategoriesController = listCategoriesController;
