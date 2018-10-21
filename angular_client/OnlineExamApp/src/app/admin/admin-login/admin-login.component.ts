import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  admin: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private zone: NgZone) { }

  ngOnInit(): void {
    this.admin = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      rememberme: true
    });
  }
  logInAdmin() {
    console.log("you will log in one day dont give up " + this.admin.value.email);
    console.log("you will log in one day dont give up " + this.admin.value.password);
    console.log("you will log in one day dont give up " + this.admin.value.rememberme);
    this.zone.run(() => this.router.navigate(['admin/home']));
    // this.router.navigate(['admin/home']);
  }

  login() {
    this.router.navigateByUrl('/admin/home');

  }
}