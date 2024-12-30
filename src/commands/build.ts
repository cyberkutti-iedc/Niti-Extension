import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs'; 
import * as child_process from 'child_process';

export async function buildProject() {
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
        const terminal = vscode.window.createTerminal('Niti Building Project');
        terminal.sendText('cargo build');
        terminal.show();
        vscode.window.showInformationMessage("Niti Building ❤!");
    } catch (error) {
        vscode.window.showErrorMessage(`Build failed: ${error}`);
    }
}
