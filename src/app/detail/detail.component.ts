import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { AppService } from '../app.service';

@Component({
	selector: 'app-detail',
	templateUrl: './detail.component.html',
	styleUrls: [ './detail.component.sass' ]
})
export class DetailComponent implements OnInit {
	value: string;
	data: any;

	constructor(private route: ActivatedRoute, private appService: AppService, private router: Router) {}

	ngOnInit() {
		this.route.paramMap.subscribe((params: ParamMap) => {
			this.value = params.get('value');
			this.refresh();
		});
	}
	refresh() {
		this.appService.getDetails(this.value).subscribe((data) => {
			this.data = data;
		});
	}
	goToHome(data) {
		this.router.navigate([ '/' ]);
	}
}
