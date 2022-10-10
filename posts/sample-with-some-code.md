---
draft: true
expiryDate: null
lastmod: null
publishDate: null
summary: A summary whose length is to be less than 20 words
tags:
  - javascript
  - react
  - typescript
title: A title
---

A sample post with code.

## Inline code

*Function statements* like `function foo() {}` vs *function expressions* like **const foo = function() {}`

## Code blocks

**hello.js**

```javascript
export const hello = () => 'Hello, world!'
```

**component.tsx**

```typescriptreact
import { hello } from './hello';

const Component = () => (
  <>
    message: ${hello()}
  </>
);

default export Component;
```