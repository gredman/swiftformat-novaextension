import ArgumentParser
import Foundation

@testable import SwiftFormat

private let keyPrefix = "computer.gareth.swiftformat"

struct JSONCommand: ParsableCommand {
    static let configuration = CommandConfiguration(commandName: "json")

    func run() throws {
        let preferences = FormatRules.all
            .filter { $0.deprecationMessage == nil }
            .map(Preference.init(rule:))
        let data = try JSONEncoder().encode(preferences)
        print(String(data: data, encoding: .utf8)!)
    }
}

struct Preference: Codable {
    var key: String?
    var title: String?
    var description: String?
    var type: String?
    var values: [String]?

    var children: [Preference]?
}

extension Preference {
    init(rule: FormatRule) {
        let children = (rule.options + rule.sharedOptions).compactMap(Preference.init(option:))
        let preference = Preference(
            key: "\(keyPrefix).rule.\(rule.name)",
            title: rule.help,
            type: "boolean")
        self.init(title: rule.name, type: "section", children: [preference] + children)
    }

    init?(option: String) {
        guard let descriptor = Descriptors.byName[option] else {
            return nil
        }

        let type: String
        let values: [String]?
        switch descriptor.type {
        case .array:
            type = "stringArray"
            values = nil
        case let .binary(true: trueValues, false: falseValues):
            type = "enum"
            values = [trueValues.first, falseValues.first].compactMap { $0 }
        case let .enum(options):
            type = "enum"
            values = options
        case .int:
            type = "number"
            values = nil
        case .set:
            type = "stringArray"
            values = nil
        case .text:
            type = "string"
            values = nil
        }

        self.init(
            key: "\(keyPrefix).option.\(option)",
            title: option,
            description: descriptor.help,
            type: type,
            values: values)
    }
}

