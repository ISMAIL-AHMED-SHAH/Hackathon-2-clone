export interface Product {
    _id: string;
    name: string;
    _type: "product";
    price: number;
    image: {
    asset: {
        _ref: string;
        _type: "image";
    };
    height: number;
    width: number;
    }
    description: string;
    slug: {
        _type: "slug";
        current: string;
    };
}