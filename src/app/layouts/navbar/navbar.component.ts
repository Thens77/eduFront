import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'sign-in',
  templateUrl: 'sign-in-dialog.html',
})
export class SignInDialog {

 
  constructor(
    public dialogRef: MatDialogRef<SignInDialog>,
    
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
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
 
  constructor(
    public dialog: MatDialog
  ) {
   
  }

  ngOnInit(): void {
   
  }

  openSignInDialog(): void {
    const dialogRef = this.dialog.open(SignInDialog, {
      panelClass: 'sign-in-dialog',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

  openSignUpDialog(): void {
    const dialogRef = this.dialog.open(SignUpDialog, {
    
      panelClass: 'sign-in-dialog',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
}
  

