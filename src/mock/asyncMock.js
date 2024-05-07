const products = [
    {
    id: 1,
    category: "bodysuits",
    title: "Kelly Body",
    price: 420,
    description: "Incluye un bodysuit negro, talla CH,M,G, Nuestras tallas bienen estandarizadas como talla Americana, Elasticidad: media, RECOMENDADO PARA COPAS B-C",
    image: "https://caterine.com.mx/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-19-at-12.57.19-PM-6.jpeg",
    stock: 3,
    },
    {
        id: 2,
        category: "sets",
        title: "Megara Set",
        price: 445,
        description: "Incluye set 3 piezas (bra, pantie y liguero), talla CH,M,G, Nuestras tallas bienen estandarizadas como talla Americana, Elasticidad: media, RECOMENDADO PARA COPAS B-C",
        image: "https://caterine.com.mx/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-19-at-8.08.44-PM.jpeg",
        stock: 4,
    },
    {
        id: 3,
        category: "curvy",
        title: "Hug Me Set",
        price: 430,
        description: "Incluye set 3 piezas (bra, pantie y liguero), talla CH,M,G, Nuestras tallas bienen estandarizadas como talla Americana, Elasticidad: media, RECOMENDADO PARA COPAS B-C",
        image: "https://caterine.com.mx/wp-content/uploads/2024/02/WhatsApp-Image-2024-01-29-at-2.35.07-PM.jpeg",
        stock: 5,
    },
    {
        id: 4,
        category: "accesorios",
        title: "Guantes Largos Princesa",
        price: 199,
        description: "Incluye un par de guantes negros, UNITALLA, Nuestras tallas bienen estandarizadas como talla Americana, Elasticidad: alta, Materiales: poliéster y elastano",
        image: "https://caterine.com.mx/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-05-at-11.22.58-AM-5.jpeg",
        stock: 1,
    },
    {
        id: 5,
        category: "bodysuits",
        title: "Femme Fatale",
        price: 420,
        description: "Incluye vestido de mesh con listón ajustable en espalda (no incluye tanga), talla CH,M,G, Nuestras tallas bienen estandarizadas como talla Americana, Elasticidad: media, RECOMENDADO PARA COPAS B-C",
        image: "https://caterine.com.mx/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-14-at-1.51.44-PM-2.jpeg",
        stock: 0,
    },
    {
        id: 6,
        category: "sets",
        title: "Lara Set",
        price: 420,
        description: "Incluye set 2 piezas (bra y pantie), talla CH,M,G, Nuestras tallas bienen estandarizadas como talla Americana, Elasticidad: media, RECOMENDADO PARA COPAS B-C",
        image: "https://caterine.com.mx/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-05-at-11.18.33-AM-2.jpeg",
        stock: 3,
    },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 2000);
    });
};

export const getProductById = (id) => {
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve(products.find((product) => product.id === id));
    }, 2000);
    });
};
export const getProductByCategory = (category) => {
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve(products.find((product) => product.category === category));
    }, 2000);
    });
};