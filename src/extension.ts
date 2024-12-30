import * as vscode from 'vscode';
import { buildProject } from './commands/build';
import { flashFirmware } from './commands/flash';
import { selectComPort } from './commands/selectComPort';
import { showAboutPage } from './about'; // Import the about page function

export function activate(context: vscode.ExtensionContext) {
    console.log('Niti: Embedded Rust Framework is now active 🚀!');

    const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
    if (workspaceFolder) {
        vscode.window.showInformationMessage("Hi from Niti! Rust project detected, extension is started 😎!");
    }

    context.subscriptions.push(
        vscode.commands.registerCommand('extension.buildProject', buildProject),
        vscode.commands.registerCommand('extension.flashFirmware', flashFirmware),
        vscode.commands.registerCommand('extension.selectComPort', selectComPort),
        vscode.commands.registerCommand('extension.showAbout', showAboutPage) // Register the About command
    );

    const buildStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
    buildStatusBarItem.text = "$(tools) Build Project";
    buildStatusBarItem.command = 'extension.buildProject';
    buildStatusBarItem.tooltip = "Build the Rust project";
    buildStatusBarItem.show();
    context.subscriptions.push(buildStatusBarItem);

    const flashStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 99);
    flashStatusBarItem.text = "$(zap) Flash Firmware";
    flashStatusBarItem.command = 'extension.flashFirmware';
    flashStatusBarItem.tooltip = "Flash firmware to device";
    flashStatusBarItem.show();
    context.subscriptions.push(flashStatusBarItem);

    const comPortStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 97);
    comPortStatusBarItem.text = "$(plug) Select COM Port";
    comPortStatusBarItem.command = 'extension.selectComPort';
    comPortStatusBarItem.tooltip = "Select the COM port for flashing";
    comPortStatusBarItem.show();
    context.subscriptions.push(comPortStatusBarItem);

    // Optional: Add an About button to the status bar (if you want to trigger the About page this way)
    const aboutStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 96);
    aboutStatusBarItem.text = "$(info) About Niti";
    aboutStatusBarItem.command = 'extension.showAbout'; // Command to show About page
    aboutStatusBarItem.tooltip = "Show information about Niti extension";
    aboutStatusBarItem.show();
    context.subscriptions.push(aboutStatusBarItem);
}

export function deactivate() {
    console.log('Niti: Embedded Rust Framework is now deactivated 😢.');
}
