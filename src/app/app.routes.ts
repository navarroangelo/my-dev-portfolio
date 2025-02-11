import { Routes } from '@angular/router';
import { HomeComponent } from "./portfolio/home/home.component";
import { AboutComponent } from "./portfolio/about/about.component";
import { ProjectsComponent } from "./portfolio/projects/projects.component";
import { ContactComponent } from "./portfolio/contact/contact.component";

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'projects', component: ProjectsComponent },
];

export const AppRoutes = routes;
