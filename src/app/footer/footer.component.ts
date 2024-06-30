import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
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
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

}
