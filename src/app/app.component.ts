import { Component } from '@angular/core';
import { AppLitterals } from './../providers/interface/app.litterals';
import { ITable } from '../providers/interface/table.interface';
import { DBService } from './../providers/service/db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource: Array<ITable> = AppLitterals.ELEMENT_DATA;

  constructor(private dbService: DBService) {

  }

  addUser(event: any) {
    this.dbService.getApiCall().subscribe(
      data=> {
        console.log(data);
      },
      error=> {
        console.log(error);
      }
    );
  }
}