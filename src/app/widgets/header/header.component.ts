import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItems } from '../menu/menu-items';

@Component({
  selector: 'portfolio-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchactive: boolean = false;

  constructor(public menuItems: MenuItems, public router: Router) { }

  ngOnInit(): void {}

	searchActiveFunction(){

	}
   
	onClickOutside(event:Object) {

   }
	
	public removeCollapseInClass() {

  }  
}
