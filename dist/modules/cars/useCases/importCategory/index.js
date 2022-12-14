"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.importCategoryController = void 0;
const CategoriesRepository_1 = require("../../repositories/implementations/CategoriesRepository");
const ImportCategoryController_1 = require("./ImportCategoryController");
const importCategoryUseCase_1 = require("./importCategoryUseCase");
const categoriesRepository = CategoriesRepository_1.CategoriesRepository.getInstance();
const importCategoryUseCase = new importCategoryUseCase_1.ImportCategoryUseCase(categoriesRepository);
const importCategoryController = new ImportCategoryController_1.ImportCategoryController(importCategoryUseCase);
exports.importCategoryController = importCategoryController;
