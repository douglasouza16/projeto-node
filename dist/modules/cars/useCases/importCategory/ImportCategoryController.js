"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportCategoryController = void 0;
class ImportCategoryController {
    constructor(importCategoryUseCase) {
        this.importCategoryUseCase = importCategoryUseCase;
    }
    handle(request, response) {
        const { file } = request;
        this.importCategoryUseCase.execute(file);
        console.log(file);
        return response.send();
    }
}
exports.ImportCategoryController = ImportCategoryController;
