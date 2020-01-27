import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddStudentRComponent } from './add-student-r/add-student-r.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MoreDetailsComponent } from './more-details/more-details.component';
import { OverviewComponent } from './overview/overview.component'
import { ContactComponent } from './contact/contact.component'
const routes: Routes = [
    { path: '', component: StudentDetailsComponent },
    { path: "student-details", redirectTo: '', pathMatch: 'full' },
    {
        path: 'student-details/:id',
        component: MoreDetailsComponent
    },
    { path: 'templateform', component: AddStudentComponent },
    { path: 'reactiveform', component: AddStudentRComponent },
    { path: '**', component: PageNotFoundComponent }
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
export const routingComponents = [StudentDetailsComponent, 
    AddStudentComponent, 
    AddStudentRComponent, 
    PageNotFoundComponent, 
    MoreDetailsComponent,
     OverviewComponent, 
    ContactComponent]

