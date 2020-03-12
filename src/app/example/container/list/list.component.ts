import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/core/services/log.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(
    private logService: LogService
  ) { }

  ngOnInit() {
  }

}
