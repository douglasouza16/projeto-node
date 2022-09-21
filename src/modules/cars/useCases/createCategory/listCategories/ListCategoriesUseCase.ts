
import { Category } from "../../../model/Category";
import { ICategoriesRepository } from '../../../repositories/ICategoriesRepository';


class ListCategoriesUseCase {

    constructor(private CategoriesRepository: ICategoriesRepository) { }

    execute(): Category[] {
        const categories = this.CategoriesRepository.list();

        return categories;
    }

}

export { ListCategoriesUseCase }