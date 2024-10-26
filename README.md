# @clifland/vuejs-utils

Utility functions and helpers for common Vue.js tasks, particularly useful for testing components.

## Installation

Install the package as a development dependency, along with the necessary dependencies:

### Required Dependencies

This package requires the following dependencies:

- `@vue/test-utils` (version ^2.4.6)
- `vitest` (version ^2.1.3)

Make sure to install them as development dependencies (if you haven't already):

```bash
npm install -D @clifland/vuejs-utils @vue/test-utils vitest
```

## Usage

### testComponentTextRendering

The testComponentTextRendering helper function allows you to verify the text rendering of your Vue components during tests.

### Steps to Use

1. Create a test file in tests folder, e.g., tests/RenderComponent.test.js.
2. Import the helper function and pass your component data as arrays, as shown in the example.

### Example (JavaScript)

```js
// tests/RenderComponent.test.js.
import { testComponentTextRendering } from '@clifland/vuejs-utils';

const componentsToTest = [
    ["MyComponent", "Expected text"],
    ["AnotherComponent", "Another expected text"]
];

testComponentTextRendering(componentsToTest);
```

### Example (TypeScript)

If you are using TypeScript, you should define your components with type annotations as follows:

```ts
// tests/RenderComponent.test.ts.
import { testComponentTextRendering } from '@clifland/vuejs-utils';

const componentsToTest: [string, string][] = [
    ["MyComponent", "Expected text"],
    ["AnotherComponent", "Another expected text"]
];

testComponentTextRendering(componentsToTest);
```

### Run the Tests

To run the tests, use the following command:

```bash
npx vitest
```
