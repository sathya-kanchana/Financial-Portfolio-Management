import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  @Input() public text: string = '';
  @Input() public disabled: boolean = false;
  
  @Output() public handleClick: EventEmitter<void> = new EventEmitter();

  public clickButton(event: Event): void {
    this.handleClick.emit();
  }
}
