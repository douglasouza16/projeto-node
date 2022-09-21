"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSpecificationUseCase = void 0;
class CreateSpecificationUseCase {
    constructor(specificationsRepository) {
        this.specificationsRepository = specificationsRepository;
    }
    execute({ description, name }) {
        const specificationAlreadyExists = this.specificationsRepository.findByName(name);
        if (specificationAlreadyExists) {
            throw new Error("Specification already exists!");
            this.specificationsRepository.create({
                name, description,
            });
        }
    }
}
exports.CreateSpecificationUseCase = CreateSpecificationUseCase;
