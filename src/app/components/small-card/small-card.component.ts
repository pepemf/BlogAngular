import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent implements OnInit {
  @Input()
  public photoCover: string = 'https://placehold.co/300x200';
  @Input()
  public title: string = 'Title Placeholder';

  constructor() {}

  ngOnInit(): void {}

}
