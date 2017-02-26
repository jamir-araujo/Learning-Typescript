interface IPersonRepository {
    getAll(): Promise<Person[]>;
    getById(id: string): Promise<Person>;
    getByName(name: string): Promise<Person[]>;
    insert(person: Person): Promise<Person>;
    update(id: string, person: Person): Promise<Person>;
    delete(id: string): Promise<void>;
}