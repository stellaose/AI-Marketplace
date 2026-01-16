export const parseMoneyValue = (value: string | number | undefined | null) => {
  if (value === undefined || value === null) return 0;

  // ! if it's already a number, just return it
  if (typeof value === "number" && !isNaN(value)) return value;

  // = if it's a string, clean it and convert
  if (typeof value === "string") {
    // -Remove all non-numeric characters except decimal point
    const cleanValue = value.replace(/[^\d.]/g, "");
    const numValue = Number(cleanValue);
    return isNaN(numValue) ? 0 : numValue;
  }
};

export const formatMoney = (value: string | number | undefined | null) => {
  const numValue = parseMoneyValue(value);
  
   return `${numValue?.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
};
