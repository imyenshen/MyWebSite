import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-stock-query',
  templateUrl: './stock-query.component.html',
  styleUrls: ['./stock-query.component.css']
})
export class StockQueryComponent implements OnInit {

  // 股票代號
  _stockId = "";
  _stockDate = [];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this._stockId = this.activatedRoute.snapshot.params["stockId"];
  }

  disabledDate = (current: Date): boolean => {
    return current > new Date();
  }

  doSearch(): void {
    var tArray = [];

    this._stockDate.forEach((data, index) => {
      const result = formatDate(data, 'yyyyMMdd', 'zh-tw');
      tArray.push(result);
    });

    console.log(tArray);

    console.log(this._stockDate);
  }
}
