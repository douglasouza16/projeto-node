"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecificationsRepository = void 0;
const specification_1 = require("../../model/specification");
class SpecificationsRepository {
    constructor() {
        this.specifications = [];
    }
    create({ description, name }) {
        const specification = new specification_1.Specification();
        Object.assign(specification, {
            name,
            description,
            created_at: new Date(),
        });
        this.specifications.push(specification);
    }
    findByName(name) {
        const specification = this.specifications.find((specification) => specification.name === name);
        return specification;
    }
}
exports.SpecificationsRepository = SpecificationsRepository;
