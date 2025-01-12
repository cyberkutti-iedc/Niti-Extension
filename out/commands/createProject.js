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
exports.createProject = createProject;
const vscode = __importStar(require("vscode"));
async function createProject() {
    try {
        // Run cargo generate with the template GitHub URL
        const command = 'cargo generate --git https://github.com/cyberkutti-iedc/niti-hal-template.git';
        vscode.window.withProgress({
            location: vscode.ProgressLocation.Notification,
            title: 'Creating a new Niti project...',
            cancellable: false,
        }, async (progress) => {
            progress.report({ message: 'Running cargo generate...' });
            try {
                // Execute the command in the terminal
                const terminal = vscode.window.createTerminal('Niti Project Generator');
                terminal.sendText(command);
                terminal.show();
                vscode.window.showInformationMessage('Niti project creation started in the terminal. Follow the prompts there.');
            }
            catch (error) {
                vscode.window.showErrorMessage(`Failed to run cargo generate: ${error}`);
            }
        });
    }
    catch (error) {
        vscode.window.showErrorMessage(`An unexpected error occurred: ${error}`);
    }
}
//# sourceMappingURL=createProject.js.map