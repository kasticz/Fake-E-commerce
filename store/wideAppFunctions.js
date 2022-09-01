export function cartTotalAmountWord(totalAmount) {
  const strAmount = String(totalAmount);
  const totalPriceWord =
    totalAmount == 1
      ? "товар"
      : totalAmount < 5 && totalAmount > 1
      ? "товара"
      : totalAmount > 20 && !(strAmount[strAmount.length - 1] == 0)
      ? strAmount[strAmount.length - 1] == 1
        ? "товар"
        : strAmount[strAmount.length - 1] < 5
        ? "товара"
        : "товаров"
      : "товаров";
      return totalPriceWord
}
