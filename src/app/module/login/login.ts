import { Component, OnInit } from '@angular/core';
import { InputField } from '../../../@financial/components/input/input';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { Button } from '../../../@financial/components/button/button';
import { Auth } from '../../core/services/auth';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterOutlet,
    ReactiveFormsModule,
    MatInputModule,
    InputField,
    Button,
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnInit{
  public loginForm!: FormGroup;
  public userName!: FormControl;
  public passWord!: FormControl;
  public error = '';

  public constructor(
    public fb: FormBuilder,
    public authService: Auth,
    public router: Router,
  ) {}

  public ngOnInit(): void {
    this.initForm();
  }

  public initForm() {
    this.loginForm = this.fb.group({
      userName: ['admin'],
      passWord: ['admin@123'],
    });

    this.userName = this.loginForm.get('userName') as FormControl;
    this.passWord = this.loginForm.get('passWord') as FormControl;
  }

  public isLogin() {    
    const { userName, passWord } = this.loginForm.value;

    if (this.authService.login(userName!, passWord!)) {
      this.router.navigate(['/secure']);
    } else {
      alert('Invalid credentials. Try admin / admin123');
    }
  }

  
}
