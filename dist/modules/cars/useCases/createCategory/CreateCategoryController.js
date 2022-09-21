"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoryController = void 0;
class CreateCategoryController {
    constructor(createCategoryUseCase) {
        this.createCategoryUseCase = createCategoryUseCase;
    }
    handle(request, response) {
        const { name, description } = request.body;
        this.createCategoryUseCase.execute({ name, description });
        return response.status(201).json({
            "name": name,
            "description": description
        });
    }
}
exports.CreateCategoryController = CreateCategoryController;
