# DiSaasFe

## Project Commands

Run `nx serve mgmt-console` to serve the mgmt-console app.

Run `nx run mgmt-storybook-host:storybook` to serve storybook.

Run `npx nx serve mgmt-storybook-host:build-storybook` to build storybook.

Run `npx chromatic --$(grep project-token .env) -d=dist/storybook/mgmt-storybook-host` to build chromatic.

## Understand this workspace

Run `nx g c <component-name> --module <module-name>` or `nx g @nrwl/angular:component <component-name> --project=<project-name>` or `nx g component <component-name> --project=<project-name> --module=<module-name>` to generate a new component.

Run `nx build` to build the project.

Run `nx graph` to see a diagram of the dependencies of the projects.

Run `nx test mgmt-ui-components` to test a project.

Run `nx lint <project-name>` to lint a project.

Run `nx affected:graph` to see a diagram of what's been affected by changes since your last commit.

Run `nx affected -t test` to run the test targets only for affected projects.

## Storybook

Run `nx storybook <project-name>` to serve Storybook.

Run `nx build-storybook <project-name>` to build Storybook.

Run `nx g @nrwl/angular:storybook-configuration <project-name> --tsConfiguration=true` to generate Storybook configuration for an individual project.

Run `nx g @nrwl/angular:stories` if you add more components to your project, and want to generate stories for all of your (new) components.

Run `nx run <project-name>-e2e:e2e` to launch Storybook and run the Cypress tests against the iframe inside of Storybook.

## Remote caching

Run `npx nx connect-to-nx-cloud` to enable remote caching and make CI faster.
