import { Component } from '@angular/core';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CredentialsComponent } from './components/credentials/credentials.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { TechComponent } from './components/tech/tech.component';
@Component({
  selector: 'app-root',
  imports: [
    AboutComponent,
    ContactComponent,
    CredentialsComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    PortfolioComponent,
    TechComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Marcel Angelo Navarro | Dev';
}
