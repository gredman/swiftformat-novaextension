import ArgumentParser
import ArgumentParser
import ArgumentParser

struct GeneratorCommand: ParsableCommand {
    static let configuration = CommandConfiguration(commandName: "generator", subcommands: [JSONCommand.self, JSCommand.self])
}
