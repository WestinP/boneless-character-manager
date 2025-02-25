import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RustService } from './services/rust.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'boneless-character-manager';

  constructor(public rustService: RustService){}

  public greet(): void {
    this.rustService.customFunc();
    let name = 'Westin';
    this.rustService.greetCharacter(name).then( res => {
      this.title = res;
    })
  }
}
