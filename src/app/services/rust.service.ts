import { Injectable } from '@angular/core';
import { invoke } from '@tauri-apps/api/core';


@Injectable({
  providedIn: 'root'
})
export class RustService {

  constructor() { }

  public async greetCharacter(name: string): Promise<string> {
    let val: string = '';
    await invoke<string>("greet", { name }).then((text) => {
      val = text;
    });
    return val;
  }

  public customFunc(): void {
    invoke('my_custom_command').then((msg) => console.log(msg));
  }
}
