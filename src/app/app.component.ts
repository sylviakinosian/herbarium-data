import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  speciesForm: FormGroup;
  post: any;
  flora: string= '';
  family: string= '';
  titleAlert:string = 'This field is required';
  genus: string= '';
  species: string= '';
  country: string= '';
  state: string= '';
  locality: string= '';
  coord: string= '';
  elevation: string='';
  collector: string= '';
  colNumber: string= '';
  date: string= '';

  constructor(private fb: FormBuilder) {

	this.speciesForm = fb.group({
	  'flora' : [null, Validators.required],
	  'family' : [null, Validators.required],
	  'genus' : [null],
	  'species' : [null],
	  'country' : [null],
	  'state' : [null],
	  'locality' : [null],
	  'coord' : [null],
	  'elevation' : [null],
	  'collector' : [null],
	  'colNumber' : [null],
	  'date' : [null]
	})
  }
  
  addPost(post) {
    this.flora = post.flora;
    this.family = post.family;
    this.genus = post.genus;
    this.species = post.species;
    this.country = post.country;
    this.state = post.state;
    this.locality = post.locality;
    this.coord = post.coord;
    this.elevation = post.elevation;
    this.collector = post.collector;
    this.colNumber = post.colNumber;
    this.date = post.date;
  } 
 
}
