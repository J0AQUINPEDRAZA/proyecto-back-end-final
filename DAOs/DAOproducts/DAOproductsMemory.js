import logger from '../../utils/winston.js'

let products = [
    {
        _id: 0,
        nombre: 'computadora',
        precio: 90000,
        descripcion: 'computadora lenovo',
        thumbnail: 'https://i.ibb.co/wRYJdcn/compu3.jpg',
        stock: 4,
    },
    {
        _id: 1,
        nombre: 'celular iphone',
        precio: 400000,
        descripcion: 'iphone 12 pro',
        thumbnail: 'https://i.ibb.co/6bLfdx6/celular3.jpg',
        stock: 7,
    },
    {
        _id: 2,
        nombre: 'tostadora',
        precio: 15000,
        descripcion: 'tostadora atma',
        thumbnail: 'https://i.ibb.co/xq9Rkdj/tostadora.jpg',
        stock: 4,
    },
    {
        _id: 3,
        nombre: 'pava',
        precio: 18000,
        descripcion: 'pava electrica',
        thumbnail: 'https://i.ibb.co/sJmxCwM/pava.jpg',
        stock: 13,
    },
    {
        _id: 4,
        nombre: 'remera',
        precio: 7000,
        descripcion: 'remera adidas',
        thumbnail: 'https://i.ibb.co/rvjfpyz/remera1.jpg',
        stock: 70,
    },
    {
        _id: 5,
        nombre: 'zapatilla',
        precio: 21000,
        descripcion: 'zapatilla adidas',
        thumbnail: 'https://i.ibb.co/pQCPH1d/zapatilla1.jpg',
        stock: 1,
    },
    {
        _id: 6,
        nombre: 'riñonera',
        precio: 9000,
        descripcion: 'riñonera everlast',
        thumbnail: 'https://i.ibb.co/r5S2yn3/ri-onera.jpg',
        stock: 2,
    },
    {
        _id: 7,
        nombre: 'mesa',
        precio: 25000,
        descripcion: 'mesa ratona',
        thumbnail: 'https://i.ibb.co/b2Nr6N7/mesa.jpg',
        stock: 8,
    },
    {
        _id: 8,
        nombre: 'campera',
        precio: 32000,
        descripcion: 'campera puffer',
        thumbnail: 'https://i.ibb.co/tZLrqQJ/campera1.jpg',
        stock: 6,
    },
    {
        _id: 9,
        nombre: 'set matero',
        precio: 45000,
        descripcion: 'set matero stanley',
        thumbnail: 'https://i.ibb.co/KwjpfnJ/mate.jpg',
        stock: 11,
    },
    {
        _id: 10,
        nombre: 'silla',
        precio: 10000,
        descripcion: 'silla nordica comoda',
        thumbnail: 'https://i.ibb.co/WNrXLW5/silla1.jpg',
        stock: 17,
    },
    {
        _id: 11,
        nombre: 'laptop',
        precio: 250000,
        descripcion: 'laptop portatil I7',
        thumbnail: 'https://i.ibb.co/PxH2mHT/compu2.jpg',
        stock: 5,
    },
    {
        _id: 12,
        nombre: 'zapatilla',
        precio: 18500,
        descripcion: 'zapatilla new balance',
        thumbnail: 'https://i.ibb.co/2yDNqYZ/zapatilla2.jpg',
        stock: 22,
    },
    {
        _id: 13,
        nombre: 'remera homero',
        precio: 5300,
        descripcion: 'remera homero simpsons',
        thumbnail: 'https://i.ibb.co/DfzSjtX/remera2.jpg',
        stock: 9,
    }
]

export class DAOproductsMemory {
    getProductData = async () => {
        try {
            return products
        } catch (e) {
            logger.log('error', `❌ Error cant get products data: ${e}`)
        }
    }

    postProductData = async (data) => {
        try {
            return products.push(data)
        } catch (e) {
            logger.log('error', `❌ Error cant post product data: ${e}`)
        }
    }
}
