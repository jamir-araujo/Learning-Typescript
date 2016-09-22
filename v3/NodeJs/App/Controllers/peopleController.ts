import * as status from "http-status";
import {Request, Response} from "express";
import * as personRepository from "../Repositories/personRepository";

export async function getAll(request: Request, response: Response): Promise<void> {
    try {
        let people = await personRepository.getAll();
        response.status(status.OK).json(people);
    } catch (error) {
        response.status(status.INTERNAL_SERVER_ERROR).send(error);
    }
}

export async function getById(request: Request, response: Response): Promise<void> {
    try {
        let person = await personRepository.getById(request.params.id);
        if (person) {
            response.status(status.OK).json(person);
        } else {
            response.sendStatus(status.NOT_FOUND);
        }
    } catch (error) {
        response.status(status.INTERNAL_SERVER_ERROR).send(error);
    }
}

export async function getByName(request: Request, response: Response): Promise<void> {
    try {
        let people = await personRepository.getByName(request.params.name);
        response.status(status.OK).json(people);
    } catch (error) {
        response.status(status.INTERNAL_SERVER_ERROR).send(error);
    }
}

export async function post(request: Request, response: Response): Promise<void> {
    try {
        let person = await personRepository.insert(request.body);
        response.status(status.CREATED).send(person);
    } catch (error) {
        response.status(status.INTERNAL_SERVER_ERROR).send(error);
    }
}

export async function put(request: Request, response: Response): Promise<void> {
    try {
        let person = await personRepository.update(request.params.id, request.body);
        response.status(status.OK).send(person);
    } catch (error) {
        if (error.notFound) {
            post(request, response);
        } else {
            response.status(status.INTERNAL_SERVER_ERROR).send(error);
        }
    }
}

export async function deletePerson(request: Request, response: Response): Promise<void> {
    try {
        await personRepository.deletePerson(request.params.id);
    } catch (error) {
        response.status(status.INTERNAL_SERVER_ERROR).send(error);
    }
}