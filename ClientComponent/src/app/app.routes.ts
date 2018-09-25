import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/views/public/main/main.component';

const APP_ROUTES: Routes = [
  { path: 'main', component: MainComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'main' }
];

export const routing = RouterModule.forRoot(APP_ROUTES,  { useHash: false });
