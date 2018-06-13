import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { TabViewModule } from 'primeng/tabview';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MultiSelectModule } from 'primeng/multiselect';

@NgModule({
    imports: [
        TableModule,
        ButtonModule,
        InputTextModule,
        DialogModule,
        TabViewModule,
        InputTextareaModule,
        MultiSelectModule
    ],
    exports: [
        TableModule,
        ButtonModule,
        InputTextModule,
        DialogModule,
        TabViewModule,
        InputTextareaModule,
        MultiSelectModule
    ],
  })
  export class PrimeNgModule {
  }
