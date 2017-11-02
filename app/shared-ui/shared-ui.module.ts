import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import {AccordionComponent} from './accordion/accordion.component';
import {DetailItemComponent} from './detail-item/detail-item.component';
import {DialogComponent} from './dialog/dialog.component';
import {RadioGroupComponent} from './radio-group/radio-group.component';
import {SectionComponent} from './section/section.component';
import {CardItemComponent} from './card-item/card-item.component';
import {ModalComponent} from './modal/modal.component';
import {IconPipe} from '../pipes/icon.pipe';

const SHARED_UI_COMPONENTS = [
    IconPipe,
    ModalComponent,
    AccordionComponent,
    DetailItemComponent,
    DialogComponent,
    RadioGroupComponent,
    SectionComponent,
    CardItemComponent
];

@NgModule({
    declarations: SHARED_UI_COMPONENTS,
    imports: [
        CommonModule,
        NativeScriptModule
    ],
    exports: SHARED_UI_COMPONENTS,
    entryComponents:[]
})

export class SharedUIModule {}
