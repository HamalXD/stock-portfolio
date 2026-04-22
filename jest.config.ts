import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",

  testEnvironment: "jsdom",

  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.test.json",
      },
    ],
  },

  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],

  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
};

export default config;
