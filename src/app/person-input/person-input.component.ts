import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { PersonsService } from "../services/persons-service/persons.service";

@Component({
    selector: 'app-person-input',
    templateUrl: './person-input.component.html',
    styleUrls: ['./person-input.component.scss']
})
export class PersonInputComponent implements OnInit {
    enteredPersonName: string = '';
    @ViewChild("personNameInput") personNameInput: ElementRef | undefined;

    constructor(private personsService: PersonsService, private router: Router) {
    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
        this.personNameInput?.nativeElement.focus();
    }

    onCreatePerson() {
        if (this.enteredPersonName !== '') {
            this.personsService.addPerson(this.enteredPersonName);
            this.enteredPersonName = '';
            this.router.navigate(['/'])
        }
    }

    onClearPerson() {
        this.enteredPersonName = '';
    }
}
