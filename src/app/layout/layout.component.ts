import { Component, OnInit } from '@angular/core';
import { NummerService } from '../service/nummer/nummer.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(
    public nummerService: NummerService
  ) { }


  ngOnInit(): void {

  }

}
