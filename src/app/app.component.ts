import { Component } from '@angular/core';
import { SystemLoaderComponent } from './shared/system-loader/system-loader.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Spike Angular Admin Tempplate';
  public systemLoaderComponent = SystemLoaderComponent;
}
