import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PreloadService } from './service/preload.service';

const routes: Routes = [
  {path:'about',component: AboutComponent},
  {path:'contact',component: ContactComponent},
  {path:'home',component: HomeComponent},
  {path:'',component: HomeComponent},
  {
    path:"customer",
    loadChildren:()=>import('./customer/customer.module').then(a=>a.CustomerModule),
    data:{preload:false}
  },
  {
    path:"user",
    loadChildren:()=>import('./user/user.module').then(a=>a.UserModule),
    data:{preload:false}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadService})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
