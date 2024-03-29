// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

// Examples
// mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
// mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
// mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
// mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free

function mango(quantity, price) {
  if (price === 0 || quantity === 0) {
    return 0;
  }
  if (quantity < 3) {
    return price * quantity;
  } else if (quantity === 3) {
    return price * 2;
  } else {
    const packages = Math.floor(quantity / 3);
    const aloneMangos = quantity % 3;
    if (aloneMangos != 0) {
      return aloneMangos * price + packages * 2 * price;
    } else {
      // modulo =0
      return packages * 2 * price;
    }
  }
}

//! ahhhh that was sooo eazy i had to overcomplcated that. But i am still learning, next time will be better

function mango(quantity, price) {
  return price * (quantity - Math.floor(quantity / 3));
}

//
function mango(quantity, price) {
  return Math.floor(quantity / 3) * 2 * price + (quantity % 3) * price;
}
