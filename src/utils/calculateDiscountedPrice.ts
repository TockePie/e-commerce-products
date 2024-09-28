const calculateDiscountedPrice = (
  price: number,
  discountPercentage: number
) => {
  const discountedPrice = price - (price * discountPercentage) / 100;
  return parseFloat(discountedPrice.toFixed(2));
};

export default calculateDiscountedPrice;
