import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})

export class HeaderComponent {
  collapsed = true;
}

// import and put your selector in the app.component