import { Component } from '@angular/core';
import { ExampleService } from './core/example.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cache-data-with-angular';
  data: any;

  constructor(private exampleService: ExampleService) {}

  fetchData(): void {
    this.exampleService.gerRandomData().subscribe((response) => {
      this.data = response.data;
      this.data = 'some response';
    });
  }
}
