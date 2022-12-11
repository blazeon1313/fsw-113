// JS for warehouse HTML

const parts = [ 
    { partNbr: 'R5AQDVU', partDescr: 'Halbendozer', aisle: 'B3', qty: 14 },
    { partNbr: 'LJBKC0M', partDescr: 'Knudleknorp', aisle: 'H1', qty: 12},
    { partNbr: 'HUS51DE', partDescr: 'Knudlescheiffer', aisle: 'H1', qty: 12},
    { partNbr: 'M0XORFH', partDescr: 'Borgom Oil', aisle: 'B2', qty: 3},
    { partNbr: '35X7AP8', partDescr: 'Glundelscharf', aisle: 'C3', qty: 1},
    { partNbr: 'C1AYCAI', partDescr: 'Tschoffle', aisle: 'A4', qty: 5},
    { partNbr: 'E9IEYLS', partDescr: 'Karmandloch', aisle: 'C2', qty: 2},
    { partNbr: 'IW2I0TG', partDescr: 'Shreckendwammer', aisle: 'J4', qty: 2},
    { partNbr: '95OJTV6', partDescr: 'Dimpenaus', aisle: 'B1', qty: 16},
    { partNbr: 'LYII1MJ', partDescr: 'Lumpenknorp', aisle: 'H1', qty: 12},
    { partNbr: 'VQIL7AO', partDescr: 'Lumpenschieffer', aisle: 'H1', qty: 12},
    { partNbr: 'XF0MPS9', partDescr: 'Ratklampen', aisle: 'N2', qty: 7},
    { partNbr: 'AFU9OUG', partDescr: 'Dulpo Fittings', aisle: 'J2', qty: 4},
    { partNbr: 'E7XWGGO', partDescr: 'Flugtrimsammler', aisle: 'B3', qty:3 },
    { partNbr: '981FNC9', partDescr: 'Grosstramle', aisle: 'A1', qty: 1},
    { partNbr: 'AGSXYVZ', partDescr: 'Skirpenflatch', aisle: 'B2', qty: 2},
    { partNbr: 'V0SK0UX', partDescr: 'Lumpenmagler', aisle: 'H1', qty: 12},
    { partNbr: 'CTL40Z1', partDescr: 'Lumpenflempest', aisle: 'H1', qty: 24},
    { partNbr: 'POO9ZPM', partDescr: 'Eumonklippen', aisle: 'D2', qty: 7},
    { partNbr: 'WEYPU3Z', partDescr: 'Mumpenflipper', aisle: 'E3', qty: 1}

];

// list of each part number and qty for check-off in the "detailsList" element

let partNum = '';

parts.forEach(function(parts){
    partNum += `<div><input type='checkbox'> Name: ${parts.partDescr} - Number(${parts.partNbr}) - QTY: ${parts.qty} - Aisle: ${parts.aisle}`;
});
document.querySelector('#detailsList').innerHTML = partNum;

// if parts requiring special handling exist (in aisle B3), list of items needing 
// special packaging in the "specialPackaging" element, else remove element

let b3 = parts.filter(function(aisle){
    return aisle.aisle === 'B3';
});

let careful = '<div> Special Packaging Required:';
b3.forEach(function(aisle){
    careful += `<div> Part: (${aisle.partNbr}) / Qty: ${aisle.qty}`;
});
careful += '</div>';
document.querySelector('#specialPackaging').innerHTML = careful;

// if hazardous parts exist (in aisle J4), let employee know in the "hazardousMaterials"
// element and remind them to get gloves, else remove element

let j4 = parts.filter(function(aisle){
    return aisle.aisle === 'J4'
});

let hazMat = '<div> *Gloves Required!* <br> <div> Hazardous Parts: ';
j4.forEach(function(aisle){
    hazMat += `<div> Part: (${aisle.partNbr}) / Qty: ${aisle.qty}`;
});

hazMat += '</div>';
document.querySelector('#hazardousMaterials').innerHTML = hazMat;

// if all items in the order are small parts (aisle H1), then let employee know that they should take 
// a basket and go dirctly to aisle H1

let small = parts.filter(function(parts){
    return parts.aisle === 'H1';
});

let tiny = '<div> *Take a basket to aisle H1* <br> <div> Small Parts: ';
small.forEach(function(aisle){
    tiny += `<div> Part: (${aisle.partNbr}) / QTY: ${aisle.qty}`;
});

tiny += '</div>';
document.querySelector('#smallItemsOnly').innerHTML = tiny;

// if there are large items (anthing in aisles S, T, or U), then let the employee know in the "forkLiftNeeded"
// element that they will need to reserve a forklift, else remove the element

let large = parts.filter(function(item){
    return item.aisle === 'S' && 'U' && 'T';
});

let lift = '<div>Forklift: <br> <div> (Reserve Forklift)';
if (large.length >= 1){
    large.forEach(function(item){
        lift = `<div> Part: (${item.partNbr} / ${item.qty})`;
        lift += '</div>';
        document.querySelector('#forkLiftNeeded').innerHTML = lift;
    });
}
else {
    document.querySelector('#forkLiftNeeded').remove();
};

// sum up the total number of parts and append that number to the text already in "totalItems" element

let total = parts.reduce(function(curTotal, amount){
    return amount.qty + curTotal;
}, 0);
document.querySelector('#totalItems').innerHTML = `Total Items: ${total}`;