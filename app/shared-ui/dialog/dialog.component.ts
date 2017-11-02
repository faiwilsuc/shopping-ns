import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
// import { ActivatedRoute } from "@angular/router";
import { Animation } from "ui/animation";
import { AnimationCurve } from "ui/enums";
import { View } from "ui/core/view";
import { Color } from "color";
const dateFormat = require('dateformat');

@Component({
  selector: "dialog",
  moduleId: module.id,
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.css"],
})
export class DialogComponent implements OnInit {

  @ViewChild("container") containerView: ElementRef;
  @ViewChild("dialog") dialogView: ElementRef;
  
  title: string;
  navStack = [];

  constructor(
    private routerExtensions: RouterExtensions,
      // private route: ActivatedRoute,
  ) {
      // this.route.params.forEach((params) => { this.productId = params['id'] });
  }

  ngOnInit() {
    // this.show();
  }

  // show() {

  //     let containerView = <View>this.containerView.nativeElement;
  //     let dialogView = <View>this.dialogView.nativeElement;

  //     containerView.style.visibility = "visible";
  //     let animations = [{
  //         target: containerView,
  //         backgroundColor: new Color(178, 0, 0, 0),
  //         duration: 100,
  //         curve: AnimationCurve.easeOut,
  //     }, {
  //         target: dialogView,
  //         opacity: 1,
  //         translate: {x: 0, y: 0},
  //         duration: 400,
  //         curve: AnimationCurve.easeOut,
  //     }];
  //     new Animation(animations, false).play();
  // }

  // hide() {
  //   let containerView = <View>this.containerView.nativeElement;
  //   let dialogView = <View>this.dialogView.nativeElement;

  //   let animations = [{
  //     target: containerView,
  //     backgroundColor: new Color(0, 0, 0, 0),
  //     duration: 300,
  //     curve: AnimationCurve.easeIn,
  //   }, {
  //       target: dialogView,
  //       opacity: 0,
  //       translate: {x: 0, y: 700},
  //       duration: 300,
  //       curve: AnimationCurve.easeOut,
  //   }];
  //   new Animation(animations, false).play().then(()=>{
  //     containerView.style.visibility = "collapse";
  //   }).then(()=>{
  //     this.routerExtensions.back();
  //   });
  // }

}
