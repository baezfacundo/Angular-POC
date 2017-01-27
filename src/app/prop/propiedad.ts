export interface IPropiedad {
    id:number;
    title: string;
    imageUrl:string;
    description:string;
    address:string;
    main:boolean;
    visible:boolean;
    parent?:number;
    imagesUrl?:string[];
}