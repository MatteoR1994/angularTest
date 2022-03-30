import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angularTest';

  user = { name: 'andrea', loginDate: new Date(), results: [100, 1002, 1] };

  user2?: any;

  userChanged: boolean = false;

  ngOnInit(): void {
    // SESSION STORAGE
    // window.sessionStorage.setItem('ciao', 'mondo');

    // LOCAL STORAGE
    // window.localStorage.setItem('pippo', 'pluto');
    // console.log(window.localStorage.getItem('pippo'));
    // window.localStorage.setItem('pippo', JSON.stringify(this.user));
    // // console.log(JSON.parse(window.localStorage.getItem('pippo')!));
    // if (window.localStorage.getItem('pippo') !== null) {
    //   this.user2 = JSON.parse(window.localStorage.getItem('pippo') as any);
    // }

    // // COOKIES
    // const key = 'name';
    // const value = 'simone';
    // const date = new Date();
    // date.setFullYear(date.getFullYear() + 1);

    // const cookie = key + '=' + value + ';expires=' + date.toUTCString() + ';path=/;SameSite=Lax';
    // document.cookie = cookie;

    // const cookie2 = 'pippo' + '=' + 'pluto' + ';expires=' + date.toUTCString() + ';path=/;SameSite=Lax';
    // document.cookie = cookie2;

    // console.log(document.cookie);
    
  }

  saveLocalData() {
    window.localStorage.setItem('local', JSON.stringify(this.user));
    this.userChanged = true;
  }

}
