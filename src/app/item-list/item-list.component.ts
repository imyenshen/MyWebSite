import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  constructor(private http:HttpClient) { }

  private basicArray;
  ngOnInit(): void {
      /* 基本資料的清單 讀取json文件 */
      this.http.get("./assets/data/item-list.json").subscribe(data => {
          // console.log(data);
          this.basicArray = data;
      });
  }

  /* 基本資料的清單 */
  /*
  basicArray = [
    {
      url:"/item1",
      text: "項目A"
    },
    {
      url:"/item2",
      text: "項目B"
    }
  ];
  */
}
