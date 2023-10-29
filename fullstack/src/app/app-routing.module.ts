import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListingComponent } from './listing/listing.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PlaceOrderComponent } from './place-order/place-order.component';

const routes: Routes = [
    {path:'listing/:id',component: ListingComponent},
    {path:'home',component: HomeComponent},
    {path:'register',component: RegisterComponent},
    {path:'login',component: LoginComponent},
    {path:'placeOrder/:restName',component: PlaceOrderComponent},
    {path:'details',component: DetailsComponent},
    {path:'',component: HomeComponent},
    {path:'**',pathMatch:'full',component: NotFoundComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    providers:[],
    exports:[RouterModule]
})

export class AppRoutingModule{}