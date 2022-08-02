import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-menu',
  templateUrl: './right-menu.component.html',
  styleUrls: ['./right-menu.component.scss']
})
export class RightMenuComponent implements OnInit {
  categories = JSON.parse(localStorage.getItem('categories')).slice(0,2);
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {

  }

}
