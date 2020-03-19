const numberFormat = value =>
  new Intl.NumberFormat('pt-BR', { maximumSignificantDigits: 10 }).format(
    value
  );

export default numberFormat;
