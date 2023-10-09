import puppeteer from "puppeteer";

(async function () {
    console.log("Houston,We are launching the browser");
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto("https://es.wikipedia.org/wiki/Node.js");

    let titulo = await page.evaluate(()=> {
        const h1 = document.querySelector('h1');
        console.log(h1.innerHTML);
        return h1.innerHTML;
    })

    console.log(titulo);

    console.log("Houston, stop browser");
    // browser.close();
    console.log("Browser stopper");
})();