import getAmount from "./getAmount";

const getCartDetails = (cart, currency) => {
    /* Getting the total number of items in the cart. */
    const totalItems = cart.map(({ quantity }) => quantity)
        .reduce((accumulator, item) => accumulator + item, 0);

    /* Getting the total cost of the cart. */
    let subTotal = cart
        .map(
            ({ quantity, productDetails: { prices } }) =>
                quantity * getAmount(prices, currency)
        )
        .reduce((accumulator, item) => accumulator + item, 0);

   /* Converting the subTotal to a float and then rounding it to 2 decimal places. */
    subTotal = parseFloat(Number.parseFloat(subTotal).toFixed(2));
    const taxPercentage = 21;
    const tax = parseFloat(
        Number.parseFloat((taxPercentage / 100) * subTotal).toFixed(2)
    );
    const totalCost = parseFloat(Number.parseFloat(subTotal + tax).toFixed(2));

    return {
        totalItems,
        tax,
        taxPercentage,
        totalCost
    };
};

export default getCartDetails;