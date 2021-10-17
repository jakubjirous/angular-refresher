import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { PersonInputComponent } from "../person-input/person-input.component";
import { PersonsComponent } from "../persons/persons.component";

const routes: Routes = [
    {
        path: '',
        component: PersonsComponent,
    },
    {
        path: 'input',
        component: PersonInputComponent,
    }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class RoutingModule {
}
