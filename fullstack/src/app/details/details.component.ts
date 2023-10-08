import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsService } from '../services/details.service';
import { IRest} from '../model/rest.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: Number = 0;
  details: IRest[] = []
  name: String|null = '';
  mealId: string|null = sessionStorage.getItem('mealId')

  constructor(private route:ActivatedRoute,
              private detailsService:DetailsService) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.queryParamMap.get('restId'));
    this.name = this.route.snapshot.queryParamMap.get('name');
    console.log(this.id +" "+ this.name)
    this.detailsService.getDetails(this.id)
      .subscribe((data:IRest[]) => this.details = data)
  }

}
