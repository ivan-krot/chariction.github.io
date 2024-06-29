import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
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
      <div class="donate"><a href="https://send.monobank.ua/jar/5GDiCGtwBs" class="jar">Quick Donate</a></div>
      <div>
        <a class="contact-us" href="#">Contact Us</a>
      </div>
    </header>
  </main>
  <section class="content">
    <router-outlet></router-outlet>
  </section>
  `,
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent, RouterModule],
})
export class AppComponent {
  title = 'Chariction';
}