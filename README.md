# Backend Module Scaffold Experiment

A small historical Node.js command-line experiment that generates a fixed folder structure and TypeScript file placeholders for a backend module.

## Current behavior

Given one safe module name, the script creates a directory containing:

```text
<moduleName>/
├── core/
│   ├── controller/
│   ├── dto/<moduleName>/
│   ├── entities/
│   ├── enum/<moduleName>/
│   ├── filter/<moduleName>/
│   ├── pagination/<moduleName>/
│   └── response/<moduleName>/
└── module/<moduleName>/
    ├── repository/
    └── service/
```

The controller file receives a historical NestJS-style template. Other generated files contain placeholders.

## Requirements

- Node.js 16 or newer
- No package installation is required

## Usage

Run the script from the parent directory where the generated module should be created:

```powershell
node cli.js orders
```

The module name must begin with a lowercase letter and contain only letters and digits. The script refuses multiple arguments, path separators, punctuation, empty names, and an existing target directory.

## Safety behavior

- Generated files use exclusive creation and do not overwrite existing files.
- The target directory must not already exist.
- Module names are restricted to safe TypeScript identifiers, preventing path traversal through the CLI argument.
- IDE-local project files are excluded from version control.

## Verification

```powershell
node --check cli.js
node --check templates/controller.js
node --check templates/entity.js
```

A practical smoke check can run the CLI in a temporary directory and confirm that the expected files are created and a second run is rejected.

## Historical limitations

This is a prototype rather than a complete generator.

- The output structure is fixed in source and cannot be configured.
- Most generated files contain placeholders rather than compilable implementations.
- The controller template omits imports and contains project-specific naming assumptions.
- The entity template is not connected to the CLI.
- Generated output is not formatted, tested, or inserted into an existing Nest module.
- There is no rollback when a filesystem error occurs after generation begins.
- There is no automated test suite or published package.

Review generated files before adding them to an application.

## Roadmap represented by the original notes

1. Generate the static module structure.
2. Add template content to generated files.
3. Generate entity properties.

Only parts of the first two phases are present.

## Status

Archived educational experiment retained as evidence of early developer-tooling and code-generation work. It should remain unfeatured until the templates and tests are completed.

## License

No open-source license has been selected. The source is publicly viewable, but reuse rights are not granted until a license is added.
