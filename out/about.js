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
exports.showAboutPage = showAboutPage;
const vscode = __importStar(require("vscode"));
const path = __importStar(require("path"));
function showAboutPage() {
    const panel = vscode.window.createWebviewPanel('aboutPage', // Identifies the type of the webview. Used internally
    'About Niti', // Title of the panel
    vscode.ViewColumn.One, // Editor column to show the webview in
    {
        enableScripts: true, // Allow scripts in the webview
        localResourceRoots: [vscode.Uri.file(path.join(__dirname, 'images'))], // Allow access to the 'images' folder
    });
    // Get the current VS Code theme (dark or light)
    const isDarkTheme = vscode.window.activeTextEditor?.document.uri.scheme === "file" ? false : true;
    const theme = isDarkTheme ? 'dark' : 'light';
    // Generate the local URI for the image
    const logoUri = panel.webview.asWebviewUri(vscode.Uri.file(path.join(__dirname, 'images', 'logo.png')));
    panel.webview.html = `
    <html>
    <head>
        <style>
            /* Base styles */
            body {
                font-family: 'Arial', sans-serif;
                line-height: 1.6;
                margin: 0;
                padding: 0;
                color: ${theme === 'dark' ? '#fff' : '#333'};
            }
            .container {
                max-width: 900px;
                margin: 20px auto;
                padding: 20px;
                box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
                border-radius: 8px;
                background: ${theme === 'dark' ? '#2e2e2e' : '#f9f9f9'};
                text-align: center;
            }
            h1 {
                color: ${theme === 'dark' ? '#fff' : '#2c3e50'};
                margin-bottom: 15px;
            }
            h2 {
                color: ${theme === 'dark' ? '#ddd' : '#34495e'};
                margin-top: 15px;
            }
            p {
                color: ${theme === 'dark' ? '#bbb' : '#7f8c8d'};
                font-size: 16px;
                margin-bottom: 15px;
            }
            .logo {
                display: block;
                margin: 20px auto;
                max-width: 250px;
                border-radius: 8px;
                box-shadow: ${theme === 'dark' ? '0px 4px 6px rgba(255, 255, 255, 0.2)' : '0px 4px 6px rgba(0, 0, 0, 0.1)'};
            }
            .badge {
                margin-top: 20px;
            }
            .section-header {
                font-size: 18px;
                font-weight: bold;
                color: ${theme === 'dark' ? '#fff' : '#2c3e50'};
                margin-top: 25px;
            }
            ul {
                list-style: none;
                padding-left: 0;
                text-align: left;
                margin-top: 10px;
            }
            li {
                margin-bottom: 8px;
            }
            a {
                color: ${theme === 'dark' ? '#2980b9' : '#2980b9'};
                text-decoration: none;
            }
            a:hover {
                text-decoration: underline;
            }
            pre {
                background-color: ${theme === 'dark' ? '#444' : '#ecf0f1'};
                border-radius: 5px;
                padding: 10px;
                margin-top: 15px;
                font-size: 14px;
                text-align: left;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>About Niti V1</h1>
           
            
            <h2>What is Niti?</h2>
            <p><strong>Niti V1</strong> is an embedded abstraction layer for AVR microcontrollers and common boards like the Niti V1 board. It is based on the <a href="https://github.com/cyberkutti-iedc/Niti-core" target="_blank">avr-device crate</a> and simplifies firmware development for AVR-based microcontrollers.</p>

            <h2>Quickstart</h2>
            <p>To develop for Niti V1, you'll need a nightly Rust compiler, which is automatically installed via the <code>rust-toolchain.toml</code> file included in the project.</p>

            <div class="installations">
                <div class="section-header">Install Dependencies:</div>
                <ul>
                    <li><strong>Ubuntu:</strong> sudo apt install avr-libc gcc-avr pkg-config avrdude libudev-dev build-essential</li>
                    <li><strong>MacOS:</strong> brew install avr-gcc avrdude</li>
                    <li><strong>Windows:</strong> Use winget or Scoop for installing dependencies</li>
                </ul>
                <p>Visit the <a href="https://github.com/cyberkutti-iedc/Niti-core/avr-hal/wiki/Setting-up-environment" target="_blank">setting up environment</a> guide for more information.</p>
            </div>

            <h2>Installing Waterman</h2>
            <p>Waterman integrates the flashing process into the usual cargo workflow:</p>
            <pre><code>cargo install waterman</code></pre>

            <h2>Building and Running</h2>
            <p>Navigate to the board directory and build the firmware:</p>
            <pre><code>cd examples/niti-v1</code></pre>
            <p>Then run the firmware on the connected Niti V1 board:</p>
            <pre><code>cargo run --bin niti-blink</code></pre>

            <h2>Starting Your Own Project</h2>
            <p>To create your own project, use the <a href="https://github.com/cyberkutti-iedc/Niti-core" target="_blank">niti-core-template</a> repository:</p>
            <pre><code>cargo generate --git https://github.com/cyberkutti-iedc/Niti-core.git</code></pre>

            <h2>Repository Structure</h2>
            <div class="repository-structure">
                <div class="section-header">Niti-core Structure:</div>
                <ul>
                    <li><strong>niti-eal</strong>: Abstraction layer for peripherals and sensors.</li>
                    <li><strong>examples/*</strong>: Example projects for common peripherals.</li>
                    <li><strong>mcu/atmega-hal</strong>: ATmega family microcontroller support.</li>
                    <li><strong>avr-hal-generic</strong>: Generic AVR microcontroller driver support.</li>
                    <li><strong>avr-specs</strong>: Compiler target definitions for supported microcontrollers.</li>
                </ul>
            </div>

            <div class="contributing">
                <h2>Contribution</h2>
                <p>Contributions are welcome! All contributions are dual-licensed under the MIT License.</p>
            </div>

            <div class="badge">
                <a href="https://github.com/cyberkutti-iedc/Niti-core" target="_blank">
                    <img src="https://github.com/cyberkutti-iedc/Niti-core/workflows/Continuous%20Integration/badge.svg" alt="Continuous Integration Badge" />
                </a>
            </div>
        </div>
    </body>
    </html>
    `;
}
//# sourceMappingURL=about.js.map