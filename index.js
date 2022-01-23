#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const yargs = require("yargs");

const extensions = ["text", "json"];

const argv = yargs
	.scriptName("mytools")
	// .command("<source_file> [-t format] [-o destination_path]", "")
	.usage("Usage: $0 [source_file] -t [format] -o [destionation_file]")
	.options({
		t: {
			choices: extensions,
			default: "text",
			describe: "Fill with extension file",
		},
		o: {
			type: "string",
			describe: "Fill with destination path",
		},
	})
	.help()
	.alias("help", "h").argv;

if (!argv._[0]) {
	console.log(
		"Invalid command, Please put your source file in command. Please check your command again, if you need help just run mytools -h"
	);
	return;
}
// Argument pertama wajib berisi path lokasi file yang ingin dikonversi (extension wajib memiliki extension .log)
const validaPath = new RegExp("/([A-z0-9-_+]+/)*([A-z0-9]+.(log))", "gm");
if (!validaPath.test(argv._[0])) {
	console.log(
		"Invalid command, path source file is wrong or extension file not '.log'. Please check your command again, if you need help just run mytools -h"
	);
	return;
}

let extension = ".txt";
let fileName = path.parse(argv._[0]).name;
let destinationPath = `./converted`;

if (argv.t) {
	if (argv.t == "text") {
		extension = ".txt";
	} else {
		extension = ".json";
	}
}
if (argv.o) {
	// Cek apakah penulisan lokasi file sudah benar atau tidak
	const validaPath = new RegExp(
		"/([A-z0-9-_+]+/)*([A-z0-9]+.(txt|json))",
		"gm"
	);
	if (validaPath.test(argv.o)) {
		fileName = path.parse(argv.o).name;
		destinationPath = path.parse(argv.o).dir;
	} else {
		console.log(
			"Invalid argument, the directory path or file extension is not correct. Please check your command again, if you need help just run mytools -h"
		);
		return;
	}
}

const output = `${destinationPath}/${fileName}${extension}`;

fs.readFile(argv._[0], "utf8", (err, data) => {
	if (err) {
		console.error(err);
		return;
	}

	fs.writeFile(output, data, (err) => {
		if (err) {
			throw err;
		}
		console.log("JSON data is saved.");
	});
});
