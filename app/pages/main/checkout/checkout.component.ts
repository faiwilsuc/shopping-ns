import { Component, OnInit, ViewChild, ElementRef, Directive } from '@angular/core';
import { NgIf } from '@angular/common';
import {Page} from 'ui/page';
import {RouterExtensions} from 'nativescript-angular/router';
import { View } from 'ui/core/view';
import { Animation } from 'ui/animation';
import { AnimationCurve } from 'ui/enums';


import { DeliveryTimeService, DeliveryTime,
    DeliveryDateService, DeliveryDate } from '../../../services/index';

export enum CheckoutPickupSubpage {
    none,
    datePage,
    timePage,
}

export enum CheckoutMode {
    delivery,
    pickup
}

@Component({
    selector: 'ns-checkout',
    moduleId: module.id,
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent  {

    private pageTitle = 'Start Order';
    title = 'Start Order';

    totalPrice: string = "$16.00";
    cartCount: number = 1;
    suburb:string = "Padstow, NSW";
    firstName:string = "";
    lastName:string = "";
    email:string = "";
    phoneNumber:string = "";
    code:string = "";
    cardData:any[]=[{icon:"~/images/visa_icon.png", label:"Visa"},{icon:"~/images/master_icon.png", label:"Master Card"},{icon:"~/images/amex_icon.jpg", label:"AMEX"},
        {icon:"~/images/paypal_icon.png", label:"PayPal"},{icon:"~/images/cash_icon.jpg", label:"Cash"}]
    selIndex: number = -1;
    requestedTime:string="ASAP";
    pickType:number = 0;
    selectedDate: any;
    selectedTime: any;
    streetNo:string="";
    streetName:string="";

    deliveryDates: DeliveryDate[] = [];
    deliveryTimes: DeliveryTime [] = [];

    @ViewChild("mainPage") mainpageElement: ElementRef;
    @ViewChild("finalPage") finalPageElement: ElementRef;
    @ViewChild("subPage") subpageElement: ElementRef;

    showMainpage = true;
    showFinalPage = false;

    componentSubpage = CheckoutPickupSubpage.none;
    CheckoutPickupSubpage = CheckoutPickupSubpage;

    componentCheckoutMode = CheckoutMode.delivery; //change the default mode here for development
    CheckoutMode = CheckoutMode;

    constructor(page:Page,
                private routerExtensions: RouterExtensions,
                private deliveryDateService: DeliveryDateService,
                private deliveryTimeService: DeliveryTimeService) {

        // page.actionBarHidden = true;
   
        this.deliveryDateService.getDeliveryDates()
            .subscribe(
                (data) => this.deliveryDates = data
            );
        this.deliveryTimeService.getDeliveryTimes()
            .subscribe(
                (data) => this.deliveryTimes = data
            );
    }


    back(){
        this.routerExtensions.backToPreviousPage();
    }

    next(){
        // this.status = this.status + 1;
        // let firstPage = <View>this.firstPage.nativeElement;
        // let secondPage = <View>this.secondPage.nativeElement;
        // if(this.status==2){
        // 	firstPage = <View>this.secondPage.nativeElement;
        //     secondPage = <View>this.thirdPage.nativeElement;
        // }
        // let animations = [{
        //     target: firstPage,
        //     translate: {x: -360, y: 0},
        //     duration: 250,
        //     curve: AnimationCurve.easeInOut,
        // }, {
        //     target: secondPage,
        //     translate: {x: 0, y: 0},
        //     duration: 250,
        //     curve: AnimationCurve.easeInOut,
        // }];
        // new Animation(animations, false).play();

    }

    login(){

    }

    placeOrder(){
        if(this.selIndex<0) {
            alert("select payment method!");
            return;
        }
        if(this.pickType==1){
            if(!this.selectedDate){
                alert("select Date!");
                return;
            }
            else if(!this.selectedTime){
                alert("select Time!");
                return;
            }
            this.requestedTime = this.selectedTime.label + " on " + this.selectedDate.label;
        }

        this.showFinalPage = true;
        let page1 = <View>this.mainpageElement.nativeElement;
        let finalPage = <View>this.finalPageElement.nativeElement;
        let animations = [{
            target: page1,
            translate: {x: -360, y: 0},
            duration: 250,
            curve: AnimationCurve.easeInOut,
        }, {
            target: finalPage,
            translate: {x: 0, y: 0},
            duration: 250,
            curve: AnimationCurve.easeInOut,
        }];
        new Animation(animations, false).play();
    }

    onSelectCard(index: number) {
        this.selIndex = index;
    }

    onSelType(index){
        this.pickType = index;
    }

    showDates() {
        this.pushNav(CheckoutPickupSubpage.datePage);
    }

    showTimes() {
        this.pushNav(CheckoutPickupSubpage.timePage);
    }
   
    onCloseSubpage(item: object) {
        switch (this.componentSubpage){
            case CheckoutPickupSubpage.datePage: {
                this.selectedDate = item;
                break;
            }
            case CheckoutPickupSubpage.timePage: {
                this.selectedTime = item;
                break;
            }
        }
        this.popNav();

    }

    pushNav(subpage: CheckoutPickupSubpage) {

        this.componentSubpage = subpage;

        switch (this.componentSubpage){
            case CheckoutPickupSubpage.datePage: {
                this.title = 'select delivery date';
                break;
            }
            case CheckoutPickupSubpage.timePage: {
                this.title = 'select delivery time';
                break;
            }
            default: {
                this.title = 'select delivery time';
                break;
            }
        }

        let animations = [{
            target:  <View>this.mainpageElement.nativeElement,
            translate: {x: -380, y: 0},
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

        if (this.componentSubpage != CheckoutPickupSubpage.none) {
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
                .then( () => this.componentSubpage = CheckoutPickupSubpage.none );

        }

    }

}

