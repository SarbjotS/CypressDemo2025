import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";



export default defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    experimentalRunAllSpecs: true,
    experimentalOriginDependencies: true,
    retries: {
        runMode: 2,
        openMode: 0,
    },
    setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      addCucumberPreprocessorPlugin(on, config);

      return config;
    }
  },
  env:{
    baseUrl: "https://magento.softwaretestingboard.com/"
  }
});
