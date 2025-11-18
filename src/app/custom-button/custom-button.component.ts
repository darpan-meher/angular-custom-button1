import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from "@angular/core";
import { ColorVariant, Size } from "./custom-button.model";

@Component({
  selector: "app-custom-button",
  templateUrl: "./custom-button.component.html",
  styleUrls: ["./custom-button.component.scss"],
})
export class CustomButtonComponent implements AfterViewInit {
  @ViewChild("customButton") customButtonRef!: ElementRef;
  @Input() type: ColorVariant = "primary";
  @Input() size: Size = "";
  @Input() outline: boolean = false;
  @Input() disabled: boolean = false;
  @Input() imageUrl: string = "";
  @Input() imageAlt: string = "";
  @Input() customTheme: boolean = false; // enable/disable bootstrap styling
  @Output() buttonClick = new EventEmitter<Event>();

  onClick(event: Event): void {
    if (!this.disabled) {
      this.buttonClick.emit(event);
    }
  }

  ngAfterViewInit(): void {
    this.appendClasses();
  }

  appendClasses() {
    let classes = this.customButtonRef.nativeElement.classList;
    if (this.customTheme) {
      if (this.outline) {
        classes.add(`custom-btn-outline`);
      } else {
        classes.add(`custom-btn-${this.type}`);
      }
    } else {
      classes.add("btn");
      if (this.outline) {
        classes.add(`btn-outline-${this.type}`);
      } else {
        classes.add(`btn-${this.type}`);
      }
      if (this.size) {
        classes.add(`btn-${this.size}`);
      }
    }
  }
}
