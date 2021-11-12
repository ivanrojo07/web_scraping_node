const puppeteer = require('puppeteer');

// Crear función asyncrona 
async function scrape() {
    // Crear una instancia del navegador
    // de la libreria puppeteer
    const browser = await puppeteer.launch();
    // Definir esta variable para excavar
    //  dentro del html de una pagina
    const page = await browser.newPage();

    // Vamos a la url indicada
    // y esperemos que cargue con await
    await page.goto('https://www.thesaurus.com/browse/smart');

    // Dentro de la page html buscamos el selector de 
    // Donde se encuentra la información y lo guardamos en la variable
    var element = await page.waitForSelector('#meanings > div.css-ixatld.e15rdun50 > ul > li:nth-child(1) > a');
    // evaluamos en la pagina el selector que escogimos 
    // y sacamos el texto del contenido para guardarlo en una variable
    var text = await page.evaluate(element => element.textContent,element);
    
    // imprimimos el resultado
    console.log(text);
    
    browser.close();
}

scrape();