import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddStudentRComponent } from './add-student-r/add-student-r.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { MoreDetailsComponent } from './more-details/more-details.component'
const routes: Routes = [
    {
        path:"", redirectTo:"/student-details",pathMatch: 'full'} ,
        {path: 'student-details', component: StudentDetailsComponent},
        {path: 'student-details/:id/:job/:name', component: MoreDetailsComponent },
        {path: 'templateform', component: AddStudentComponent},
        {path: 'reactiveform', component: AddStudentRComponent},
        {path: '**', component: PageNotFoundComponent }

    
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
export const routingComponents=[StudentDetailsComponent, AddStudentComponent, AddStudentRComponent,PageNotFoundComponent,MoreDetailsComponent]
