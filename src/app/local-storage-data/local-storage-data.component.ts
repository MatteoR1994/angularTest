import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
