# 🌟 **Niti: Embedded Rust Framework for VS Code** 🚀  

**Niti** is an extension for Visual Studio Code designed to provide a comprehensive framework for developing firmware for AVR-based microcontrollers using Rust. With seamless integration for the **Niti V1 Board** and other AVR devices, it simplifies building, flashing, and managing embedded Rust projects.

![Niti Logo](https://niti-website-beta.vercel.app/assets/rust-logo-DgTKb-JD.gif)  

---

## 🚀 **Features**  

- **Build Project**: Easily build your embedded Rust project using Cargo.
- **Flash Firmware**: Flash the compiled firmware to your connected device with ease.
- **Select COM Port**: Select the appropriate COM port for flashing.
- **About Page**: Access detailed information about the Niti extension and its usage.
- **Integrated with Niti V1 Board**: Optimized for Niti V1 Board and AVR microcontrollers.

---

## 🔧 **Requirements**

Ensure you have the following tools installed for optimal performance:

- **Rust**: Make sure Rust is installed. You can get it from [rustup](https://rustup.rs/).
- **AVR Toolchain**: Install the required AVR tools, including `avr-gcc`, `avrdude`, and others. Platform-specific instructions can be found in the **Quickstart** section.
- **Waterman (Optional)**: For easy firmware flashing within the `cargo` workflow.
  
```bash
cargo install waterman
```

---

## 💻 **Installation**

### Prerequisites

- **Rust**: Install Rust through [rustup](https://rustup.rs/).
- **AVR Toolchain**: Install the AVR toolchain for your operating system.

### Install the Extension

1. **Install from the VS Code Marketplace**:
   - Open VS Code and go to the **Extensions** view (Ctrl+Shift+X or Cmd+Shift+X on macOS).
   - Search for **Niti: Embedded Rust Framework** and click **Install**.

2. **Install from VSIX (for local testing)**:
   - Download or build the `.vsix` package.
   - In VS Code, go to the Extensions view and click the three dots in the upper-right corner.
   - Select **Install from VSIX** and choose the `.vsix` file.

---

## 🌱 **Setup Guide**

1. Clone the [Niti-core repository](https://github.com/cyberkutti-iedc/Niti-core) or generate a new project using the provided template.
2. Open your project in VS Code.
3. Set up your `rust-toolchain.toml` file to use the nightly compiler (if not already done).
4. Follow platform-specific instructions for installing dependencies and configuring your environment.

---

## 🛠️ **Commands**

The Niti extension for VS Code offers several commands that can be triggered via the command palette or status bar:

- **Build Project**: Builds your embedded Rust project using Cargo.
  - Command: `extension.buildProject`
  - Trigger: Click the **Build Project** button in the status bar or use `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS).
  
- **Flash Firmware**: Flash the compiled firmware to the Niti V1 or other AVR-based devices.
  - Command: `extension.flashFirmware`
  - Trigger: Click the **Flash Firmware** button in the status bar or use the command palette.

- **Select COM Port**: Choose the correct COM port for flashing.
  - Command: `extension.selectComPort`
  - Trigger: Click the **Select COM Port** button in the status bar or use the command palette.

---

## 🌟 **About Niti**

The Niti extension simplifies development for AVR-based devices using Rust. It provides easy-to-use APIs for interacting with hardware peripherals like sensors and displays, making it an ideal choice for embedded development with the **Niti V1 Board**.

- **Quickstart**: Follow the [Quickstart guide](https://github.com/cyberkutti-iedc/Niti-core#quickstart) for setting up your environment and building the firmware.
- **Repository**: [Niti-core GitHub](https://github.com/cyberkutti-iedc/Niti-core)
- **Waterman**: A tool for integrating firmware flashing with `cargo`. Learn more at [Waterman GitHub](https://github.com/cyberkutti-iedc/Waterman).

---

## 🗂️ **Repository Structure**

The Niti-core repository includes the following components:

- **niti-eal**: Embedded Abstraction Layer for Niti V1.
- **examples/**: Practical examples for working with common peripherals.
- **mcu/**: Hardware abstraction layer (HAL) for AVR microcontrollers like ATmega328P.
- **avr-hal-generic**: Generic HAL implementation for AVR devices.
- **avr-specs/**: Compiler target definitions for AVR microcontrollers.

---

## 📜 **License**

This project is licensed under the MIT License. See the [LICENSE](https://github.com/cyberkutti-iedc/niti-extension/blob/main/LICENSE) file for more details.

---

## 🤝 **Contribution**

We welcome contributions! Fork the repository and submit a pull request with any improvements or fixes. Ensure you follow the coding style and provide meaningful commit messages.

---

**Niti: Empowering Embedded Development with Rust 🚀**

For more detailed documentation and updates, visit the [GitHub repository](https://github.com/cyberkutti-iedc/Niti-Extension).

---

### Enjoy your embedded development with Rust and the Niti extension! 🚀