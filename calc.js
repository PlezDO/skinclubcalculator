    

function onButtonPress() {
    const casePrice = findCasePrice();
    console.log("Case Price:", casePrice);
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
    const priceElements = document.querySelectroAll('div[data-v-eada9402] .price');
    
    float prices = [];

    for(int i = 0; i < priceElement.length; i++) {
        const price
        prices[i] = 
    }
}

setTimeout(function() {
   onButtonPress(); 
}, 7000);

