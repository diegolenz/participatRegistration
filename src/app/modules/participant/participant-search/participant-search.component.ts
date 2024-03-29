import { Component, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ParticipantResponse } from '../model/paticipant';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-participant-search',
  templateUrl: './participant-search.component.html'
})
export class ParticipantSearchComponent implements AfterViewInit {

  displayedColumns: string[] = ['select','code', 'name', 'cpfCnpj', 'phoneNumber'];
  dataSource = new MatTableDataSource<ParticipantResponse>(participants);

  selection = new SelectionModel<ParticipantResponse>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
 /*  checkboxLabel(row?: ParticipantResponse): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  } */

  constructor(
    private route: ActivatedRoute,
    private router: Router) {
  }


  ngAfterViewInit() {
  }

  goToManager(code?: number) {
    if (code) {
      return this.router.navigate([ 'participant', 'manager', code]);
    }

    return this.router.navigate([ 'participant', 'manager']);
  }

  changePage(event: Event) {
    console.log(event);
  }

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

export const participants: ParticipantResponse[] = [
  { code: 1, name: 'Hydrogen', cpfCnpj: 1.0079, status: true },
  { code: 2, name: 'Helium', cpfCnpj: 4.0026, status: false },
  { code: 3, name: 'Lithium', cpfCnpj: 6.941, status: false },
  { code: 4, name: 'Beryllium', cpfCnpj: 9.0122, status: true },
  { code: 5, name: 'Boron', cpfCnpj: 10.811, status: true },
  { code: 6, name: 'Carbon', cpfCnpj: 12.0107, status: true },
  { code: 7, name: 'Nitrogen', cpfCnpj: 14.0067, status: true },
  { code: 8, name: 'Oxygen', cpfCnpj: 15.9994, status: true },
  { code: 9, name: 'Fluorine', cpfCnpj: 18.9984, status: true },
  { code: 10, name: 'Neon', cpfCnpj: 20.1797, status: true },
  { code: 11, name: 'Sodium', cpfCnpj: 22.9897, status: true },
  { code: 12, name: 'Magnesium', cpfCnpj: 24.305, status: true },
  { code: 13, name: 'Aluminum', cpfCnpj: 26.9815, status: true },
  { code: 14, name: 'Silicon', cpfCnpj: 28.0855, status: true},
  { code: 15, name: 'Phosphorus', cpfCnpj: 30.9738, status: true},
  { code: 16, name: 'Sulfur', cpfCnpj: 32.065, status: true },
  { code: 17, name: 'Chlorine', cpfCnpj: 35.453, status: true },
  { code: 18, name: 'Argon', cpfCnpj: 39.948, status: true },
  { code: 19, name: 'Potassium', cpfCnpj: 39.0983, status: true },
  { code: 20, name: 'Calcium', cpfCnpj: 40.078, status: true },
];