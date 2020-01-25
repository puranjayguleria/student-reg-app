import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { ReactiveFormsModule} from '@angular/forms';
import { CommonModule} from '@angular/common'
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { from } from 'rxjs';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MoreDetailsComponent } from './more-details/more-details.component';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PageNotFoundComponent,
    MoreDetailsComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
