import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-tool-bar',
  templateUrl: './header-tool-bar.component.html',
  styleUrls: ['./header-tool-bar.component.scss']
})
export class HeaderToolBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToHome() {
    this.router.navigate(['/']);
  }

  goToAddBand() {
    this.router.navigate(['/banda/nova']);
  }

}
