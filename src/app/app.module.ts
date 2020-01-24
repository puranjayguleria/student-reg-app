import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddStudentRComponent } from './add-student-r/add-student-r.component';
import { ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsComponent,
    AddStudentComponent,
    AddStudentRComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
