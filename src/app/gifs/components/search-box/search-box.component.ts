import {Component, ElementRef, ViewChild} from '@angular/core';
import {GifsService} from "../../services/gifs.service";

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {
  }

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;

    // envio el newTag
    this.gifsService.searchTags(newTag);

    // para que se limpie la caja de texto
    this.tagInput.nativeElement.value = '';

    console.log(newTag);
  }
}
