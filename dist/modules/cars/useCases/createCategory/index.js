"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCategoryController = void 0;
const CategoriesRepository_1 = require("../../repositories/implementations/CategoriesRepository");
const CreateCategoryController_1 = require("./CreateCategoryController");
const CreateCategoryUseCase_1 = require("./CreateCategoryUseCase");
const categoriesRepository = CategoriesRepository_1.CategoriesRepository.getInstance(); /*new CategoriesRepository();*/
const createCategoryUseCase = new CreateCategoryUseCase_1.CreateCategoryUseCase(categoriesRepository);
const createCategoryController = new CreateCategoryController_1.CreateCategoryController(createCategoryUseCase);
exports.createCategoryController = createCategoryController;
