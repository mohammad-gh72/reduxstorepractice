export function formatPrice(priceInCents) {
  const priceInDollars = priceInCents / 100;
  const format = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(priceInDollars);

  return format;
}
