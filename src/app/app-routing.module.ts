import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { TableComponent } from './components/table/table.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {
    path: 'home', 
    component: HomeComponent,
    children: [
      { path: 'index', component: IndexComponent },
      { path: 'table', component: TableComponent },
      { path: '**', redirectTo: 'index'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
