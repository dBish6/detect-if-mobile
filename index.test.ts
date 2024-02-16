import { isMobile } from ".";

test("Returns Properly", () => {
  const res = isMobile();
  expect(typeof res).toBe("boolean");
});
