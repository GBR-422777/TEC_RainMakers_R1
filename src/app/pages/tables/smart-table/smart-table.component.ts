import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss'],
})
export class SmartTableComponent {
  apiURL = 'http://localhost:3000';
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    ),
  };
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      /*_id: {
        title: 'ID',
        type: 'string',
      },*/
      name: {
        title: 'Full Name',
        type: 'string',
      },
      major: {
        title: 'Major',
        type: 'string',
      },
      age: {
        title: 'Age',
        type: 'number',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private http: HttpClient) {
    this.getData().then(response => {
      this.source.load(response['result']);
    });
  }

  async getData() {
    return await this.http
      .get<[]>(this.apiURL + '/rainmakers').toPromise();
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.deleteRainmaker(event.data._id).then(result => {
      });
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  async deleteRainmaker(id) {
    return this.http.delete<[]>(this.apiURL + '/rainmaker?id=' + id).toPromise();
  }
  onCreateConfirm(event) {
    const data = event.newData;
    const body = {
      name: data.name,
      major: data.major,
      age: data.age,
    };
    this.http.post<[]>(this.apiURL + '/rainmaker', body).toPromise();
    event.confirm.resolve();
  }
  onUpdateConfirm(event) {
    console.log(event);
    const data = event.newData;
    this.updateRainmaker(data._id, data.name, data.major, data.age).then(result => {
      event.confirm.resolve();
    });
  }
  async updateRainmaker(id, name, major, age) {
    const body = {
      id: id,
      name: name,
      major: major,
      age: age,
    };
    return this.http.put<[]>(this.apiURL + '/rainmaker', body).toPromise();
  }
}
