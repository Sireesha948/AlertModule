import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummaryDashboardComponent } from './summary-dashboard/summary-dashboard.component';
import { ReportsComponent } from './reports/reports.component';
import { SapPostingsComponent } from './sap-postings/sap-postings.component';
import { AlertModuleComponent } from './alert-module/alert-module.component';
import { VarianceReviewComponent } from './variance-review/variance-review.component';
import { FlowCalculationComponent } from './flow-calculation/flow-calculation.component';
import { MtMovementComponent } from './mt-movement/mt-movement.component';
import { MeasureComponent } from './measure/measure.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  // {path:'', component:SummaryDashboardComponent},
  {path:"dashboard", component:SummaryDashboardComponent},
  {path:"measure", component:MeasureComponent},
  {path:"movement", component:MtMovementComponent},
  {path:"calculation", component:FlowCalculationComponent},
  {path:"variance", component:VarianceReviewComponent},
  {path:"alert", component:AlertModuleComponent},
  {path:"sap", component:SapPostingsComponent},
  {path:"reports", component:ReportsComponent},
  {path:"configuration", component:ConfigurationComponent},
  {path:"user", component:UserManagementComponent},
  {path:"logout", component:LogoutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
