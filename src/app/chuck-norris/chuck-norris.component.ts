import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChuckNorrisService } from '../services/chuck-norris.service';
import { ChuckNorrisJoke, ChuckNorrisJokes, ChuckNorrisCategory } from '../entities/entities';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-chuck-norris',
  templateUrl: './chuck-norris.component.html',
  styleUrls: ['./chuck-norris.component.css']
})
export class ChuckNorrisComponent implements OnInit, OnDestroy {

  // internal variables
  chuckNorrisJokes: ChuckNorrisJoke[] = [];
  chuckNorrisCategories: ChuckNorrisCategory[] = [];
  form: FormGroup;
  totalRecords: number;
  columns: Array<{ label: string, value: string }> = [];
  isLoading: boolean;

  // reference to subscriptions
  chuckNorrisServiceCategories$: Subscription;
  chuckNorrisServiceJokes$: Subscription;

  constructor(private readonly chuckNorrisService: ChuckNorrisService) { }

  ngOnInit() {
    this.initializeForm();
    this.initializeTable();
    this.loadData();
  }

  ngOnDestroy() {
    this.chuckNorrisServiceJokes$ && this.chuckNorrisServiceJokes$.unsubscribe();
    this.chuckNorrisServiceCategories$ && this.chuckNorrisServiceCategories$.unsubscribe();
  }

  initializeForm() {
    this.form = new FormGroup({
      category: new FormControl(null, [Validators.required]),
      query: new FormControl(null, [Validators.required]),
    });
  }

  initializeTable() {
    this.columns = [
      { label: "Id", value: "id" },
      { label: "Joke", value: "value" },
      { label: "Url", value: "url" },
      { label: "Icon", value: "icon_url" },
      { label: "Created", value: "created_at" },
      { label: "Updated", value: "updated_at" }
    ];
  }

  loadData() {
    this.getCategories();
    this.getRandomJoke();
  }

  getCategories() {
    this.chuckNorrisServiceCategories$ = this.chuckNorrisService.getCategories().subscribe(categories => this.handleCategories(categories));
  }

  getRandomJoke() {
    this.chuckNorrisServiceJokes$ = this.chuckNorrisService.getRandomJoke().subscribe(joke => this.handleSimpleJokeResponse(joke));
  }

  getRandomJokeByCategory() {
    this.chuckNorrisServiceJokes$ = this.chuckNorrisService.getRandomJokeByCategory(this.form.controls.category.value).subscribe(joke => this.handleSimpleJokeResponse(joke));
  }

  getJokesByQuery() {
    this.isLoading = true;
    this.chuckNorrisServiceJokes$ = this.chuckNorrisService.getJokesByQuery(this.form.controls.query.value).subscribe(jokes => this.handleJokesResponse(jokes));
  }

  private handleSimpleJokeResponse(joke: ChuckNorrisJoke) {
    this.chuckNorrisJokes.length = 0;
    this.totalRecords = 1;
    this.chuckNorrisJokes.push(joke);
  }

  private handleJokesResponse(jokes: ChuckNorrisJokes) {
    this.chuckNorrisJokes.length = 0;
    this.totalRecords = jokes.total;
    this.chuckNorrisJokes = jokes.result;
    this.isLoading = false;
  }

  private handleCategories(categories: string[]) {
    categories.forEach(element => this.chuckNorrisCategories.push({ label: element, value: element }));
  }
}
