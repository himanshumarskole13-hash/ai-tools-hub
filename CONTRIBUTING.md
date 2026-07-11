# Contributing to AI Tools Hub

We love your input! We want to make contributing to AI Tools Hub as easy and transparent as possible.

## How Can I Contribute?

### 1. Reporting Bugs

Before creating bug reports, please check the issue list as you might find out that you don't need to create one.

**When you are creating a bug report, please include as many details as possible:**

- Use a clear and descriptive title
- Describe the exact steps which reproduce the problem
- Provide specific examples to demonstrate the steps
- Describe the behavior you observed after following the steps
- Explain which behavior you expected to see instead and why
- Include screenshots and animated GIFs if possible

### 2. Suggesting Enhancements

- Use a clear and descriptive title
- Provide a step-by-step description of the suggested enhancement
- Provide specific examples to demonstrate the steps
- Describe the current behavior
- Explain the expected behavior
- Explain why this enhancement would be useful

### 3. Pull Requests

- Fill in the required template
- Follow the JavaScript styleguide
- Include appropriate test cases
- Document new code based on the Documentation Styleguide
- End all files with a newline

## Getting Started

### Prerequisites

- Node.js v16+
- npm or yarn
- Git

### Setup Development Environment

```bash
# Fork and clone the repository
git clone https://github.com/YOUR_USERNAME/ai-tools-hub.git
cd ai-tools-hub

# Install dependencies
npm install

# Create a branch for your feature
git checkout -b feature/your-feature-name
```

### Running Tests

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Lint code
npm run lint
```

## Styleguides

### Git Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line

Example:
```
Add dark mode toggle to navbar

Fixes #123
```

### JavaScript Styleguide

- Use 2 spaces for indentation
- Use single quotes for strings
- No semicolons
- Use const and let, avoid var
- Use arrow functions

```javascript
const greeting = () => {
  console.log('Hello, World!')
}
```

### React Component Styleguide

```javascript
// Use functional components
const MyComponent = ({ prop }) => {
  return (
    <div>
      {prop}
    </div>
  )
}

export default MyComponent
```

### CSS/Tailwind Styleguide

- Use Tailwind CSS classes
- Avoid inline styles
- Keep responsive design in mind

```jsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Content */}
</div>
```

## Code Review Process

1. We review pull requests to check for:
   - Code quality
   - Test coverage
   - Documentation
   - Performance impact

2. We may ask for changes to be made before a PR can be merged

3. Once approved, your PR will be merged

## Community

- Discuss ideas in GitHub Discussions
- Ask questions in GitHub Discussions
- Be respectful and constructive

## License

By contributing, you agree that your contributions will be licensed under its MIT License.

---

**Thank you for contributing! 🎉**
