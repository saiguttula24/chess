import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxChessBoardService, NgxChessBoardView } from 'ngx-chess-board';

@Component({
  selector: 'app-offline-play',
  templateUrl: './offline-play.component.html',
  styleUrls: ['./offline-play.component.scss']
})
export class OfflinePlayComponent implements OnInit {

  @ViewChild('board', {static: false}) board!: NgxChessBoardView;
  
  constructor(
  ) { }

  ngOnInit(): void {
  }

}
