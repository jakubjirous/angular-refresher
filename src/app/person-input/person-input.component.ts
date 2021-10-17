import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-person-input',
    templateUrl: './person-input.component.html',
    styleUrls: ['./person-input.component.scss']
})
export class PersonInputComponent implements OnInit {
    @Output() createdPersonName = new EventEmitter<string>();
    enteredPersonName: string = "";

    constructor() {
    }

    ngOnInit(): void {
    }

    onCreatePerson() {
        this.createdPersonName.emit(this.enteredPersonName);
        this.enteredPersonName = '';
    }
}
