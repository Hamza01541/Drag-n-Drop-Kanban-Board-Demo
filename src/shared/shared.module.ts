import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TaskBoardComponent } from 'src/shared/components';
import {TaskBoardService } from 'src/shared/services';

/** Shared Modules */
const SHARED_MODULES = [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
];

/** Shared Components */
const SHARED_COMPONENTS = [
    TaskBoardComponent,
];

/** Shared Services */
const SHARED_SERVICES = [
    TaskBoardService
];

@NgModule({
    imports: [...SHARED_MODULES],
    exports: [...SHARED_MODULES, ...SHARED_COMPONENTS],
    declarations: [...SHARED_COMPONENTS],
    providers: [...SHARED_SERVICES]
})
export class SharedModule { }
