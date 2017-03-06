import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'signup-form',
  template: `
    <form (ngSubmit)="onSubmit(form)" novalidate #form="ngForm">
      <div class="form-group">
        <label>Email
          <input type="email" class="form-control" #emailField="ngModel"
            name="email"
            [(ngModel)]="email"
            required
            pattern=".+@.+"
          >
          <p *ngIf="emailField.touched && emailField.invalid"
            class="alert alert-danger">Please enter a valid email</p>
        </label>
      </div>

      <div class="form-group">
        <label>Password
          <input type="password" class="form-control" #passwordField="ngModel"
            name="password"
            [(ngModel)]="password"
            required
          >
          <p *ngIf="passwordField.touched && passwordField.invalid"
            class="alert alert-danger">Please enter a password</p>
        </label>
      </div>

      <button type="submit" class="btn btn-primary"
      [disabled]="form.invalid">Sign Up</button>
    </form>
  `,
  styles: [`
    input.ng-dirty.ng-invalid { border: 2px solid red; }
    input.ng-dirty.ng-valid { border: 2px solid green; }
  `]
})
export class SignupFormComponent {
  email = '';
  password = '';

  onSubmit(form: NgForm) {
    console.log('should submit: ', this.email);
    form.resetForm();
  }
}
