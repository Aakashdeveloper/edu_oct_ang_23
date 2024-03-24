import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { AfterSubmitComponent } from './after-submit/after-submit.component';

const routes: Routes = [
  {path:'after',component: AfterSubmitComponent},
  {path:'home',component: FormsComponent},
  {path:'',component: FormsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
