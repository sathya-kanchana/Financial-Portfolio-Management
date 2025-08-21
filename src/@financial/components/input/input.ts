import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
  ],
  templateUrl: './input.html',
  styleUrl: './input.scss',
})
export class InputField {
  @Input() public control: FormControl = new FormControl();
  @Input() public label: string = '';
  @Input() public type: string = 'text'; 
  @Input() public placeholder: string = '';
  @Input() public isRequired: boolean = false;
  @Input() public minLength?: number = 0;
  @Input() public maxLength?: number = 3;
  @Input() public errorMessage?: string | null = null;
  @Input() public options: string[] = []; // used for 'select' type


  public onTouched = () => { this.control.markAsTouched(); };
}
