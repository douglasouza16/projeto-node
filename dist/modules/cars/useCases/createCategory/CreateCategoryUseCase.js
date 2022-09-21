"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoryUseCase = void 0;
/**
 *  [x] Definir o Tipo de Retorno
 *  [x] Alterar o Retorno de Erro
 *  [x] Acessar o Repositório
 */
class CreateCategoryUseCase {
    constructor(categoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }
    execute({ description, name }) {
        /*const categoriesRepository = new CategoriesRepository();*/
        const categoryAlreadyExists = this.categoriesRepository.findByName(name);
        if (categoryAlreadyExists) {
            throw new Error("Category Already exists!");
            /*return response.status(400).json({ error: "Category Already exists!" });*/
        }
        this.categoriesRepository.create({ name, description });
    }
}
exports.CreateCategoryUseCase = CreateCategoryUseCase;
