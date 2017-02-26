const Contracts = {
    Controllers: {
        PeopleController: Symbol("PeopleController")
    },
    Repository: {
        IPersonRepository: Symbol("IPersonRepository")
    },
    Utils: {
        IFileService: Symbol("IFileService"),
        UUID: Symbol("UUID"),
        HttpStatus: Symbol("HttpStatus")
    }
};

export default Contracts;