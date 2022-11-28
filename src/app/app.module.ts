import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BucketlistComponent } from './pages/bucketlist/bucketlist.component';
import { LayoutComponent } from './layout/layout.component';
import { BucketlistFormComponent } from './pages/bucketlist-form/bucketlist-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './pages/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    BucketlistComponent,
    LayoutComponent,
    BucketlistFormComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
