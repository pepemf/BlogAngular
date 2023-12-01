import { Component, OnInit, Input} from '@angular/core';
import { dataFake } from '../../Data/dataFake';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css', 'big-card.responsive.component.css'],
})
export class BigCardComponent implements OnInit {
  @Input()
  public photoCover: string = 'https://placehold.co/600x400';
  @Input()
  public title: string = 'Title Placeholder';
  @Input()
  public description: string =
    'Description placeholder. Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  @Input()
  public id: string | null = '0';

  constructor() {}

  ngOnInit(): void {
    this.setValuesToContent(this.id);
  }

  setValuesToContent(id: string | null): void {
    const data = dataFake.filter((item) => item.id === id)[0];

    this.photoCover = data.photo;
    this.title = data.title;
    this.description = data.description.substring(0, 120) + '...';
  }
}
