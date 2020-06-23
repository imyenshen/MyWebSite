import { Component, OnInit } from '@angular/core';
import { GetStockService } from 'src/app/website/service/get-stock.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-item1',
  templateUrl: './item1.component.html',
  styleUrls: ['./item1.component.css']
})
export class Item1Component implements OnInit {
  // public item: Array<any> = new Array<any>();

  _stockId = '';
  _stockDate = '';

  public item: any;
  public msgArray: Array<any> = new Array<any>();

  // 標題
  titles = [
    '',
    '股票代號',
    '公司簡稱',
    '當盤成交價',
    '當盤成交量',
    '累積成交量',
    '開盤價',
    '最高價',
    '最低價'
  ];

  constructor(private getStockService: GetStockService) { }

  ngOnInit() {
    const date = new Date();
    const result = formatDate(date, 'yyyyMMdd', 'zh-tw');
    this.getStockService.getStockByDateAndStockId(result, "2317").subscribe(
      (response: any) => {
        this.item = response;
        this.msgArray = response.msgArray;
      }
    );
  }

  doSearch(): void {
    var result = this._stockDate;
    if (result == '' || result == null) {
      const date = new Date();
      result = formatDate(date, 'yyyyMMdd', 'zh-tw');
    } else {
      var result = formatDate(new Date(this._stockDate), 'yyyyMMdd', 'zh-tw');
    }

    this.getStockService.getStockByDateAndStockId(result, this._stockId).subscribe(
      (response: any) => {
        this.item = response;
        this.msgArray = response.msgArray;
      }
    );
  }
}
