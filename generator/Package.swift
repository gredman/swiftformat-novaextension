// swift-tools-version:5.5
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
    name: "generator",
    products: [
        .executable(
            name: "generator",
            targets: ["generator"])
    ],
    dependencies: [
        .package(url: "https://github.com/apple/swift-argument-parser", from: "1.0.0"),
        .package(url: "https://github.com/nicklockwood/SwiftFormat", from: "0.48.10")
    ],
    targets: [
        .executableTarget(
            name: "generator",
            dependencies: ["SwiftFormat", .product(name: "ArgumentParser", package: "swift-argument-parser")])
    ])
