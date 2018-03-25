import { Component } from '@angular/core';
import { AppLitterals } from './../providers/interface/app.litterals';
import { ITable } from '../providers/interface/table.interface';
import { DBService } from './../providers/service/db.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedColumns = ['id', 'name', 'weight'];
  //dataSource: Array<ITable> = AppLitterals.ELEMENT_DATA;
  dataSource: Array<ITable> = []; 
  userForm: FormGroup;

  constructor(private dbService: DBService, formBuilder: FormBuilder, public snackBar: MatSnackBar) {
    this.userForm = formBuilder.group({
      'name': [null, Validators.required],
      'weight': new FormControl(null, Validators.required)
    })

    this.getUsers();

  }

  addUser(event: any) {
    let params = {
      id: this.dataSource.length+1,
      name: this.userForm.controls['name'].value,
      weight: this.userForm.controls['weight'].value
    }
    this.dbService.postApiCall(params, 'add').subscribe(
      data=> {
        this.userForm.reset();
        this.openSnackBar('Adding user is done', 'Nothing');
        this.getUsers();
      },
      error=> {
        console.log(error);
      }
    );
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  getUsers() {
    this.dbService.getApiCall('getuser').subscribe(
      data=> {
        this.dataSource = data.data || [];
      },
      error=> {
        console.log(error);
      }
    );
  }

  deleteUser() {
    let id = this.dataSource[0].id;
    if (id > 0) {
      this.dbService.deleteApiCall('deleteuser', id).subscribe(
        data => {
          this.getUsers();
        },
        error => {
          console.log(error);
        }
      );
    } else {
      this.openSnackBar("There is no user to delete", "No Action Required!");
    }
  }

  updateUser() {
    let params = {
      id: this.dataSource[0].id,
      name: this.userForm.controls['name'].value,
      weight: this.userForm.controls['weight'].value
    }
    if (params.id > 0) {
      this.dbService.postApiCall(params, 'updateuser').subscribe(
        data => {
          this.getUsers();
        },
        error => {
          console.log(error);
        }
      );
    } else {
      this.openSnackBar("There is no user to update", "No Action Required!");
    }
  }
}