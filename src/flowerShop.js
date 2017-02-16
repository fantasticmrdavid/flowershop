import bunches from './bunches';

function calcStart(code, qty) {
  var bunchesPrices = [...bunches[code]];
  var result;

  // Find the largest bunch that reduces to 0
  bunches[code].some(() => {
    result = calcBunchesRecursive(code, qty, [...bunchesPrices]);
    if (result !== false) return true;

    bunchesPrices.pop();
  });

  return result;
}

function calcBunchesRecursive(code, qty, bunchList) {
  var smallestBunch = bunchList[0];
  var largestBunch = bunchList.pop();
  var bunchCount = parseInt(qty/largestBunch.size);
  var remaining = qty%largestBunch.size;
  var lineItem = { count: bunchCount, size: largestBunch.size, price: largestBunch.price };

  if (remaining > 0) {
    if (bunchList.length == 0) return false;
    var result = calcBunchesRecursive(code, remaining, [...bunchList]);

    return result !== false ? [lineItem].concat(result) : false;
  }
  else {
    return [lineItem];
  }
}

function subtotal(result) {
  var subtotal = 0;
  result.forEach((lineItem) => {
    subtotal += lineItem.count * lineItem.price;
  });

  return subtotal.toFixed(2);
}

export default function flowerShop(code, qty) {
  var result = calcStart(code, qty);
  var output = `${qty} ${code} $${subtotal(result)}`;

  result.forEach((item) => {
    output += `\n${item.count} x ${item.size} $${item.price}`;
  });

  return output;
}
