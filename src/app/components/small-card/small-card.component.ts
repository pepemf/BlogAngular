import { Component, Input, OnInit} from '@angular/core';
import { dataFake } from '../../Data/dataFake';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css', 'small-card.responsive.component.css'],
})
export class SmallCardComponent implements OnInit {
  @Input()
  public photoCover: string = 'https://placehold.co/300x200';
  @Input()
  public title: string = 'Title Placeholder';
  @Input()
  public id: string = '0';

  constructor() {}

  ngOnInit(): void {
    this.setValuesToContent(this.id);
  }

  setValuesToContent(id: string | null): void {
    const data = dataFake.filter((item) => item.id === id)[0];

    this.photoCover = data.photo;
    this.title = data.title;
  }
}
