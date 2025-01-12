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
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = __importStar(require("vscode"));
const build_1 = require("./commands/build");
const flash_1 = require("./commands/flash");
const selectComPort_1 = require("./commands/selectComPort");
const about_1 = require("./about");
const createProject_1 = require("./commands/createProject"); // Import the createProject function
function activate(context) {
    console.log('Niti: Embedded Rust Framework is now active 🚀!');
    const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
    if (workspaceFolder) {
        vscode.window.showInformationMessage("Hi from Niti! Rust project detected, extension is started 😎!");
    }
    // Register commands
    context.subscriptions.push(vscode.commands.registerCommand('extension.buildProject', build_1.buildProject), vscode.commands.registerCommand('extension.flashFirmware', flash_1.flashFirmware), vscode.commands.registerCommand('extension.selectComPort', selectComPort_1.selectComPort), vscode.commands.registerCommand('extension.showAbout', about_1.showAboutPage), vscode.commands.registerCommand('extension.createProject', createProject_1.createProject) // Register the Create Project command
    );
    // Status bar items
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
    const createProjectStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 98);
    createProjectStatusBarItem.text = "$(file-add) Create Niti Project";
    createProjectStatusBarItem.command = 'extension.createProject';
    createProjectStatusBarItem.tooltip = "Run cargo generate to create a new Niti project";
    createProjectStatusBarItem.show();
    context.subscriptions.push(createProjectStatusBarItem);
    const aboutStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 96);
    aboutStatusBarItem.text = "$(info) About Niti";
    aboutStatusBarItem.command = 'extension.showAbout';
    aboutStatusBarItem.tooltip = "Show information about Niti extension";
    aboutStatusBarItem.show();
    context.subscriptions.push(aboutStatusBarItem);
}
function deactivate() {
    console.log('Niti: Embedded Rust Framework is now deactivated 😢.');
}
//# sourceMappingURL=extension.js.map