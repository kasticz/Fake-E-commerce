export default function findMatsAnalogs(mainProduct, toCheckProduct) {
  const tempPrice = Math.round(
    mainProduct.price * ((100 - mainProduct.discount) / 100) * 1.5
  );
  const desiredMaxPrice = tempPrice < 1000 ? 1000 : tempPrice
  const desiredCovering = mainProduct.covering;
  const desiredMinLength = mainProduct.length * 0.7;
  const desiredMaxLength = mainProduct.length * 1.3;
  const desiredMinWidth = mainProduct.width * 0.7;
  const desiredMaxWidth = mainProduct.width * 1.3;

  const itemPrice = Math.round(
    toCheckProduct.price * ((100 - toCheckProduct.discount) / 100)
  );
  const itemCovering = toCheckProduct.covering;
  const itemLength = toCheckProduct.length;
  const itemWidth = toCheckProduct.width;

  const verdict =
    itemPrice < desiredMaxPrice &&
    (itemCovering === desiredCovering || itemCovering === "speed+control") &&
    itemLength < desiredMaxLength &&
    itemLength > desiredMinLength &&
    itemWidth > desiredMinWidth &&
    itemWidth < desiredMaxWidth &&
    toCheckProduct.id !== mainProduct.id;

  console.log(verdict)

  return verdict;
}
