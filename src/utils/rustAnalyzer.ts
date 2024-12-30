import * as vscode from 'vscode';

export function activateRustAnalyzer() {
    const rustAnalyzer = vscode.extensions.getExtension('rust-lang.rust-analyzer');
    if (rustAnalyzer) {
        rustAnalyzer.activate();
    }
}
