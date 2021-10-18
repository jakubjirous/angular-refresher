import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { map } from "rxjs/operators";

export type Person = {
    name: string;
    fetched: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class PersonsService {
    personChanged = new Subject<Person[]>();
    persons: Person[] = [];
    fetchedPersons: Person[] = [];

    constructor(private http: HttpClient) {
    }

    fetchPersons() {
        this.http.get<any>('http://hp-api.herokuapp.com/api/characters').pipe(map(responseData => {
            return responseData?.slice(0, 4)?.map((character: { name: any; fetched: boolean }) => {
                return {
                    name: character?.name,
                    fetched: true,
                }
            })
        })).subscribe(transformedData => {
            this.fetchedPersons = transformedData;
            this.personChanged.next([...this.persons, ...this.fetchedPersons]);
        })
    }

    addPerson(name: string) {
        this.persons = [...this.persons, { name, fetched: false }];
        this.personChanged.next(this.persons);
    }

    deletePerson(personIndex: number) {
        this.persons = this.persons.filter((_, index) => index !== personIndex);
        this.personChanged.next([...this.persons, ...this.fetchedPersons]);
    }
}
