import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading.component';

@NgModule({
    declarations: [LoadingComponent],
    imports: [ CommonModule ],
    exports: [LoadingComponent],
    providers: [],
})
export class LoadingModule {}