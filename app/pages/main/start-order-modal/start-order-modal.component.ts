import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';

import { View } from 'ui/core/view';
import { AnimationCurve } from 'ui/enums';
import { Animation } from 'ui/animation';


import { ModalDialogParams } from 'nativescript-angular/modal-dialog';

import { SuburbService, Suburb,
        DeliveryTimeService, DeliveryTime,
        DeliveryDateService, DeliveryDate } from '../../../services/index';


export enum StartOrderSubpage {
    none,
    suburbsPage,
    datePage,
    timePage
}

@Component({
    moduleId: module.id,
    selector: 'ns-start-order-modal',
    templateUrl: './start-order-modal.component.html',
    styleUrls: ['./start-order-modal.component.css']
})
export class StartOrderModalComponent  {

    private pageTitle = 'Start Order';
    title = 'Start Order';

    @ViewChild('mainPage') mainpageElement: ElementRef;
    @ViewChild('subPage') subpageElement: ElementRef;

    showMainpage = true;

    componentSubpage = StartOrderSubpage.none;
    StartOrderSubpage = StartOrderSubpage;

    orderTypes = [{ label: 'Delivery' }, { label: 'Pick up' }];

    deliveryDates: DeliveryDate[] = [];
    deliveryTimes: DeliveryTime [] = [];

    selectedSuburb: object;
    selectedDate: object;
    selectedTime: object;

    public constructor( private params: ModalDialogParams,
                        private suburbService: SuburbService,
                        private deliveryDateService: DeliveryDateService,
                        private deliveryTimeService: DeliveryTimeService) {

        this.deliveryDateService.getDeliveryDates()
            .subscribe(
                (data) => this.deliveryDates = data
            );
        this.deliveryTimeService.getDeliveryTimes()
            .subscribe(
                (data) => this.deliveryTimes = data
            );

    }


    get showModalButtons(): boolean {
        return this.showMainpage;
    }


    private pushNav(subpage: StartOrderSubpage) {

        this.componentSubpage = subpage;

        switch (this.componentSubpage){
            case StartOrderSubpage.suburbsPage: {
                this.title = 'select suburb';
                break;
            }
            case StartOrderSubpage.datePage: {
                this.title = 'select delivery date';
                break;
            }
            case StartOrderSubpage.timePage: {
                this.title = 'select delivery time';
                break;
            }
            default: {
                this.title = 'select delivery time';
                break;
            }
        }


         const animations = [{
             target:  <View>this.mainpageElement.nativeElement,
             translate: {x: -360, y: 0},
             duration: 250,
             curve: AnimationCurve.easeInOut,
         }, {
             target: <View>this.subpageElement.nativeElement,
             translate: {x: 0, y: 0},
             duration: 250,
             curve: AnimationCurve.easeInOut,
         }];
         new Animation(animations, false).play()
             .then( () => this.showMainpage = false );
    }

    popNav() {

         if (this.componentSubpage != StartOrderSubpage.none) {
             this.title = this.pageTitle;
             this.showMainpage = true;

             const animations = [{
                 target:  <View>this.mainpageElement.nativeElement,
                 translate: {x: 0, y: 0},
                 duration: 250,
                 curve: AnimationCurve.easeInOut,
             }, {
                 target: <View>this.subpageElement.nativeElement ,
                 translate: {x: 360, y: 0},
                 duration: 250,
                 curve: AnimationCurve.easeInOut,
             }];
             new Animation(animations, false).play()
                 .then( () => this.componentSubpage = StartOrderSubpage.none );

         }
    }

    public confirm() {
        this.cancel();
    }

    public cancel() {
        this.params.closeCallback('close');
    }

    onSelectedType(item: object) {

    }

    showSuburbs() {
        this.pushNav(StartOrderSubpage.suburbsPage);
    }

    showDates() {
        this.pushNav(StartOrderSubpage.datePage);
    }


    showTimes() {
        this.pushNav(StartOrderSubpage.timePage);
    }

    onCloseSubpage(item: object) {
        switch (this.componentSubpage){
            case StartOrderSubpage.suburbsPage: {
                this.selectedSuburb = item;
                break;
            }
            case StartOrderSubpage.datePage: {
                this.selectedDate = item;
                break;
            }
            case StartOrderSubpage.timePage: {
                this.selectedTime = item;
                break;
            }
        }
        this.popNav();

    }


}
