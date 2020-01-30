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
import { OverviewComponent } from './overview/overview.component';
import { ContactComponent } from './contact/contact.component';
import { TestComponent } from './test/test.component';
import { DetailproviderService } from './detailprovider.service';
import { HttpClientModule } from '@angular/common/http'
import { EmployeeServiceService } from './employee-service.service';
import { JsonfetcherComponent } from './jsonfetcher/jsonfetcher.component'
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PageNotFoundComponent,
    MoreDetailsComponent,
    OverviewComponent,
    ContactComponent,
    TestComponent,
    JsonfetcherComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule
    
  ],
  providers: [DetailproviderService,EmployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
