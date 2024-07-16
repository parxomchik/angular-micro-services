import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TruncatePipe } from './pipes/truncate.pipe';

const shareComponents = [
  TruncatePipe
];

@NgModule({
  declarations: [shareComponents],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  providers: [],
  exports: [shareComponents]
})
export class ShareModule { }
