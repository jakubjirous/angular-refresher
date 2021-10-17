import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = "refresher";
    persons: string[] = [];

    onCreatedPerson(name: string) {
        this.persons = [...this.persons, name];
    }

    onDeletedPerson(personIndex: number) {
        this.persons = this.persons.filter((_, index) => index !== personIndex);
    }
}
