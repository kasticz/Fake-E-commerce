export default function findMousesAnalog(mainMouse, toCheckMouse) {
  const desiredMaxPrice =
    Math.round(mainMouse.price * ((100 - mainMouse.discount) / 100) * 1.25) +
    1000;
  const desiredMinDpi = mainMouse.dpi * 0.7;

  const itemPrice = toCheckMouse.price * ((100 - toCheckMouse.discount) / 100);
  const itemDpi = toCheckMouse.dpi;
  const itemWireless = toCheckMouse.wireless;
  return (
    itemPrice < desiredMaxPrice &&
    itemDpi > desiredMinDpi &&
    itemWireless === mainMouse.wireless &&
    toCheckMouse.id !== mainMouse.id
  );
}
