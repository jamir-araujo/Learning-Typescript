import { Controller, Get, Put, Post, Delete } from 'inversify-express-utils';
import { Request, Response } from "express";
import { injectable, inject } from "inversify";
import Contracts from "../Contracts/Contracts";
import { IPersonRepositorySymbol, IPersonRepository } from "../Contracts/Repositories/IPersonRepository";

let HttpStatus = Contracts.Libs.HttpStatusSymbol;

@injectable()
@Controller("/")
export default class PeopleController {
    constructor(
        @inject(HttpStatus) private readonly _httpStatus: HttpStatus,
        @inject(IPersonRepositorySymbol) private readonly _personRepository: IPersonRepository) { }

    @Get("people/")
    async getAll(request: Request, response: Response): Promise<void> {
        try {
            let people = await this._personRepository.getAll();
            response.status(this._httpStatus.OK).json(people);
        } catch (error) {
            response.status(this._httpStatus.INTERNAL_SERVER_ERROR).send(error);
        }
    }

    @Get("person/:id")
    async getById(request: Request, response: Response): Promise<void> {
        try {
            let person = await this._personRepository.getById(request.params.id);
            if (person) {
                response.status(this._httpStatus.OK).json(person);
            } else {
                response.sendStatus(this._httpStatus.NOT_FOUND);
            }
        } catch (error) {
            response.status(this._httpStatus.INTERNAL_SERVER_ERROR).send(error);
        }
    }

    @Get("people/:name")
    async getByName(request: Request, response: Response): Promise<void> {
        try {
            let people = await this._personRepository.getByName(request.params.name);
            response.status(this._httpStatus.OK).json(people);
        } catch (error) {
            response.status(this._httpStatus.INTERNAL_SERVER_ERROR).send(error);
        }
    }

    @Post("person/")
    async post(request: Request, response: Response): Promise<void> {
        try {
            let person = await this._personRepository.insert(request.body);
            response.status(this._httpStatus.CREATED).send(person);
        } catch (error) {
            response.status(this._httpStatus.INTERNAL_SERVER_ERROR).send(error);
        }
    }

    @Put("person/:id")
    async put(request: Request, response: Response): Promise<void> {
        try {
            let person = await this._personRepository.update(request.params.id, request.body);
            response.status(this._httpStatus.OK).send(person);
        } catch (error) {
            if (error.notFound) {
                this.post(request, response);
            } else {
                response.status(this._httpStatus.INTERNAL_SERVER_ERROR).send(error);
            }
        }
    }

    @Delete("person/:id")
    async delete(request: Request, response: Response): Promise<void> {
        try {
            await this._personRepository.delete(request.params.id);
            response.status(this._httpStatus.OK).send(request.params.id);
        } catch (error) {
            response.status(this._httpStatus.INTERNAL_SERVER_ERROR).send(error);
        }
    }
}