#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use tauri::{CustomMenuItem, Submenu, SystemTray, SystemTrayMenu, SystemTrayMenuItem};
use tauri::{Manager, WindowBuilder};
use tauri::{Menu, MenuItem};

#[tauri::command]
async fn close_splashscreen(window: tauri::Window) {
    // Close splashscreen
    if let Some(splashscreen) = window.get_window("splashscreen") {
        splashscreen.close().unwrap();
    }
    // Show main window
    window.get_window("main").unwrap().show().unwrap();
}

fn main() {
    // let tray_menu = vec!<CustomMenuItem>[CustomMenuItem::new("quit".to_string(), "Quit")];
    let quit = CustomMenuItem::new("quit".to_string(), "Quit");
    let hide = CustomMenuItem::new("hide".to_string(), "Hide");
    let close = CustomMenuItem::new("close".to_string(), "Close");
    let tray_menu = SystemTrayMenu::new()
        .add_item(quit)
        .add_native_item(SystemTrayMenuItem::Separator)
        .add_item(hide);
    let system_tray = SystemTray::new().with_menu(tray_menu);
    let quit = CustomMenuItem::new("quit".to_string(), "Quit");
    let submenu = Submenu::new("File", Menu::new().add_item(quit).add_item(close));
    let menu = Menu::new()
        .add_native_item(MenuItem::Copy)
        .add_item(CustomMenuItem::new("hide", "Hide"))
        .add_submenu(submenu);

    tauri::Builder::default()
        .system_tray(system_tray)
        .menu(menu)
        .invoke_handler(tauri::generate_handler![close_splashscreen])
        // .setup(|app| {
        //     let window = WindowBuilder::new(
        //         app,
        //         "window".to_string(),
        //         tauri::WindowUrl::App("index.html".into()),
        //     )
        //     .menu(menu)
        //     .build()?;
        //     let window_ = window.clone();
        //     window.on_menu_event(move |event| match event.menu_item_id() {
        //         "quit" => {
        //             std::process::exit(0);
        //         }
        //         "close" => {
        //             window_.close().unwrap();
        //         }
        //         _ => {}
        //     });
        //     Ok(())
        // })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
