// Here we creating Interface

// export interface IProduct {

//     productId: number;
//     productName: string;
//     productCode: string;
//     releaseDate: string;
//     description: string;
//     price: number;
//     starRating: number;
//     imageUrl: string;

// }


export interface IProduct {

    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    }

}

