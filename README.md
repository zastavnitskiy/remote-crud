# An example of a CRUD app.

![Preview](https://github.com/zastavnitskiy/remote-crud/raw/master/preview.png "Remote app preview")

This project is bootstrapped with Create-react-app, and configured to use
Typescript and CSS modules.

Typescript allows to catch and prevent multiple classes of runtime errors,
and improves codebase quality in the long run.

CSS Modules is one of the simpliest css-in-js solutions. By using scoped
CSS classes by default, we reduce the complexity of codebase and, again,
increase quality in the long run.

# Architecture & File structure overview

## File structure

`./api` directory contains a mock of backend api client. For simplicity, it doesn't
implement any peristence; however, it's asyncronous api is designed to allow for that
in the future.

`./components` contains reusable components of two types: Application specific (like `EmployeeForm`) and Generic(like `Button`).
In a real project, such components would come from a internal or external design system; for simplicity, I left all shared
components in the same folder.

`./pages` directory contains high-level page components. Theese are pages that are rendered by router.
Complex pages, like `View` can contain custom CSS and nested components. _Important_ architectural consideration: nested dependencies between pages and subcomponents
are not allowed — this way, each page can be developed and deployed in isolation.

If there is a need to reuse a component between pages, it should be extracted into shared `./components` directory and threated with care(and tests);

## Tests

API mock is covered by jest unit tests, and React components would be covered with unit/integrationn tests, as shown in `./components/App`. I only implmented a small sample for now.

# Other considerations

In some places, design elements were of the grid by a couple of pixels — I such scenarios, I didn't stick to Figma's mockups, but
allowed myself to round up and align elements. In real work, I would discuss this with design author.

I didn't find a way to extract SVGs for human icon and select down arrow from Figma, so I used alternatives.

I defaulted to action and implemented very basic mobile media queries, so that the app would look okay on mobile
(there is still an ugly in-between state around 1000px, it can definitely be improved).
