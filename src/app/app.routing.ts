import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
    {
        path: '',
        component: MoviesComponent,
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }