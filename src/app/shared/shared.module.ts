import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemLoaderComponent } from './system-loader/system-loader.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { ModalHeaderComponent } from './components/modal-header/modal-header.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SystemLoaderComponent,
    PageHeaderComponent,
    ModalHeaderComponent
  ],
  exports: [
    PageHeaderComponent,
    ModalHeaderComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
