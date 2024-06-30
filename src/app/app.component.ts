import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
  <main>
    <header class='brand-name'>
      <div class="brand-logo">
        <a href="/">
          <img class="brand-logo" src="/assets/charicticon_logo/logo_main_compressed.png" alt="logo" aria-hidden="true">
        </a>
      </div>
      <div class="navigation-links">
        <div class="donate"><a href="https://send.monobank.ua/jar/5GDiCGtwBs" class="jar">Quick Donate</a></div>
        <div class="contact-us">
          <a href="#">Contact Us</a>
        </div>
        <div class="my-account">
          <a href="#">My Account</a>
        </div>
        <div class="language-component">
          <a class="language-dropdown" href="#">Language: EN (tbd)</a>
        </div>
      </div>
    </header>
  </main>
  <section class="content">
    <router-outlet></router-outlet>
  </section>
  <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent, FooterComponent, RouterModule],
})
export class AppComponent {
  title = 'Chariction';
}