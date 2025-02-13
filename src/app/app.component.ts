import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { HomeComponent } from "./portfolio/home/home.component";
// import { AboutComponent } from "./portfolio/about/about.component";
// import { ProjectsComponent } from "./portfolio/projects/projects.component";
// import { ContactComponent } from "./portfolio/contact/contact.component";
// import { RouterModule } from '@angular/router';
// import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Marcel Angelo Navarro | Dev';
  
}
