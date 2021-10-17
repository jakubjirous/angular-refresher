import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-persons',
    templateUrl: './persons.component.html',
    styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit {
    @Input() personList: string[] = [];
    @Output() deletedPersonIndex = new EventEmitter<number>();

    constructor() {
    }

    ngOnInit(): void {
    }

    onDeletePerson(personIndex: number) {
        this.deletedPersonIndex.emit(personIndex);
    }
}
