import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../Data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css', './content.responsive.component.css'],
})
export class ContentComponent implements OnInit {
  @Input()
  public content__cover: string = '';
  @Input()
  public content__title: string = '';
  @Input()
  public content__description: string = '';
  private id: string | null = "0";


  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>
      this.id = params.get("id")
    );
    this.setValuesToContent(this.id);
  }

  setValuesToContent(id: string | null): void {
    const data = dataFake.filter((item) => item.id === id)[0];

    this.content__cover = data.photo;
    this.content__title = data.title;
    this.content__description = data.description;
  }
}
