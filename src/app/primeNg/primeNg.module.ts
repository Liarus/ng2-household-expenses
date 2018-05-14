import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { TabViewModule } from 'primeng/tabview';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
    imports: [
        TableModule,
        ButtonModule,
        InputTextModule,
        DialogModule,
        TabViewModule,
        InputTextareaModule
    ],
    exports: [
        TableModule,
        ButtonModule,
        InputTextModule,
        DialogModule,
        TabViewModule,
        InputTextareaModule
    ],
  })
  export class PrimeNgModule {
  }
