
import { Response, Request } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";


class CreateCategoryController {

    constructor(private createCategoryUseCase: CreateCategoryUseCase) {

    }


    handle(request: Request, response: Response): Response {
        const { name, description } = request.body;

        this.createCategoryUseCase.execute({ name, description });


        return response.status(201).json({
            "name": name,
            "description": description
        });
    }
}

export { CreateCategoryController }