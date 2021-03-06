import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './pages/page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotpagefoundComponent } from './shared/notpagefound/notpagefound.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

const appRoutes: Routes = [
    {path: '',
    component: PageComponent,
    children: [
        {path: 'dashboard', component: DashboardComponent},
        {path: 'progress', component: ProgressComponent},
        {path: 'graficas1', component: Graficas1Component},
        {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
    ]
},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: '**', component: NotpagefoundComponent}
];
export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});
