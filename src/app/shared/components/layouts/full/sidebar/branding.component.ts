import { Component } from '@angular/core';

@Component({
  selector: 'app-branding',
  template: `
    <div class="branding">
      <a href="/" class="d-flex justify-content-center align-items-center" style="text-decoration: none;">
        <img
          src="./assets/images/logos/logo.png"
          class="align-middle m-2"
          alt="logo"
          width="100"
          height="100"
        />
        <span style="font-size: 20px; font-weight: bolder; letter-spcing: 0.2rem;">AI-MPERS</span>
      </a>

    </div>
  `,
  styleUrls: ['./branding.component.scss'],
})
export class BrandingComponent {
  constructor() {}
}
