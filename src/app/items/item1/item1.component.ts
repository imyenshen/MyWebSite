import { Component, OnInit } from '@angular/core';
import { GetStockService } from 'src/app/website/service/get-stock.service';

@Component({
  selector: 'app-item1',
  templateUrl: './item1.component.html',
  styleUrls: ['./item1.component.css']
})
export class Item1Component implements OnInit {
 // public item: Array<any> = new Array<any>();

  public item:any;
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

  constructor(private getStockService:GetStockService) { }

  ngOnInit() {
    this.getStockService.getStockByDateAndStockId("2317").subscribe(
      (response: any) => {
        this.item = response;
        this.msgArray = response.msgArray;
        console.log(this.item);
      }
    );
  }

  doSearch(): void {
    console.log("被按了~~~");
  }
}
