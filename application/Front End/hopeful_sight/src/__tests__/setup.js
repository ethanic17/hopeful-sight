import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
//✅map, ✅donation, ✅sign in, sign up, ✅glasses display
afterEach(() => {
  cleanup();
});
