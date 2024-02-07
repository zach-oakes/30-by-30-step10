import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "./authentication.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'Flight Tracker';

    constructor(
        private router: Router,
        public authService: AuthenticationService) {
    }

    logout(): void {
        this.authService.setIsAuthenticated(false);
        sessionStorage.setItem('username', '');
        this.router.navigate(['/login'])
            .then(() => {
                location.reload();
            });
    }
}
