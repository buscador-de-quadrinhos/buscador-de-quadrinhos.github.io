const SaraivaBookAdapter = function SaraivaBookAdapter(data){

    const _getImageSrcByWidth = (width) => `${data.image.match(/.*pro_id=[0-9]*/g)[0]}&qld=90&l=${width}`;

    return {
        id: data.id,
        name: data.name,
        images: {
            small: _getImageSrcByWidth(90),
            medium: _getImageSrcByWidth(140),
            large: _getImageSrcByWidth(180)
        },
        price: `R$ ${data.price_block.price.final}`,
        priceWithDiscount: "R$ " + (parseFloat(data.price_block.price.final.replace(",", ".")) * .7).toFixed(2).toString().replace(".", ","),
        description: data.description,
        href: `https://www.saraiva.com.br/${data.url}`,
        brand: data.brand,
        isComicBook: data.categories_name_path.indexOf("livros/hqs/") !== -1,
        authorsNames: data.authors.map(author => author.name)
    };
};
export default SaraivaBookAdapter;