import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { BucketlistFormComponent } from './pages/bucketlist-form/bucketlist-form.component';
import { BucketlistComponent } from './pages/bucketlist/bucketlist.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '', component: BucketlistComponent
      },
      {
        path: 'bucketlist', component: BucketlistComponent
      },
      {
        path: 'bucketlist/edit', component: BucketlistFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
