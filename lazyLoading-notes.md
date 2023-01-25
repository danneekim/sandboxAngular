# Code Splitting + Lazy Loading

How code splitting and lazy loading work in Angular.

### Code Splitting
Code spliting allows you to divide the application code into multiple chunks associated with different routes & features.

- By default the Angular application is bundled into two chunks:
  - **main.js** - (application code)
  - **vendor.js** - (third-party libraries - ie node_modules)

- The easiest way to code split in Angular is at the route-level (*ie lazy loading*)

### Lazy-loading NgModules

Lazy loading helps keep the initial JavaScript bundle small:
- by splitting the NgModules into seperate chunks and loading them upon route navigation.
- This is turn - decreases the time required for the page to load.

```js
const routes: Route[] = [
  { 
    path: 'login', 
    loadChildren: () => import("./login/login.module")
      .then((module) => module.LoginModule)
  },
  { 
    path: 'products', 
    loadChildren: () => import("./products/products.module")
      .then((module) => module.ProductsModule)
  },
  { 
    path: 'admin', 
    loadChildren: () => import("./admin/admin.module")
      .then((module) => module.AdminModule)
  }
];
```
For example, the chunk for `AdminModule` will first load when the user navigates to `website.com/admin`.
