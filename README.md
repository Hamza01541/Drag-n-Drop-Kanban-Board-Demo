# TestNgApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.15.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Demo project for Task Management
- Angular 9 project
- SCSS
- Added shared module.
- Added task-board custom component in shared module.
- Added task list model interface in shared directory.
- Added task board service in shared module to fetch API data for task list.
- Added sample data json in assets.
- Rendered Dynamic Task lists and tasks in those lists.
- Added functionality to dynamically add new task lists and tasks in different lists.
- Added drag and drop functionality using html5 controls and events without using any external library.
- Error handling
- Displayed 'No Task List Found!' message if there is no task list.
- Added method comment and line comments to enhance code readability.
- Used index.ts files to reduce code repeatition.
- Written simple Unit test for service.
- Added code to Github repository.
- Added script in Package.json to automate deployment process.
- Deployment on Surve hosting.

## Deployement
- npm install g surge
- npm run build
- cd dist/folder
- surge

- Live Application URl: https://demo-kanban.surge.sh/
