const getAmount = (prices, currency) => {
    /* Using the find method to find the price object that has the currency symbol that matches the
    currency passed in. */
    return prices.find(({ currency: { symbol } }) => symbol === currency).amount;
}

export default getAmount;