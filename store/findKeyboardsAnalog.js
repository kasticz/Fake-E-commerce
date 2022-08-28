export default function findMatsAnalogs(mainProduct, toCheckProduct) {
  if (mainProduct.id === toCheckProduct.id) return false;
  const DesiredMinPrice = Math.round(
    mainProduct.price * ((100 - mainProduct.discount) / 100) * 0.5
  );
  const desiredMaxPrice = Math.round(
    mainProduct.price * ((100 - mainProduct.discount) / 100) * 1.5
  );
  const desiredMinNumberOfKeys = mainProduct.keys * 0.8;
  const desiredMaxNumberOfKeys = mainProduct.keys * 1.2;
  const desiredType = mainProduct.type;
  const desiredWireless = mainProduct.wireless;

  const itemPrice = Math.round(
    toCheckProduct.price * ((100 - toCheckProduct.discount) / 100)
  );
  const itemNumberOfKeys = toCheckProduct.keys;
  const itemType = toCheckProduct.type;
  const itemWireless = toCheckProduct.wireless;

  let score = 0;
  if (itemType === desiredType) score++;
  if (itemWireless === desiredWireless) score++;
  if (
    itemNumberOfKeys < desiredMaxNumberOfKeys &&
    itemNumberOfKeys > desiredMinNumberOfKeys
  )
    score++;

  return (
    score > 1 && itemPrice < desiredMaxPrice && itemPrice > DesiredMinPrice
  );
}
