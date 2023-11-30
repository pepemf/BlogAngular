import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css',
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
  public id: string = "0";

  constructor() {}

  ngOnInit(): void {}
}
