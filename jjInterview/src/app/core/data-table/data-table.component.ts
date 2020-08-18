import { Component, OnInit } from '@angular/core';

export interface HospitalFunds {
  id: number;
  customerId: number;
  customerName: string;
  discountPercentage: number;
  marketShare: number;
}

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  displayedColumns: string[] = [
    'customerId',
    'customerName',
    'discountPercentage',
    'marketShare'
  ];

  hospitalClients: HospitalFunds[] = [
   { id: 1, customerId: 998816, customerName: "US General Hospital", discountPercentage: 0.42, marketShare: 1000000},
   { id: 2, customerId: 998844, customerName: "US State Hospital", discountPercentage: 0.33, marketShare: 800000},
   { id: 3, customerId: 998823, customerName: "US County Hospital", discountPercentage: 0.28, marketShare: 540000},
  ];

  constructor() { }

  ngOnInit(): void {
  }

    /** Gets the total cost of all transactions. */
    getTotalDiscount() {
      return this.hospitalClients.map(t => t.discountPercentage).reduce((acc, value, index, array) => {
        acc += value;
        if( index === array.length-1) {
          return acc/array.length;
        }else {
          return acc;
        }
      });
    }

}
