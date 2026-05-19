export default function calculateDiscountedPrice(
  price: number,
  discountPercentage: number,
) {
  const discountedPrice = price - (price * discountPercentage) / 100;
  return parseFloat(discountedPrice.toFixed(2));
}
