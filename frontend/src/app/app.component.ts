import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommentformComponent } from "./pages/commentform/commentform.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommentformComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
}
