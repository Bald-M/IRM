# vue-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Docker Setup
### Build the Docker Image
To build the Docker image for this project, use the following command:

```sh
docker build -t irm-frontend:1.0.0-beta2 .
```

+ -t irm-frontend:1.0.0-beta2: Tags the image with the name irm-frontend and version 1.0.0-beta2.

+ **.** : Specifies the current directory as the context for the build.

Ensure your Dockerfile is correctly set up and located in the root directory of your project.

### Run the Docker Container
Once the image is built, you can run it using:

```sh
docker run -d -p 80:80 --name irm-frontend irm-frontend:1.0.0-beta2
```

+ -d: Runs the container in detached mode (in the background).
+ -p 80:80: Maps port 80 on your local machine to port 80 in the container.
+ --name irm-frontend-test: Names the container irm-frontend-test for easier reference.
+ irm-frontend:1.0.0-beta2: Specifies the image to run.

After running this command, your application will be accessible at http://localhost/ in your browser.