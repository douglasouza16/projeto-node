"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesRepository = void 0;
const Category_1 = require("../../model/Category");
// singleton 
//DTO => Data Transfer object
/*interface ICreateCategoryDTO {
    name: string;
    description: string;
}*/
class CategoriesRepository {
    constructor() {
        this.categories = [];
    }
    static getInstance() {
        if (!CategoriesRepository.INSTANCE) {
            CategoriesRepository.INSTANCE = new CategoriesRepository();
        }
        return CategoriesRepository.INSTANCE;
    }
    create({ description, name }) {
        const category = new Category_1.Category();
        Object.assign(category, {
            name,
            description,
            created_at: new Date(),
        });
        this.categories.push(category);
    }
    list() {
        return this.categories;
    }
    findByName(name) {
        const category = this.categories.find((category) => name === name);
        return category;
    }
}
exports.CategoriesRepository = CategoriesRepository;
