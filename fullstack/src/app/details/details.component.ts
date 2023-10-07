import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: Number = 0;
  name: String|null = ''

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.queryParamMap.get('restId'));
    this.name = this.route.snapshot.queryParamMap.get('name');
    console.log(this.id +" "+ this.name)
  }

}
