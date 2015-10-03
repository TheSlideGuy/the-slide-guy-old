System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "typescript",
  paths: {
    "npm:*": "vendor/npm/*",
    "github:*": "vendor/github/*"
  },

  map: {
    "angular": "github:angular/bower-angular@1.4.7",
    "angular-material": "github:angular/bower-material@0.11.2",
    "typescript": "npm:typescript@1.6.2",
    "github:angular/bower-angular-animate@1.4.7": {
      "angular": "github:angular/bower-angular@1.4.7"
    },
    "github:angular/bower-angular-aria@1.4.7": {
      "angular": "github:angular/bower-angular@1.4.7"
    },
    "github:angular/bower-material@0.11.2": {
      "angular": "github:angular/bower-angular@1.4.7",
      "angular-animate": "github:angular/bower-angular-animate@1.4.7",
      "angular-aria": "github:angular/bower-angular-aria@1.4.7",
      "css": "github:systemjs/plugin-css@0.1.18"
    }
  }
});
