import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import PeopleService from "../contracts/services/peopleService";
import { ConfigurationValues } from "../config";

@Injectable()
export default class HttpPeopleService implements PeopleService {
    private _serverUrl: string;

    constructor(private _http: Http) {
        this._serverUrl = ConfigurationValues.serverUrl;
    }

    getAll(): Promise<Person[]> {
        return this._http.get(`${this._serverUrl}/api/people`)
            .map(value => value.json() as Person[])
            .toPromise();
    }

    getById(id: string): Promise<Person> {
        return this._http.get(`${this._serverUrl}/api/person/${id}`)
            .map(value => value.json() as Person)
            .toPromise();
    }

    getByName(name: string): Promise<Person[]> {
        return this._http.get(`${this._serverUrl}/api/people/${name}`)
            .map(value => value.json() as Person[])
            .toPromise();
    }

    post(person: Person): Promise<Person> {
        return this._http.post(`${this._serverUrl}/api/person`, person)
            .map(value => value.json() as Person)
            .toPromise();
    }

    put(id: string, person: Person): Promise<Person> {
        return this._http.put(`${this._serverUrl}/api/person/${id}`, person)
            .map(value => value.json() as Person)
            .toPromise();
    }

    delete(id: string): Promise<void> {
        return this._http.delete(`${this._serverUrl}/api/person/${id}`)
            .map(value => null)
            .toPromise();
    }
}
