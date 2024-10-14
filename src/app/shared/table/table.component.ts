import { SelectionModel } from '@angular/cdk/collections';
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SharedModule } from "../shared.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { Customers } from 'src/app/store/Reducers/customer.reducer';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  standalone: true,
  imports: [MatTableModule, MatCheckboxModule, MatPseudoCheckboxModule, SharedModule ,NgbModule , CommonModule , RouterModule],
})

export class TableComponent {

  @Input() ELEMENT_DATA: Customers[] = [];
  @Input()  displayedColumn: string[] = [];
  @Input()  Router!:string;
  @Input()  TFE!:string;
  @Output()  Delete = new EventEmitter<string>;
  displayedColumns: string[] = []  ;
  deleteId!:string ;
  dataSource:any
  selection:any

  constructor(){}

  ngOnChanges(changes:SimpleChanges){
    if(!changes['ELEMENT_DATA'].firstChange 
      && changes['ELEMENT_DATA'].currentValue  ){
        this.dataSource = new MatTableDataSource<Customers>(this.ELEMENT_DATA);
        this.selection = new SelectionModel<Customers>(true, []);
        this.displayedColumns = ['select', ...this.displayedColumn , 'Action']
        console.log(this.displayedColumns);
        console.log(this.displayedColumn);
    }
  }
  deleteEl(id:string){
    this.deleteId = id
  }

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
      console.log(this.selection.selected);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Customers): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }
}
