import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-local-storage-data',
  templateUrl: './local-storage-data.component.html',
  styleUrls: ['./local-storage-data.component.scss']
})
export class LocalStorageDataComponent implements OnInit {

  user?: any;

  @Input() set userChanged(value: boolean) {
    if (value) {
      if (window.localStorage.getItem('local') !== null) {
        this.user = JSON.parse(window.localStorage.getItem('local') as any);
      }
    }
  }

  //@Input() userChanged: boolean = false;

  constructor() { }

  // ngOnChanges(changes: SimpleChanges): void {
  //   this.displayData();
  // }

  ngOnInit(): void {
  }

  // displayData() {
  //   if (this.userChanged) {
  //     if (window.localStorage.getItem('local') !== null) {
  //       this.user = JSON.parse(window.localStorage.getItem('local') as any);
  //     }
  //   }
  // }

}
