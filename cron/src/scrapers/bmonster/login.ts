import { Browser } from "puppeteer";
import htmlSelectors from "@/utils/constants/selectors";
import logger from "@/utils/logger";

/** Logs into the bmonster website in the browser */
async function login(
    browser: Browser,
    email: string,
    password: string
): Promise<void> {
    const page = await browser.newPage();
    page.setViewport({ width: 1920, height: 1080 });

    logger.info("Logging in");

    await page.goto("https://b-monster.hacomono.jp/home", {
        waitUntil: "domcontentloaded",
    });

    await page.waitForSelector(htmlSelectors.loginLaunch);
    await page.click(htmlSelectors.loginLaunch);

    await page.waitForSelector(htmlSelectors.loginForm);
    const loginFields = await page.$$(`${htmlSelectors.loginForm} input`);
    await loginFields[0].type(email);
    await loginFields[1].type(password);

    await Promise.all([
        page.waitForNavigation({ waitUntil: "domcontentloaded" }),
        page.click(`${htmlSelectors.loginForm} button`),
    ]);

    logger.info("Logged in");

    await page.close();
}

export default login;
