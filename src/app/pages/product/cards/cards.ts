import { Component, Input} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-cards',
  imports: [RouterLink],
  templateUrl: './cards.html',
  styleUrl: './cards.css'
})
export class Cards {

  @Input() card: any={
    title: '',
    description: '',
    images: '',
    price: '',
    id: ''
  };
}
