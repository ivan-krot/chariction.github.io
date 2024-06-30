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
  <footer>
    <div class="footer-content">
      <div class="footer-section">
        <h3 class="footer-heading">More information</h3>
        <div class="footer-content">
          <ul class="footer-list">
            <li>
              <a href="">Link 1</a>
            </li>
            <li>
              <a href="">Link 2</a>
            </li>
            <li>
              <a href="">Link 3</a>
            </li>
            <li>
              <a href="">Link 4</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-section">
        <h3 class="footer-heading">Terms of use</h3>
        <div class="footer-content">
          <ul class="footer-list">
            <li>
              <a href="">Terms of use 1</a>
            </li>
            <li>
              <a href="">Terms of use 2</a>
            </li>
            <li>
              <a href="">Terms of use 3</a>
            </li>
            <li>
              <a href="">Terms of use 4</a>
            </li>
            <li>
              <a href="">Terms of use 5</a>
            </li>
            <li>
              <a href="">Terms of use 6</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-section">
        <h3 class="footer-heading">Useful information</h3>
        <div class="footer-content">
          <ul class="footer-list">
            <li>
              <a href="">Collaboration</a>
            </li>
            <li>
              <a href="">Partners</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
          </ul>
        </div>
        
      </div>
      <div class="footer-section">
        <h3 class="footer-heading">Platform information</h3>
        <div class="footer-content">
          <ul class="footer-list">
            <li>
              <a href="">Team</a>
            </li>
            <li>
              <a href="">GitHub</a>
            </li>
            <li>
              <a href="">Linkedin</a>
            </li>
            <li>
              <a href="">Report an issue</a>
            </li>
            <li>
              <a href="">I have an idea!</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="copyright">
        <a href="">All rights reserved. Extablished in 2024</a>
      </div>
  </footer>
  `,
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent, RouterModule],
})
export class AppComponent {
  title = 'Chariction';
}