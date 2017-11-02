
export enum CondimentOperation {
    none,
    optional,
    force
}

export class Product {
    productId: string;
    condiment: CondimentOperation;
    label: string;
    detail: string;
    price: number;

}

export class ProductGroup {
    productGroupId: string;
    icon: string;
    label: string;
    products: Product[];
}


export class Condiment {
    productId: string;
    label: string;
    price: number;

}

export class CondimentGroup {
    label: string; // eg REMOVE, EXTRAS
    condiments: Condiment[];

}

export class SpecialGroupSelection {
    products: Product[];
    selected: Product;
}

export class SpecialProduct {
    products: SpecialGroupSelection[];
    comesWith: string[];
}


export class CartProductLine {
    productId: string;
    label: string;
    price: number;
}

export class CartTransaction {
    products: CartProductLine[];
    totalPrice: number;
}
