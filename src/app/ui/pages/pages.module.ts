import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DomainModule } from 'src/app/domain/domain.module';
import { ComponentsModule } from '../components/components.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    DomainModule,
    ComponentsModule,
    HttpClientModule
  ],
  exports: [HomeComponent],
  providers:[]
})
export class PagesModule { }
