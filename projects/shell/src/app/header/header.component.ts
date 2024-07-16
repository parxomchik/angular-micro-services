import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {

  @Input() isMfe1 : any;
  @Input() isMfe2 : any;

  constructor(
    private router: Router
  ) {
  }

  navigateToHome(): void {
    // Navigate to the Home page
    this.router.navigate(['']);
  }
}
