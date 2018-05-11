import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
    imports: [
        TableModule,
        ButtonModule,
        InputTextModule
    ],
    exports: [
        TableModule,
        ButtonModule,
        InputTextModule
    ],
  })
  export class PrimeNgModule {
  }
