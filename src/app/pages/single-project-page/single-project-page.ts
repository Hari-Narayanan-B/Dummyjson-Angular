import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Api } from '../../api';

@Component({
  selector: 'app-single-project-page',
  imports: [],
  templateUrl: './single-project-page.html',
  styleUrl: './single-project-page.css'
})
export class SingleProjectPage {
  constructor(private api: Api,private route: ActivatedRoute){}
  product: any;
  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.api.getProduct(id).then(product => this.product = product);
  } 

}
