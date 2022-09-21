import { Category } from "../model/Category";


interface ICreateCategoryDTO {
    name: string;
    description: string;
}

interface ICategoriesRepository {
    findByName(name: string): Category;
    list(): Category[];
    create({ name, description: string }: ICreateCategoryDTO): void;
}

export { ICategoriesRepository, ICreateCategoryDTO };