    

function onButtonPress() {
    const casePrice = findCasePrice();
    console.log("Case Price:", casePrice);
    const prices  = findSkinPrices();
    console.log(prices);
    const odds = findSkinOdds();
    console.log(odds);
    const ev = calculator(prices, odds, casePrice);
    console.log(ev);
}

function calculator(prices, odds, casePrice) {
    let evs = [];
    if(prices.length != odds.length) {
        console.log("Failed to Find Corresponding prices/odds");
        return;
    }

    let ev = 0;
    for(let i = 0; i < prices.length; i++) {
        evs.push(prices[i] * odds[i]);    
    }
   // ev -= casePrice;

    let evsum = 0;
    evs.forEach((element) => {
        evsum += element;    
    });
    ev = (evsum*casePrice) / casePrice;
    return ev; 
}


function findCasePrice() {
    const priceElement = document.querySelector('span[data-qa="sticker_case_price_element"]');

    if (priceElement) {
        const priceText = priceElement.textContent;
        const priceNumeric = parseFloat(priceText.replace(/\$/g, ""));
    

        if(!isNaN(priceNumeric)) {
            return priceNumeric;
        }
    }
    return 'Error finding case price';
}

function findSkinPrices() {
    const priceElements = document.querySelectorAll('div[data-v-eada9402] .price');
    
    const prices = [];

    for(let i = 0; i < priceElements.length; i++) {
        const priceText = priceElements[i].textContent;
        const priceNumeric = parseFloat(priceText.replace(/\$/g, ""));
        if(!isNaN(priceNumeric)) {
          // prices[i] =  'Error fetching skin price';

           prices[i] = priceNumeric;
            continue;
        }
        prices[i] = priceNumeric;

    }

    return prices;
}

function findSkinOdds() {
    //const oddsElements = document.querySelectorAll('div[data-v-eada9402] .odds');
    const oddsElements = document.querySelectorAll('div.table-cell.odds');
    const odds = [];

 
    for(let i = 0; i < oddsElements.length; i++) {
        const oddText = oddsElements[i].textContent;
        const oddNumeric = parseFloat(oddText.replace('%', ''));
        if(!isNaN(oddNumeric)) {
          // prices[i] =  'Error fetching skin price';

           odds.push(oddNumeric/100);
           continue;
        }
        //odds[i] = oddNumeric;

    }
    return odds;
}

setTimeout(function() {
   onButtonPress(); 
}, 7000);

