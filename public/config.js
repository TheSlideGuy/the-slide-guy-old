// jscs:disable
System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "typescript",
  typescriptOptions: {
    "module": "system",
    "sourceMap": true,
    "removeComments": true,
    "target": "es5"
  },
  paths: {
    "npm:*": "vendor/npm/*",
    "github:*": "vendor/github/*"
  },

  map: {
    "angular": "github:angular/bower-angular@1.4.8",
    "angular-material": "github:angular/bower-material@1.0.0",
    "angular-mocks": "github:angular/bower-angular-mocks@1.4.7",
    "angular-sanitize": "github:angular/bower-angular-sanitize@1.4.8",
    "angular-ui-router": "github:angular-ui/ui-router@0.2.15",
    "jsmodules/angular-material-calendar": "github:jsmodules/angular-material-calendar@0.2.14",
    "typescript": "npm:typescript@1.6.2",
    "github:angular-ui/ui-router@0.2.15": {
      "angular": "github:angular/bower-angular@1.4.8"
    },
    "github:angular/bower-angular-animate@1.4.8": {
      "angular": "github:angular/bower-angular@1.4.8"
    },
    "github:angular/bower-angular-aria@1.4.8": {
      "angular": "github:angular/bower-angular@1.4.8"
    },
    "github:angular/bower-angular-mocks@1.4.7": {
      "angular": "github:angular/bower-angular@1.4.8"
    },
    "github:angular/bower-angular-sanitize@1.4.8": {
      "angular": "github:angular/bower-angular@1.4.8"
    },
    "github:angular/bower-material@1.0.0": {
      "angular": "github:angular/bower-angular@1.4.8",
      "angular-animate": "github:angular/bower-angular-animate@1.4.8",
      "angular-aria": "github:angular/bower-angular-aria@1.4.8",
      "css": "github:systemjs/plugin-css@0.1.20"
    }
  }
});
