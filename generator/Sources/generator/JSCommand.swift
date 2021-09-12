import ArgumentParser
@testable import SwiftFormat

private let keyPrefix = "computer.gareth.swiftformat"

struct JSCommand: ParsableCommand {
    static let configuration = CommandConfiguration(commandName: "js")

    func run() throws {
        print("function getRules() {")
        print("\tvar rules = [];")
        let rules = FormatRules.all.filter { $0.deprecationMessage == nil }
        for rule in rules {
            let key = "\(keyPrefix).rule.\(rule.name)"
            print("\tif (nova.config.get(\"\(key)\", \"boolean\")) {")
            print("\t\trules.push(\"\(rule.name)\");")
            print("\t}")
        }

        print("\treturn rules.join(\",\");")
        print("}")

        print("function getOptions() {")
        print("\tvar options = [];")
        for option in Set(rules.flatMap(\.options) + rules.flatMap(\.sharedOptions)) {
            let key = "\(keyPrefix).option.\(option)"
            print("\tvar \(option) = nova.config.get(\"\(key)\", \"string\");")
            print("\tif (\(option)) {")
            print("\t\toptions.push(\"--\(option)\", \(option));")
            print("\t}")
        }

        print("\treturn options;")
        print("}")

        print(#"""
module.exports = {
	"getRules": getRules,
	"getOptions": getOptions
};
"""#)
    }
}
