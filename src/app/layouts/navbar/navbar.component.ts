import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Login } from 'src/app/auth/login.model';

import { LoginService } from 'src/app/auth/login.service';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
export interface DialogData {
  username: string;
  password: string;
}
@Component({
  selector: 'sign-in',
  templateUrl: 'sign-in-dialog.html',
})
export class SignInDialog {
  editForm = this.fb.group({
    username: [],
    password: []
    
  });

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  constructor(
    public dialogRef: MatDialogRef<SignInDialog>,
    private loginService : LoginService,
    
    private router : Router,
    protected fb: UntypedFormBuilder ,
    private tokenStorage: TokenStorageService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData 
    
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  doLogin() : void {
   
    this.loginService.login(new Login(this.editForm.get(['username'])!.value,this.editForm.get(['password'])!.value)).subscribe(
      (  data: { accessToken: string; }) => {
        this.dialogRef.close();
        this.router.navigate(['dashboard']);
      },
      (      err: any) => {
        this.errorMessage = 'Utilisateur ou mot de passe incorrect';
        this.isLoginFailed = true;
      }
    );
  }
}

@Component({
  selector: 'sign-up',
  templateUrl: 'sign-up-dialog.html',
})
export class SignUpDialog {
  constructor(
    public dialogRef: MatDialogRef<SignUpDialog>,
    
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
[x: string]: any;
 token = localStorage.getItem('token');
  login:  Login = new Login();
  constructor(
    public dialog: MatDialog,
    public loginSerive : LoginService
    
  ) {
   
  }

  ngOnInit(): void {
   
  }

  openSignInDialog(): void {
    const dialogRef = this.dialog.open(SignInDialog, {
      panelClass: 'sign-in-dialog',
      data : this.login 
     
    });

  
  }

  openSignUpDialog(): void {
    const dialogRef = this.dialog.open(SignUpDialog, {
    
      panelClass: 'sign-in-dialog',
    });

    dialogRef.afterClosed().subscribe(result => {
      
      
    });
  }

  
}
  

