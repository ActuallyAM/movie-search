import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.sass' ]
})
export class HomeComponent implements OnInit {
	movies: any[] = [];
	searchFormControl = new FormControl();
	value: any;
	msg = '';
	isDone = true;

	constructor(private router: Router, private appService: AppService) {}

	ngOnInit() {
		this.searchFormControl.valueChanges.pipe(debounceTime(400)).subscribe((newValue) => {
			this.isDone = false;
			this.value = newValue;

			this.refresh();
		});
		localStorage.setItem('key', 'hello you');
	}

	refresh() {
		this.appService.getMovies(this.value).subscribe((data) => {
			if (data.Response !== 'False') {
				const items = [];
				for (const key in data) {
					if (data.hasOwnProperty(key)) {
						items.push(data[key]);
					}
				}
				this.movies = items[0];
			} else {
				this.movies.length = null;
			}
		});
	}

	gotoDetails(data) {
		this.router.navigate([ '/details', data.imdbID ]);
	}
}
