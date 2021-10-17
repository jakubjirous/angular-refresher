import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { PersonsService } from "../services/persons-service/persons.service";

@Component({
    selector: 'app-persons',
    templateUrl: './persons.component.html',
    styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit, OnDestroy {

    personList: string[] = [];
    private personListSubscription: Subscription | undefined;

    constructor(private personsService: PersonsService) {
    }

    ngOnInit(): void {
        this.personList = this.personsService.persons;
        this.personListSubscription = this.personsService.personChanged.subscribe(persons => {
            this.personList = persons;
        })
    }

    onDeletePerson(personIndex: number) {
        this.personsService.deletePerson(personIndex);
    }

    ngOnDestroy(): void {
        // prevent memory leaks with using object and subscriptions
        this.personListSubscription?.unsubscribe();
    }
}
