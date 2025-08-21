import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputField } from '../../../@financial/components/input/input';
import { MatInputModule } from '@angular/material/input';
import { Button } from '../../../@financial/components/button/button';
import { OnlyNumberDirective } from '../../../@financial/directives/only-number';

@Component({
  selector: 'app-investment',
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    InputField,
    Button,
    OnlyNumberDirective,
  ],
  templateUrl: './investment.html',
  styleUrl: './investment.scss',
})
export class Investment implements OnInit{
  public investment!: FormGroup;
  public symbol!: FormControl;
  public quantity!: FormControl;
  public purchasePrice!: FormControl;
  public purchaseDate!: FormControl;
  public assetType!: FormControl;
  public assetTypes = ['Stock', 'Bond', 'Crypto']; 

  public constructor(public fb: FormBuilder){}

  public ngOnInit(): void {
    this.initForm();
  }

  public initForm() {
    this.investment = this.fb.group({
      assetType: ['', Validators.required],
      symbol: ['',[Validators.required]],
      quantity: ['', [Validators.required, Validators.minLength(2)]],
      purchasePrice: ['', [Validators.required, Validators.maxLength(3)]],
      purchaseDate: [''],
    });

    this.assetType = this.investment.get('assetType') as FormControl;
    this.symbol = this.investment.get('symbol') as FormControl;
    this.quantity = this.investment.get('quantity') as FormControl;
    this.purchasePrice = this.investment.get('purchasePrice') as FormControl;
    this.purchaseDate = this.investment.get('purchaseDate') as FormControl;
  }

  public getControl(name: string): FormControl {
    return this.investment.get(name) as FormControl;
  }

  public getErrorMessage(controlName: string): string | null {
    const control = this.getControl(controlName);

    if (control && control.errors && control.touched) {
      if (control.errors['required']) {
        return `${this.formatLabel(controlName)} field is required`;
      }
      if (control.errors['minlength']) {
        return `${this.formatLabel(controlName)} must be at least ${control.errors['minlength'].requiredLength} characters long`;
      }
      if (control.errors['maxlength']) {
        return `${this.formatLabel(controlName)} must be max at ${control.errors['maxlength'].requiredLength} characters long`;
      }
    }
    
    return null;
  }

  public formatLabel(name: string) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  public isSubmit() {
    if (this.investment.invalid) {
      this.investment.markAllAsTouched();  // Mark all controls as touched
      return;
    }

  

  console.log(this.investment.value);

  this.investment.reset();
  }
}
