import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss'],
})
export class CustomButtonComponent {
  @Input() type:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
    | 'link' = 'primary';
  @Input() size: 'sm' | 'lg' | '' = ''; // Bootstrap sizes: sm, lg, or empty for default
  @Input() outline: boolean = false;
  @Input() disabled: boolean = false;
  @Input() block: boolean = false; // For full-width block buttons
  @Input() imageUrl: string = '';
  @Input() imageAlt: string = '';
  @Input() customTheme: boolean = false; // enable/disable bootstrap styling
  @Output() buttonClick = new EventEmitter<Event>();

  onClick(event: Event): void {
    if (!this.disabled) {
      this.buttonClick.emit(event);
    }
  }

  get buttonClasses(): string {
    let classes = '';
    if (this.customTheme) {
      classes = 'custom-btn';
      if (this.outline) {
        classes += ` outline-${this.type}`;
      } else {
        classes += ` custom-${this.type}`;
      }
    } else {
      classes = 'btn';
      if (this.outline) {
        classes += ` btn-outline-${this.type}`;
      } else {
        classes += ` btn-${this.type}`;
      }
      if (this.size) {
        classes += ` btn-${this.size}`;
      }
    }
    if (this.block) {
      classes += ' btn-block';
    }
    return classes;
  }
}
