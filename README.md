# Simple employee editor app ([view](http://remote-test.netlify.app/)).

This project is bootstrapped with Create React App and configured to use
Typescript and CSS modules.

Typescript allows to catch and prevent multiple classes of runtime errors,
and improves codebase quality in the long run.

CSS Modules is one of the simplest CSS-in-js solutions. By using scoped
CSS classes by default, we reduce the complexity of codebase and, again,
increase quality in the long run.

![Preview](https://github.com/zastavnitskiy/remote-crud/raw/master/preview.png "Remote app preview")

# Architecture & File structure overview

Main entry point is `./src/index.ts` file. The app is implemented as a Single Page Application and
users react-router for client-side routing.

## File structure

`./api` directory contains a mock of backend API client. For simplicity, it doesn't
implement any persistence; however, it's asynchronous API is designed to allow for that
in the future.

`./components` contains reusable components of two types: Application specific (like `EmployeeForm`) and Generic(like `Button`).
In a real project, such components would come from an internal or external design system; for simplicity, I left all shared
components in the same folder.

`./pages` directory contains high-level page components. These are pages that are rendered by the router.
Complex pages, like `View`, can contain custom CSS and nested components. _Important_ architectural consideration: nested dependencies between pages and subcomponents
are not allowed — this way, each page can be developed and deployed in isolation.

If there is a need to reuse a component between pages, it should be extracted into shared `./components` directory and treated with care(and tests);

## Tests

To save some time, I only wrote tests for API; and added a few test examples for App to demonstrate testing of a React component.

# Other considerations

## Design

In some places, design elements were off the grid by a couple of pixels — I such scenarios, I didn't stick to Figma's mockups but
allowed myself to round up and align elements. In real work, I would discuss this with design author.

I didn't find a way to extract SVGs for human icon and select down arrow from Figma, so I used alternatives.

I defaulted to action and implemented very basic mobile media queries so that the App would look okay on mobile
(there is still an ugly in-between state around 1000px, it can be improved).
