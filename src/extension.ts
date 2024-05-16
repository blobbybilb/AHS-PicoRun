// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('"AHS-PicoRun" is now active');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	// let disposable = vscode.commands.registerCommand('ahs-picorun.helloWorld', () => {
	// 	// The code you place here will be executed every time your command is executed
	// 	// Display a message box to the user
	// 	vscode.window.showInformationMessage('Hello World from AHS PicoRun!2');
	// });

	async function run() {
		vscode.window.showInformationMessage('Running on Pico!');
		await vscode.commands.executeCommand("micropico.reset.soft")
		await vscode.commands.executeCommand("micropico.upload")
		await vscode.commands.executeCommand("micropico.reset.soft")
		vscode.commands.executeCommand("micropico.run")
	}

	let cmd = vscode.commands.registerCommand('ahs-picorun.runOnPico', () => {
		const microPicoExt = vscode.extensions.getExtension("paulober.pico-w-go");
		if (microPicoExt?.isActive) {
			run();
		} else {
			microPicoExt?.activate().then(
				() => { console.log("activated"); run(); },
				() => console.log("failed!!!!")
			);
		}
		console.log("registerd command");
	});

	// context.subscriptions.push(disposable);
	context.subscriptions.push(cmd);
}

// This method is called when your extension is deactivated
export function deactivate() { }
