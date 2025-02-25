#[tauri::command]
fn greet(name: String) -> String {
  return "Hello ".to_owned() + &name + " from rust";
}

#[tauri::command]
fn my_custom_command() -> String {
  "Hello from Rust!".into()
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![greet, my_custom_command])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
