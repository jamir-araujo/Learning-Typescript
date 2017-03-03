import "reflect-metadata";
import PeopleController from "../../Controllers/peopleController";
import * as httpStatus from "http-status";
import { IMock, Mock, It, Times } from "typemoq";
import { Request, Response } from "express";
import { IPersonRepository } from "../../Contracts/Repositories/IPersonRepository";

describe("PeopleController", () => {

    let peopleController: PeopleController;
    let mockPeopleRepository: IMock<IPersonRepository>;

    beforeEach(() => {
        mockPeopleRepository = Mock.ofType<IPersonRepository>();

        peopleController = new PeopleController(httpStatus, mockPeopleRepository.object);
    });

    it("should return empty on getAll", async () => {

        let result: Person[] = [];
        mockPeopleRepository
            .setup(pr => pr.getAll())
            .returns((...a) => new Promise<Person[]>((resolve) => resolve(result)));

        let mockResponse = Mock.ofType<Response>();
        mockResponse
            .setup(r => r.status(It.isAny()))
            .returns(() => mockResponse.object);

        await peopleController.getAll(null, mockResponse.object);

        mockResponse.verify(r => r.status(httpStatus.OK), Times.once());
        mockResponse.verify(r => r.json(result), Times.once());
    });

});