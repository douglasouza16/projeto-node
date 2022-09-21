import { CategoriesRepository } from '../modules/cars/repositories/implementations/CategoriesRepository';
import { Router } from 'express';
import multer from 'multer';

import { v4 as uuidV4 } from 'uuid';
import { Category } from '../modules/cars/model/Category';
import { CreateCategoryUseCase } from '../modules/cars/useCases/createCategory/CreateCategoryUseCase';
import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from '../modules/cars/useCases/createCategory/listCategories';
import { importCategoryController } from '../modules/cars/useCases/importCategory';

const categoriesRoutes = Router();
const upload = multer({
    dest: "./tmp",
});


/*const categories: Category[] = [];*/

const categoriesRepository = CategoriesRepository.getInstance();/* new CategoriesRepository();/*PostgresCategoriesRepository();*/

categoriesRoutes.get("/categories", (request, response) => {
    const all = categoriesRepository.list();
    return response.json(all);
});

categoriesRoutes.post("/categories", (request, response) => {
    return createCategoryController.handle(request, response);

});

categoriesRoutes.get("/", (request, response) => {
    return listCategoriesController.handler(request, response);

});


categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
    return importCategoryController.handle(request, response);

    /**const { file } = request;
    console.log(file);
    return response.send();*/

});

export { categoriesRoutes };
