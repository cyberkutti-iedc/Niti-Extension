import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs'; 
import * as child_process from 'child_process';

export async function flashFirmware() {
    const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
    if (!workspaceFolder) {
        vscode.window.showErrorMessage("No workspace folder found.");
        return;
    }

    const cargoTomlPath = path.join(workspaceFolder.uri.fsPath, 'Cargo.toml');
    if (!fs.existsSync(cargoTomlPath)) {
        vscode.window.showErrorMessage("Cargo.toml not found in the current project folder.");
        return;
    }

    try {
        const terminal = vscode.window.createTerminal('Niti Flashing');
        terminal.sendText('cargo run');
        terminal.show();
        vscode.window.showInformationMessage("Niti Flashing 😍!");
    } catch (error) {
        vscode.window.showErrorMessage(`Flash failed: ${error}`);
    }
}
