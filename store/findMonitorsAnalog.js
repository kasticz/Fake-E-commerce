export default function findMonitorsAnalog(mainProduct, toCheckProduct) {
  if (mainProduct.id === toCheckProduct.id) return false;
  const DesiredMinPrice = Math.round(
    mainProduct.price * ((100 - mainProduct.discount) / 100) * 0.5
  );
  const desiredMaxPrice = Math.round(
    mainProduct.price * ((100 - mainProduct.discount) / 100) * 1.5
  );
  const desiredFreq = mainProduct.maxHz;
  const desiredMatrix = mainProduct.matrix;
  const desiredMinDia = mainProduct.diagonal * 0.8;
  const desiredRes = mainProduct.resolution;

  const itemPrice = toCheckProduct.price * ((100 - toCheckProduct.discount) / 100);
  const itemFreq = toCheckProduct.maxHz;
  const itemMatrix = toCheckProduct.matrix;
  const itemDia = toCheckProduct.diagonal;
  const itemRes = toCheckProduct.resolution;

  let score = 0;
  if (desiredFreq === itemFreq || itemFreq > desiredFreq) score++;
  if (desiredMatrix === itemMatrix) score++;
  if (itemDia > desiredMinDia) score++;
  if (itemRes === desiredRes) score++;

  return (
    score > 2 && itemPrice < desiredMaxPrice && itemPrice > DesiredMinPrice
  );
}
