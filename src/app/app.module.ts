import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';



import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';



import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SummaryDashboardComponent } from './summary-dashboard/summary-dashboard.component';
import { MeasureComponent } from './measure/measure.component';
import { MtMovementComponent } from './mt-movement/mt-movement.component';
import { FlowCalculationComponent } from './flow-calculation/flow-calculation.component';
import { VarianceReviewComponent } from './variance-review/variance-review.component';
import { AlertModuleComponent } from './alert-module/alert-module.component';
import { SapPostingsComponent } from './sap-postings/sap-postings.component';
import { ReportsComponent } from './reports/reports.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { LogoutComponent } from './logout/logout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';




import { NgIdleModule } from '@ng-idle/core';
import { BodyComponent } from './body/body.component';
// import { KeepaliveModule } from '@ng-idle/keepalive';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidenavComponent,
    SummaryDashboardComponent,
    MeasureComponent,
    MtMovementComponent,
    FlowCalculationComponent,
    VarianceReviewComponent,
    AlertModuleComponent,
    SapPostingsComponent,
    ReportsComponent,
    ConfigurationComponent,
    UserManagementComponent,
    LogoutComponent,
    HomeComponent,
    FormComponent,
    BodyComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatDatepickerModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatCardModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatMenuModule,
    MatPaginatorModule,
    MatDialogModule,
    NgIdleModule.forRoot(),
    
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
