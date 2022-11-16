#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

#[tauri::command]
fn hello_world(message: &str) -> &str {
    println!("{:?} on tauri app", message);
    message
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![hello_world])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
