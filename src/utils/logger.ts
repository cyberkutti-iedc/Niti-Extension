import * as vscode from 'vscode';

export function logMessage(message: string) {
    const outputChannel = vscode.window.createOutputChannel('Embedded Rust');
    outputChannel.appendLine(message);
    outputChannel.show();
}
