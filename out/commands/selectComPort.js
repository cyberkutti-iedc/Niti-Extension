"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectComPort = selectComPort;
const vscode = __importStar(require("vscode"));
const serialport_1 = require("serialport"); // Correct import for SerialPort
async function selectComPort() {
    const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
    if (!workspaceFolder) {
        vscode.window.showErrorMessage("No workspace folder found.");
        return;
    }
    try {
        // List available serial ports (COM ports) using the updated API
        const ports = await serialport_1.SerialPort.list(); // This returns a promise
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
            }
            else {
                vscode.window.showErrorMessage("No COM port selected.");
            }
        });
    }
    catch (error) {
        vscode.window.showErrorMessage(`Failed to list COM ports: ${error}`);
    }
}
//# sourceMappingURL=selectComPort.js.map