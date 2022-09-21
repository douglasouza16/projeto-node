"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCategoriesUseCase = void 0;
class ListCategoriesUseCase {
    constructor(CategoriesRepository) {
        this.CategoriesRepository = CategoriesRepository;
    }
    execute() {
        const categories = this.CategoriesRepository.list();
        return categories;
    }
}
exports.ListCategoriesUseCase = ListCategoriesUseCase;
