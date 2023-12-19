import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

export const routes: Routes = [
    {
        path: 'templateform',
        pathMatch: 'full',
        component: TemplateDrivenFormComponent
    }
];

@NgModule ({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule { }
