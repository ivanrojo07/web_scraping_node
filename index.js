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
    await page.goto('https://www.google.com/search?q=coronavirus+mundo&sxsrf=AOaemvKVyWR-Cx3B5m3_XA9nKR5-eDOvlw%3A1636676202524&ei=arKNYaeSH5q4qtsP5uOF6AE&oq=coronavirus+mundo&gs_lcp=Cgdnd3Mtd2l6EAMyCAgAEIAEELEDMgoIABCABBCHAhAUMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6CwgAELADEAcQChAeOgoIABCxAxCwAxAKOgcIABCwAxAKOgcIIxCxAhAnOgQIABBDOgQIABAKOgQIIxAnOgcIIxCwAhAnOgQIABANOgsIABCABBCxAxCDAToNCAAQgAQQhwIQsQMQFEoECEEYAVDwFViWN2CVOmgDcAB4AIABsQGIAf8GkgEDMS43mAEAoAEByAEKwAEB&sclient=gws-wiz&ved=0ahUKEwin76b9xZH0AhUanGoFHeZxAR0Q4dUDCA4&uact=5&shem=ssmd');

    // Dentro de la page html buscamos el selector de 
    // Donde se encuentra la información y lo guardamos en la variable
    var selector_casos = await page.waitForSelector('#kEEOx > div:nth-child(2) > div.wsV78c > div > div:nth-child(1) > table > tbody > tr > td:nth-child(1) > div.m7B03 > div:nth-child(1) > span');
    // evaluamos en la pagina el selector que escogimos 
    // y sacamos el texto del contenido para guardarlo en una variable
    var text = await page.evaluate(element => element.textContent,selector_casos);
    
    // imprimimos el resultado
    console.log(text);
    
    browser.close();
}

scrape();