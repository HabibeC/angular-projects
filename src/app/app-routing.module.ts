import { MainCountComponent } from './components/ngrx/main-count/main-count.component';
import { SelectionComponent } from './components/selection/selection.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/e-ticaret/home/home.component';
import { LayoutsComponent } from './components/e-ticaret/layouts/layouts.component';

const routes: Routes = [
  {
    path: '',
    component: SelectionComponent,
  },
  {
    path: 'layout',
    component: LayoutsComponent,
    children: [
      {
        path: 'layout',
        component: HomeComponent,
      },
    ],
  },
  {
    path: 'main-count',
    component: MainCountComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
