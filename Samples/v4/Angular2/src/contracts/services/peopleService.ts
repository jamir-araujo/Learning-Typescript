abstract class PeopleService {
    abstract getAll(): Promise<Person[]>;
    abstract getById(id: string): Promise<Person>;
    abstract getByName(name: string): Promise<Person[]>;
    abstract post(person: Person): Promise<Person>;
    abstract put(id: string, person: Person): Promise<Person>;
    abstract delete(id: string): Promise<Person>;
}

export default PeopleService;
