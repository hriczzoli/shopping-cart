//get visible products - modifying the list by setting filters
export default (products, { color, size }) => {
    return products.filter((product) => {
        const colorMatch = product.color.includes(color);
        const sizeMatch = product.size.includes(size);

        return colorMatch && sizeMatch;
    })
};