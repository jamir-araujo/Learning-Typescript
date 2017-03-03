import { injectable, inject } from "inversify";
import Contracts from "../Contracts/Contracts";
import { IFileServiceSymbol, IFileService } from "../Contracts/Utils/IFileService";
import { IPersonRepository } from "../Contracts/Repositories/IPersonRepository";

let UUID = Contracts.Libs.UUIDSymbol;

@injectable()
export default class PersonRepository implements IPersonRepository {
    private _people: Person[];

    constructor(
        @inject(UUID) private readonly _uuid: __NodeUUID.UUID,
        @inject(IFileServiceSymbol) private readonly _fs: IFileService) { }

    async getAll(): Promise<Person[]> {
        await this.LoadPeopleIfNotLoaded();

        return this._people;
    }

    async getById(id: string): Promise<Person> {
        await this.LoadPeopleIfNotLoaded();

        let results = this._people.filter(item => item.id == id);

        if (results.length != 0) {
            return results[0];
        } else {
            throw "Not Found";
        }
    }

    async getByName(name: string): Promise<Person[]> {
        await this.LoadPeopleIfNotLoaded();

        let results = this._people.filter(person => {
            let personName = person.name.toUpperCase();
            return personName.indexOf(name.toUpperCase()) >= 0;
        });

        return results;
    }

    async insert(person: Person): Promise<Person> {
        await this.LoadPeopleIfNotLoaded();

        person.id = this._uuid.v4();

        this._people.push(person);

        await this.savePeopleList(this._people);

        return person;
    }

    async update(id: string, person: Person): Promise<Person> {
        await this.LoadPeopleIfNotLoaded();

        let index = this._people.findIndex(person => person.id == id);
        if (index >= 0) {
            this._people[index] = person;

            await this.savePeopleList(this._people);

            return person;
        } else {
            throw { notFound: true };
        }
    }

    async delete(id: string): Promise<void> {
        await this.LoadPeopleIfNotLoaded();

        let index = this._people.findIndex(person => person.id == id);
        if (index >= 0) {
            this._people.splice(index, 1);

            await this.savePeopleList(this._people);
        } else {
            throw "Resource not found";
        }
    }

    private async LoadPeopleIfNotLoaded(): Promise<void> {
        if (!this._people) {
            this._people = await this.loadPeopleList();
        }
    }

    private savePeopleList(people: Person[]): Promise<any> {
        return new Promise((resolve, reject) => {
            this._fs.writeFile("Data/People.json", JSON.stringify(people, null, "  "), (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve();
                }
            });
        });
    }

    private loadPeopleList(): Promise<Person[]> {
        return new Promise<Person[]>((resolve, reject) => {
            this._fs.readFile("Data/People.json", (error, data) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(JSON.parse(<any>data));
                }
            });
        });
    }
}
