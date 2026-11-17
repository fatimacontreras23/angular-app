export interface Producto {
    id: number;
    price: number;
    title: string;
    description: string;
    category: string;
    image:string;
    rating:number;
    rate:number;
    count:number;
    

}

export type ProductInput= Pick<Producto, 'title' | 'price' | 'description' | 'category' | 'image'> 
   