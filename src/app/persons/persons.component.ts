import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { Person, PersonsService } from "../services/persons-service/persons.service";

@Component({
    selector: 'app-persons',
    templateUrl: './persons.component.html',
    styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit, OnDestroy {

    personList: Person[] = [];
    isFetching: boolean = false;
    private personListSubscription: Subscription | undefined;

    constructor(private personsService: PersonsService) {
    }

    ngOnInit(): void {
        this.isFetching = true;
        this.personList = this.personsService.persons;
        this.personListSubscription = this.personsService.personChanged.subscribe(persons => {
            this.personList = persons;
            this.isFetching = false;
        });
        this.personsService.fetchPersons();
    }

    onDeletePerson(personIndex: number) {
        this.personsService.deletePerson(personIndex);
    }

    ngOnDestroy(): void {
        // prevent memory leaks with using object and subscriptions
        this.personListSubscription?.unsubscribe();
    }
}
