import * as vscode from 'vscode';
import * as childProcess from 'child_process';

export function checkHexSize() {
    childProcess.exec('cargo size --target hex', (error, stdout, stderr) => {
        if (error) {
            vscode.window.showErrorMessage(`Error: ${stderr}`);
            return;
        }
        vscode.window.showInformationMessage(`Hex Size: ${stdout}`);
    });
}
