import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";
import { hmrBootstrap } from "./hmr";

console.debug("Environment", environment);

if (environment.production) {
  enableProdMode();
}

let bootstrap = () => platformBrowserDynamic().bootstrapModule(AppModule);

if (environment.hmr) {
  if (module["hot"]) {
    hmrBootstrap(module, bootstrap);
  } else {
    console.error("HMR is not enabled for webpack-dev-server!");
    console.log("Are you using the --hmr flag for ng serve?");
    bootstrap().catch((err) => console.error(err));
  }
} else {
  bootstrap().catch((err) => console.error(err));
}