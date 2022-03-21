const { test, expect } = require("@playwright/test");

test("basic test", async ({ page }) => {
  await page.route("http://localhost:3456/config", (route) => {
    console.log("hi");
    return route.fulfill({
      //   headers: {
      //     "Access-Control-Allow-Origin": "*",
      //   },
      path: "./test/test.json",
    });
  });

  await page.goto("localhost:8080");
  await page.waitForSelector(".ready");

  const title = page.locator("pre");
  await expect(title).toHaveText("fake test content");
});
