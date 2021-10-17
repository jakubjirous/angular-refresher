import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PersonsService {
    personChanged = new Subject<string[]>();
    persons: string[] = [];

    constructor() {
    }

    addPerson(name: string) {
        this.persons = [...this.persons, name];
        this.personChanged.next(this.persons);
    }

    deletePerson(personIndex: number) {
        this.persons = this.persons.filter((_, index) => index !== personIndex);
        this.personChanged.next(this.persons);
    }
}
