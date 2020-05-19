import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { TableComponent } from './components/table/table.component';
import { HomeComponent } from './components/home/home.component';


export const routes: Routes = [
    {path: '', component: IndexComponent},
    { path: 'tablolar', component: TableComponent },
    { path: 'anasayfa', component: IndexComponent },
    { path: '**', redirectTo: 'anasayfa'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
