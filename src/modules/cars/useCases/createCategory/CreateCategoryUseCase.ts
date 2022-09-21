import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";


interface IRequest {
    name: string;
    description: string;
}

/**
 *  [x] Definir o Tipo de Retorno
 *  [x] Alterar o Retorno de Erro
 *  [x] Acessar o Repositório
 */

class CreateCategoryUseCase {

    constructor(private categoriesRepository: ICategoriesRepository) {

    }
    execute({ description, name }: IRequest): void {
        /*const categoriesRepository = new CategoriesRepository();*/

        const categoryAlreadyExists = this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error("Category Already exists!")
            /*return response.status(400).json({ error: "Category Already exists!" });*/
        }

        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase }