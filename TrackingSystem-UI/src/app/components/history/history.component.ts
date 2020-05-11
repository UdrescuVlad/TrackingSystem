import { Component, OnInit } from '@angular/core';
import {HistoryService} from '../../services/history/history.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  public customerHistory;
  constructor(private historyService: HistoryService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getHistory(this.route.snapshot.params.name);
  }
  getHistory(name: string){
    this.historyService.getHistoryCustomer(name).subscribe(
      history => {
        this.customerHistory = history;
      },
      error => console.log('We did not find any history'),
      () => console.log('')
    );
  }

}
