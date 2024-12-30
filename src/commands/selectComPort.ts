import * as vscode from 'vscode';
import { SerialPort } from 'serialport'; // Correct import for SerialPort

export async function selectComPort() {
    const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
    if (!workspaceFolder) {
        vscode.window.showErrorMessage("No workspace folder found.");
        return;
    }

    try {
        // List available serial ports (COM ports) using the updated API
        const ports = await SerialPort.list(); // This returns a promise

        // Filter the list to only include COM ports
        const comPorts = ports.filter(port => port.path.toLowerCase().startsWith('com'));

        if (comPorts.length === 0) {
            vscode.window.showErrorMessage("No COM ports found.");
            return;
        }

        // Extract port names from the list
        const portNames = comPorts.map(port => port.path);

        // Allow the user to select a port
        vscode.window.showQuickPick(portNames, {
            placeHolder: 'Select a COM port',
        }).then(selectedPort => {
            if (selectedPort) {
                vscode.window.showInformationMessage(`Niti Selected COM Port: ${selectedPort}`);
                // Perform further operations like flashing firmware with the selected port
            } else {
                vscode.window.showErrorMessage("No COM port selected.");
            }
        });
    } catch (error) {
        vscode.window.showErrorMessage(`Failed to list COM ports: ${error}`);
    }
}
