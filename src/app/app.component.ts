import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    persons: string[] = [];

    onCreatedPerson(name: string) {
        this.persons = [...this.persons, name];
    }
}
