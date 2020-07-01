import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'q';

@Injectable({
  providedIn: 'root'
})
export class GetStockService {

  constructor(private http: HttpClient) { }

  private webUrl: string = 'http://mis.twse.com.tw/stock/api/getStockInfo.jsp';

  // 取得股票api
  public getStockByDateAndStockId(pStockDate: string, pStockId: string): Observable<any> {
    /** 測試網站 */
    //const url = 'https://data.ntpc.gov.tw/api/datasets/4A03827A-588B-4058-AB21-EC02283E2BB7/json?page=0&size=100';
    //let url = 'http://mis.twse.com.tw/stock/api/getStockInfo.jsp?ex_ch=tse_1101.tw&d=20200528';

    let url = this.webUrl + "?ex_ch=";

    if (pStockId != '') {
      let tStockArray = pStockId.split("&");

      for (var i = 0; i < tStockArray.length; i++) {
        url = url + this.returnStockParameter(tStockArray[i]);
        if ((i + 1) < tStockArray.length) {
          url = url + "|";
        }
      }
    }

    url = url + "&d=" + pStockDate;
    return this.http.get<any>(url);
  }

  // 將代號加入前後置號
  public returnStockParameter(pStockId: string): string {
    if (pStockId != "") {
      pStockId = "tse_" + pStockId + ".tw";
    }
    return pStockId;
  }
}
