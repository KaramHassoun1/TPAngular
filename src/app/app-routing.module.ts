import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv/cv.component';
import { HomeComponent } from './components/home/home.component';
import { FrontComponent } from './components/front/front.component';
import { AdminComponent } from './components/admin/admin.component';
import { NF404Component } from './components/nf404/nf404.component';
import {DetailCvComponent} from "./cv/detail-cv/detail-cv.component";
import {LoginComponent} from "./login/login.component";
// pipe
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path : 'cv' ,
    children :
      [
        {path : '' ,
          component: CvComponent },

        {
          path: ':id',
          component: DetailCvComponent
        },
      ]
  },
  { path: 'login', component:LoginComponent  },

  {
    path: 'admin',
    component: AdminComponent,
  },
  { path: '**', component: NF404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
