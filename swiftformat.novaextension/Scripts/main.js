nova.commands.register("swiftformat", format);

function format(editor) {
    var range = !editor.selectedRange.empty
        ? editor.selectedRange
        : new Range(0, editor.document.length);

    var process = Process.swiftformat(!editor.selectedRange.empty);
    var text = editor.getTextInRange(range);
    filter(process, text).then((formatted) => {
        editor.edit((e) => {
            e.replace(range, formatted);
        });
    });
}

Process.swiftformat = (isFragment) => {
    var path = nova.config.get("computer.gareth.swiftformat.path");
    var options = {
        args: [
            path,
            "--fragment", isFragment ? "true" : "false",
            "--quiet",
            "stdin"
        ]
    };
    return new Process("/usr/bin/env", options);
}

function filter(process, text) {
    return new Promise((resolve, reject) => {
        var formatted = "";

        process.onStdout((line) => {
            formatted += line;
        });

        process.onStderr((line) => {
            console.error("stderr:", line);
        });

        process.onDidExit((status) => {
            console.log("finished with status", status);
            if (status != 0) {
                console.error("swiftformat finished with non-zero status");
                reject();
                return;
            }
            resolve(formatted);
        });

        console.log("launching swiftformat with args:", process.args);
        process.start();
        var writer = process.stdin.getWriter();
        writer.ready.then(() => {
            return writer.write(text);
        });
        writer.ready.then(() => {
            writer.close();
        });
    });
};
