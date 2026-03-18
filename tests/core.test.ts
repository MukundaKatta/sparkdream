import { describe, it, expect } from "vitest";
import { Sparkdream } from "../src/core.js";
describe("Sparkdream", () => {
  it("init", () => { expect(new Sparkdream().getStats().ops).toBe(0); });
  it("op", async () => { const c = new Sparkdream(); await c.process(); expect(c.getStats().ops).toBe(1); });
  it("reset", async () => { const c = new Sparkdream(); await c.process(); c.reset(); expect(c.getStats().ops).toBe(0); });
});
