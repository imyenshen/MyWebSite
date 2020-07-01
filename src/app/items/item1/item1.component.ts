import { Component, OnInit } from '@angular/core';
import { GetStockService } from 'src/app/website/service/get-stock.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-item1',
  templateUrl: './item1.component.html',
  styleUrls: ['./item1.component.css']
})
export class Item1Component implements OnInit {

  _stockId = '';
  _stockDate = '';

  public msgArray: Array<any> = new Array<any>();

  // 標題
  titles = [
    '',
    '股票代號',
    '公司簡稱',
    '當盤成交量',
    '累積成交量',
    '開盤價',
    '最高價',
    '最低價',
    '收盤價',
    '昨收價',
    '漲幅'
  ];

  constructor(private getStockService: GetStockService) { }

  ngOnInit() {
    const date = new Date();
    const result = formatDate(date, 'yyyyMMdd', 'zh-tw');
    this.getStockByDateAndStockId(result,"2353");
  }

  doSearch(): void {
    var result = this._stockDate;
    if (result == '' || result == null) {
      const date = new Date();
      result = formatDate(date, 'yyyyMMdd', 'zh-tw');
    } else {
      var result = formatDate(new Date(this._stockDate), 'yyyyMMdd', 'zh-tw');
    }

    this.getStockByDateAndStockId(result,this._stockId);
  }

  getStockByDateAndStockId (pDate:string,pStockId:string){
    this.getStockService.getStockByDateAndStockId(pDate,pStockId).subscribe(
      (response: any) => {
        const tStockData:Array<any> = response.msgArray;

        // 計算漲幅
        tStockData.forEach((data, index)=>{
          var nowPrice = data.z; // 收盤價
          var yesterdayPrice = data.y; // 昨收價
          var tUpAndDown = (nowPrice - yesterdayPrice) / yesterdayPrice * 100;
          data['upAndDown'] = tUpAndDown;
        });
        this.msgArray = tStockData;
      }
    );
  }
}
