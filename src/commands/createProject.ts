import * as vscode from 'vscode';
import * as child_process from 'child_process';

export async function createProject() {
    try {
        // Run cargo generate with the template GitHub URL
        const command = 'cargo generate --git https://github.com/cyberkutti-iedc/niti-hal-template.git';

        vscode.window.withProgress(
            {
                location: vscode.ProgressLocation.Notification,
                title: 'Creating a new Niti project...',
                cancellable: false,
            },
            async (progress) => {
                progress.report({ message: 'Running cargo generate...' });

                try {
                    // Execute the command in the terminal
                    const terminal = vscode.window.createTerminal('Niti Project Generator');
                    terminal.sendText(command);
                    terminal.show();

                    vscode.window.showInformationMessage('Niti project creation started in the terminal. Follow the prompts there.');
                } catch (error) {
                    vscode.window.showErrorMessage(`Failed to run cargo generate: ${error}`);
                }
            }
        );
    } catch (error) {
        vscode.window.showErrorMessage(`An unexpected error occurred: ${error}`);
    }
}
