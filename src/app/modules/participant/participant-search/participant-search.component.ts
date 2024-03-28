import { Component, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ELEMENT_DATA, ParticipantResponse } from '../model/paticipant';

@Component({
  selector: 'app-participant-search',
  templateUrl: './participant-search.component.html'
})
export class ParticipantSearchComponent implements AfterViewInit {

  displayedColumns: string[] = ['code', 'name', 'cpfCnpj', 'phoneNumber'];
  dataSource = new MatTableDataSource<ParticipantResponse>(ELEMENT_DATA);

  ngAfterViewInit() {
  }

  changePage(pageInfo: any) {}

 /*    this.query.page = pageInfo.page - 1;
    this.search();
  }

  changePageSize(sizeInfo) {
    this.query.page = 0;
    this.query.size = sizeInfo.value;
    this.search();
  }

  changeSort(sortInfo) {

    this.query.sort = [`${sortInfo.column.name},${sortInfo.newValue}`]
    this.search();
  } */

  search() { }
}

