# Niti: Embedded Rust Framework for VS Code

**Niti** is an extension for Visual Studio Code that provides a comprehensive framework for developing firmware for AVR-based microcontrollers using the Rust programming language. It simplifies the process of building, flashing, and managing embedded Rust projects, especially those targeting Niti V1 boards and other AVR microcontrollers.

## Features

- **Build Project**: Easily build your embedded Rust project using Cargo.
- **Flash Firmware**: Flash the compiled firmware to your connected device.
- **Select COM Port**: Select the appropriate COM port for flashing.
- **About Page**: View detailed information about the Niti extension and its usage.
- **Integrated with Niti V1 Board**: Supports the Niti V1 board and related hardware for embedded development.

## Requirements

- **Rust**: This extension requires the Rust programming language. Ensure that the Rust toolchain is installed on your system.
- **AVR Toolchain**: The extension supports AVR-based microcontrollers. Install the required AVR tools (e.g., `avr-gcc`, `avrdude`).
  
  Follow the instructions in the **Quickstart** section to install these dependencies based on your operating system.

## Installation

### Prerequisites
- Install **Rust** using [rustup](https://rustup.rs/).
- Install the **AVR Toolchain** on your system. Refer to the **Quickstart** section for platform-specific instructions.
- Optionally, install **Waterman** for seamless flashing of firmware using `cargo`:
  ```bash
  cargo install waterman
  ```

### VS Code Extension Installation
1. **Install the Extension from the VS Code Marketplace**:
    - Open the **Extensions** view in VS Code (Ctrl+Shift+X or Cmd+Shift+X on macOS).
    - Search for **Niti: Embedded Rust Framework** and click **Install**.

2. **Install from VSIX (For testing locally)**:
    - Download or build the `.vsix` package.
    - In VS Code, open the Extensions view and click the three dots in the upper right.
    - Select **Install from VSIX** and choose the `.vsix` file.

## Setup

1. Clone the [Niti-core repository](https://github.com/cyberkutti-iedc/Niti-core) or create a new project using the template.
2. Open your embedded Rust project in VS Code.
3. Configure your `rust-toolchain.toml` file to use the nightly compiler (if not already done).
4. Install necessary dependencies using the instructions provided for each platform.

## Commands

The extension provides the following commands:

- **Build Project**: Builds the current Rust project using Cargo.
  - Command: `extension.buildProject`
  - Trigger: Click the **Build Project** button in the status bar or use the command palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on macOS).
  
- **Flash Firmware**: Flash the compiled firmware to the connected Niti V1 or other AVR-based devices.
  - Command: `extension.flashFirmware`
  - Trigger: Click the **Flash Firmware** button in the status bar or use the command palette.
  
- **Select COM Port**: Select the COM port for flashing the connected device.
  - Command: `extension.selectComPort`
  - Trigger: Click the **Select COM Port** button in the status bar or use the command palette.

## About Niti

The Niti extension works with **Niti V1**, an embedded abstraction layer for AVR microcontrollers and common boards. Niti simplifies development for AVR-based devices by providing easy-to-use APIs for working with peripherals, sensors, and displays.

- **Quickstart**: Follow the [Quickstart guide](https://github.com/cyberkutti-iedc/Niti-core#quickstart) for setting up your environment and building the firmware.
- **Repository**: [Niti-core GitHub](https://github.com/cyberkutti-iedc/Niti-core)
- **Waterman**: Tool for integrating firmware flashing with `cargo`. See [Waterman GitHub](https://github.com/cyberkutti-iedc/Waterman).

## Repository Structure

The Niti-core repository is organized into various components:

- `niti-eal`: Embedded Abstraction Layer for Niti V1.
- `examples/`: Practical examples for common peripherals and components.
- `mcu/`: Hardware abstraction layer (HAL) for AVR microcontrollers like ATmega328P.
- `avr-hal-generic`: Generic HAL implementation for AVR microcontrollers.
- `avr-specs/`: Compiler target definitions for AVR microcontrollers.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/cyberkutti-iedc/niti-extension/blob/main/LICENSE) file for more details.


## Contribution

Contributions to this project are welcome! Please fork the repository and submit a pull request for any improvements or fixes. Make sure to follow the code style and provide meaningful commit messages.

---

**Niti: Empowering Embedded Development with Rust 🚀**

For more detailed documentation and updates, visit the [GitHub repository](https://github.com/cyberkutti-iedc/Niti-Extension).
