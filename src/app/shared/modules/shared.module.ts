import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TruncatePipe } from "../pipes/truncate.pipe";

const pipes = [TruncatePipe];

const modules = [
  ReactiveFormsModule,
  FormsModule,
  RouterModule,
];

@NgModule({
  declarations: [...pipes],
  imports: [
    CommonModule,
    ...modules
  ],
  exports: [...modules, ...pipes]
})
export class SharedModule { }
