This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

This project uses create react app and tachyons for easy css styling.

## Error Boundaries

flow back up errors

## React Router notes

react is only a view layer so it only enables you to build components. It has local state management and event handling, but it helps with the view. Large scale apps need new features added on. For example, react-router is common to see out there for changing pages in url. Standard for react-redux project, to use.

Utility libraries
  - Rambda (functional ideology)
  - lodash

# Styling
  - glamorous
  - styled components
  - css modules

## Gatsby js
  - static webpages in react
  - simple text based pages that work well
  - nextjs

Alos you can use material-ui
reselect, improve performance of apps
redux-saga, it's super-charged thunk

## immutable js
- enforce that among dev teams

if you add, ask yourself DO I need this? justify it which improves value of the product. Think of dev teams, will they benefit from this? Is frustration worth it...

## What and why bundler?
Need something to minify and maintain the javascript files into one. They can optimize images, and maximize delivery of images for the file. Webpack was doing stuff under the hood. Still want to know how things work under the hood.
THe big three right now are parcel, webpack, and rollup.js

rollupjs is good with tree shaking, throwing out code you don't need.

zero config for parcel, a bit easier to get setup.

- webpack most likely setup for big projects
- parcel is small project just need to get up and going.
- rollup is more own npm module

but things change so rapidly. When you have an issue, know what it does so you can read through doc config and read through it.

> time is better spent write better tests, don't spend too much time learning how to do configuration.

## Testing,
why do we need tests?
As more devs join the team you need to make sure you don't break other teams hard work and things function as they initially did.

growing product makes giant monster harder to maintain.

Testing helps us to make sure parts of code work properly.

it covers code so you don't introduce bugs in production.

## Mistakes while testing?
long run, writing tests help you avoid bugs in long term.

## Testing categories
Unit Tests
  - tests individual functions or classes
  - cheapest and easies to implement

Integration Tests
Automation Tests
  - code that runs through steps for you

Testing library
  - jasmine, mocha or jest

Jest has almost everything you need built in, including code cov. Jest is the goto

## Unit tests
pure functions => pure outputs
testing input of a thing, returns output of a thing.
Easier to test, nice maintainable code as you split things out into discrete parts.

## Integration tests
you test connections between things, brittle. Harder to write. Unlike these, hard to say when you are done writing them. Rare to see company with good integration tests.

## Automation tests
UI tests in browser or browser like environment. Make sure scenarios work from POV of end user.
TestCafe, Cypress, etc. Usually only at larger companies. So many edge cases.

Want to just get started? TestCafe, webdriver io has great docs. Nightmare.js is good for web scrapping.

1) unit / integration

2) UI tests

## More examples
Testing unified picture
App.js >> App.test.js
never ship test code into PROD only in DEV

read test, run tests, and output.
Then we can ship to production without anything prod needs.

coding time.














