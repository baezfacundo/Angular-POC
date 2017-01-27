import { Injectable } from '@angular/core';
import { IPropiedad } from './propiedad';

@Injectable()
export class PropiedadService {
    gerPropiedades():IPropiedad[]{
        return [
        {
            "id": 1,
            "title": `La Tranquera`,
            "imageUrl": `img/portfolio/LaTranquera/latranquera.jpg`,
            "description": `La tranquera dispone de un depto de 2 amb., un loft (max. 5p), y 2 casas.`,
            "address": `Av.5 N°656 entre paseo 106 y 107`,
            "main": true,
            "visible": false,
            "parent": null,
            "imagesUrl":null,
        },
        {
            "id": 2,
            "title": `J.B`,
            "imageUrl": `img/portfolio/JB/jb.jpg`,
            "description": `El J.B posee 3 deptos de 2amb. y 2 depto de 3amb.`,
            "address": `Paseo 107 entre Av.4 y Av.5`,
            "main": true,
            "visible": false,
            "parent": null,
            "imagesUrl":null,
        },

        {
            "id": 3,
            "title": `Tranquera`,
            "imageUrl": `img/portfolio/LaTranquera/photos/LaTranquera/1.jpg`,
            "description": `Casa de 3 amb. Cocina comedor, baño y 2 dormitorios. Parque en el frente y trasero. Con parrilla, entrada de auto.`,
            "address": `Av.5 N°656 entre paseo 106 y 107`,
            "main": false,
            "visible": false,
            "parent": 1,
            "imagesUrl":[
                'img/portfolio/LaTranquera/photos/LaTranquera/1.jpg',
                'img/portfolio/LaTranquera/photos/LaTranquera/2.jpg',
                'img/portfolio/LaTranquera/photos/LaTranquera/3.jpg',
                'img/portfolio/LaTranquera/photos/LaTranquera/4.jpg',
                'img/portfolio/LaTranquera/photos/LaTranquera/5.jpg',
            ]
        },
      
        {
            "id": 4,
            "title": `La Casita`,
            "imageUrl": `img/portfolio/LaTranquera/photos/LaCasita/1.jpg`,
            "description": `Casa de 3 amb. Cocina comedor, baño y 2 dormitorios. Parque en el frente y trasero. Con parrilla, entrada de auto.`,
            "address": `Av.5 N°656 entre paseo 106 y 107`,
            "main": false,
            "visible": false,
            "parent": 1,
            "imagesUrl":[
                'img/portfolio/LaTranquera/photos/LaCasita/1.jpg',
                'img/portfolio/LaTranquera/photos/LaCasita/2.jpg',
                'img/portfolio/LaTranquera/photos/LaCasita/3.jpg',
                'img/portfolio/LaTranquera/photos/LaCasita/4.jpg',
                'img/portfolio/LaTranquera/photos/LaCasita/5.jpg',
                'img/portfolio/LaTranquera/photos/LaCasita/6.jpg',
                'img/portfolio/LaTranquera/photos/LaCasita/7.jpg',
                'img/portfolio/LaTranquera/photos/LaCasita/8.jpg',
                'img/portfolio/LaTranquera/photos/LaCasita/9.jpg',
                'img/portfolio/LaTranquera/photos/LaCasita/10.jpg',
                'img/portfolio/LaTranquera/photos/LaCasita/11.jpg',
                'img/portfolio/LaTranquera/photos/LaCasita/12.jpg',
            ]
        },
        {
            "id": 5,
            "title": `Anexo`,
            "imageUrl": `img/portfolio/LaTranquera/photos/Anexo/1.jpg`,
            "description": `Departamento de 2 amb. Cocina comedor, baño y 1 dormitorio.`,
            "address": `Av.5 N°656 entre paseo 106 y 107`,
            "main": false,
            "visible": false,
            "parent": 1,
           "imagesUrl":[
                'img/portfolio/LaTranquera/photos/Anexo/1.jpg',
                'img/portfolio/LaTranquera/photos/Anexo/2.jpg',
                'img/portfolio/LaTranquera/photos/Anexo/3.jpg',
                'img/portfolio/LaTranquera/photos/Anexo/4.jpg',
                'img/portfolio/LaTranquera/photos/Anexo/5.jpg',
                'img/portfolio/LaTranquera/photos/Anexo/6.jpg',
                'img/portfolio/LaTranquera/photos/Anexo/7.jpg',
                'img/portfolio/LaTranquera/photos/Anexo/8.jpg',
                'img/portfolio/LaTranquera/photos/Anexo/9.jpg',
            ]
        },
        {
            "id": 6,
            "title": `Loft`,
            "imageUrl": `img/portfolio/LaTranquera/photos/Loft/1.jpg`,
            "description": `Amplio loft con baño`,
            "address": `Av.5 N°656 entre paseo 106 y 107`,
            "main": false,
            "visible": false,
            "parent": 1,
            "imagesUrl":[
                'img/portfolio/LaTranquera/photos/Loft/1.jpg',
                'img/portfolio/LaTranquera/photos/Loft/2.jpg',
                'img/portfolio/LaTranquera/photos/Loft/3.jpg',
                'img/portfolio/LaTranquera/photos/Loft/4.jpg',
                'img/portfolio/LaTranquera/photos/Loft/5.jpg',
                'img/portfolio/LaTranquera/photos/Loft/6.jpg',
                'img/portfolio/LaTranquera/photos/Loft/7.jpg',
            ]
        },

        {
            "id": 7,
            "title": `Departamento 1`,
            "imageUrl": `img/portfolio/JB/photos/Depto_1/1.jpg`,
            "description": `Departamento 2 amb. Con parrilla, entrada de auto.`,
            "address": `Paseo 107 entre Av.4 y Av.5`,
            "main": false,
            "visible": false,
            "parent": 2,
            "imagesUrl":[
                'img/portfolio/LaTranquera/photos/Depto_1/1.jpg',
                'img/portfolio/LaTranquera/photos/Depto_1/2.jpg',
                'img/portfolio/LaTranquera/photos/Depto_1/3.jpg',
                'img/portfolio/LaTranquera/photos/Depto_1/4.jpg',
                'img/portfolio/LaTranquera/photos/Depto_1/5.jpg',
                'img/portfolio/LaTranquera/photos/Depto_1/6.jpg',
                'img/portfolio/LaTranquera/photos/Depto_1/7.jpg',
                'img/portfolio/LaTranquera/photos/Depto_1/8.jpg',
            ]
        },
        {
            "id": 8,
            "title": `Departamento 2`,
            "imageUrl": `img/portfolio/JB/photos/Depto_2/1.jpg`,
            "description": `Departamento 2 amb. Con parrilla, entrada de auto.`,
            "address": `Paseo 107 entre Av.4 y Av.5`,
            "main": false,
            "visible": false,
            "parent": 2,
            "imagesUrl":[
                'img/portfolio/LaTranquera/photos/Depto_2/1.jpg',
                'img/portfolio/LaTranquera/photos/Depto_2/2.jpg',
                'img/portfolio/LaTranquera/photos/Depto_2/3.jpg',
                'img/portfolio/LaTranquera/photos/Depto_2/4.jpg',
                'img/portfolio/LaTranquera/photos/Depto_2/5.jpg',
                'img/portfolio/LaTranquera/photos/Depto_2/6.jpg',
                'img/portfolio/LaTranquera/photos/Depto_2/7.jpg',
                'img/portfolio/LaTranquera/photos/Depto_2/8.jpg',
            ]
        },
        {
            "id": 9,
            "title": `Departamento 3`,
            "imageUrl": `img/portfolio/JB/photos/Depto_3/1.jpg`,
            "description": `Departamento 3 amb. Con parrilla, entrada de auto.`,
            "address": `Paseo 107 entre Av.4 y Av.5`,
            "main": false,
            "visible": false,
            "parent": 2,
            "imagesUrl":[
                'img/portfolio/LaTranquera/photos/Depto_3/1.jpg',
                'img/portfolio/LaTranquera/photos/Depto_3/2.jpg',
                'img/portfolio/LaTranquera/photos/Depto_3/3.jpg',
                'img/portfolio/LaTranquera/photos/Depto_3/4.jpg',
                'img/portfolio/LaTranquera/photos/Depto_3/5.jpg',
                'img/portfolio/LaTranquera/photos/Depto_3/6.jpg',
                'img/portfolio/LaTranquera/photos/Depto_3/7.jpg',
                'img/portfolio/LaTranquera/photos/Depto_3/8.jpg',
                'img/portfolio/LaTranquera/photos/Depto_3/9.jpg',
                'img/portfolio/LaTranquera/photos/Depto_3/10.jpg',
                'img/portfolio/LaTranquera/photos/Depto_3/11.jpg',
                'img/portfolio/LaTranquera/photos/Depto_3/12.jpg',
                'img/portfolio/LaTranquera/photos/Depto_3/13.jpg',
                'img/portfolio/LaTranquera/photos/Depto_3/14.jpg',
                'img/portfolio/LaTranquera/photos/Depto_3/15.jpg',
                'img/portfolio/LaTranquera/photos/Depto_3/16.jpg',
            ]
        },
        {
            "id": 10,
            "title": `Departamento 4`,
            "imageUrl": `img/portfolio/JB/photos/Depto_4/3.jpg`,
            "description": `Departamento 3 amb. Con parrilla, entrada de auto.`,
            "address": `Paseo 107 entre Av.4 y Av.5`,
            "main": false,
            "visible": false,
            "parent": 2,
            "imagesUrl":[
                'img/portfolio/LaTranquera/photos/Depto_4/1.jpg',
                'img/portfolio/LaTranquera/photos/Depto_4/2.jpg',
                'img/portfolio/LaTranquera/photos/Depto_4/3.jpg',
                'img/portfolio/LaTranquera/photos/Depto_4/4.jpg',
                'img/portfolio/LaTranquera/photos/Depto_4/5.jpg',
                'img/portfolio/LaTranquera/photos/Depto_4/6.jpg',
                'img/portfolio/LaTranquera/photos/Depto_4/7.jpg',
                'img/portfolio/LaTranquera/photos/Depto_4/8.jpg',
                'img/portfolio/LaTranquera/photos/Depto_4/9.jpg',
                'img/portfolio/LaTranquera/photos/Depto_4/10.jpg',
                'img/portfolio/LaTranquera/photos/Depto_4/11.jpg',
                'img/portfolio/LaTranquera/photos/Depto_4/12.jpg',
                'img/portfolio/LaTranquera/photos/Depto_4/13.jpg',
                'img/portfolio/LaTranquera/photos/Depto_4/14.jpg'
            ]
        },
        {
            "id": 11,
            "title": `Departamento 5`,
            "imageUrl": `img/portfolio/JB/photos/Depto_5/3.jpg`,
            "description": `Departamento 2 amb. Con parrilla, entrada de auto.`,
            "address": `Paseo 107 entre Av.4 y Av.5`,
            "main": false,
            "visible": false,
            "parent": 2,
            "imagesUrl":[
                'img/portfolio/LaTranquera/photos/Depto_5/1.jpg',
                'img/portfolio/LaTranquera/photos/Depto_5/2.jpg',
                'img/portfolio/LaTranquera/photos/Depto_5/3.jpg',
                'img/portfolio/LaTranquera/photos/Depto_5/4.jpg',
                'img/portfolio/LaTranquera/photos/Depto_5/5.jpg',
                'img/portfolio/LaTranquera/photos/Depto_5/6.jpg',
                'img/portfolio/LaTranquera/photos/Depto_5/7.jpg',
                'img/portfolio/LaTranquera/photos/Depto_5/8.jpg',
            ]
        }
        
       
        ];
    }
}