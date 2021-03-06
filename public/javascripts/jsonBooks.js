/*var book = {
    "year": "1967",
    "name": "Cien años de soledad",
    "autor": "Gabriel Garcia",
    "descripcion": "Cien años de soledad es una novela del escritor colombiano Gabriel García Márquez, ganador del Premio Nobel de Literatura en 1982",
    "price": 5,
    "canPurchase": false,
    "agotado": false,
};*/

var books = [
    {
        "year": "1967",
        "name": "Cien años de soledad",
        "autor": "Gabriel Garcia",
        "price": 5,
        "descripcion": "Es considerada una obra maestra de la literatura hispanoamericana y universal, así como una de las obras más traducidas y leídas en español.",
        "canPurchase": true,
        "agotado": false,
        "image": "images/Cien-anos-de-soledad.jpg",
        "comentarios": [
            {
                "estrellas": 5,
                "cuerpo": "Me gusta este libro",
                "autor": "andres"
            }
        ]
    },
    {
        "year": "1873",
        "name": "La vuelta al mundo en ochenta dias",
        "autor": "Julio Verne",
        "price": 5,
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris purus nisl, feugiat ac porta quis, maximus vitae odio. Suspendisse eu nisl ipsum. Duis sed ultricies elit. Donec tincidunt semper diam, sed mollis dui posuere eget. Nam vel nisl faucibus, elementum massa a, malesuada ex. Donec interdum feugiat sodales. Vestibulum euismod erat quis urna interdum, in elementum turpis vulputate. Curabitur consectetur mi felis, feugiat eleifend augue porttitor sed. Aliquam scelerisque malesuada libero. Nam finibus eros at vestibulum tincidunt. Fusce fringilla id ligula ut placerat. Etiam nec tellus vel velit vestibulum malesuada nec nec leo. Fusce tristique ultrices laoreet. Nam id viverra eros, nec imperdiet lectus. Sed maximus quam dui, in luctus velit finibus sed. Quisque quis mauris eget libero malesuada vestibulum non gravida ipsum.",
        "canPurchase": false,
        "agotado": false,
        "image": "images/vuelta-al-mundo.jpg",
        "comentarios": [
            {
                "estrellas": 4,
                "cuerpo": "Un libro para repetir",
                "autor": "luis"
            }
        ]
    },
    {
        "year": "1843",
        "name": "Corazon delator",
        "autor": "Edgar Allan Poe",
        "price": 10,
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris purus nisl, feugiat ac porta quis, maximus vitae odio. Suspendisse eu nisl ipsum. Duis sed ultricies elit. Donec tincidunt semper diam, sed mollis dui posuere eget. Nam vel nisl faucibus, elementum massa a, malesuada ex. Donec interdum feugiat sodales. Vestibulum euismod erat quis urna interdum, in elementum turpis vulputate. Curabitur consectetur mi felis, feugiat eleifend augue porttitor sed. Aliquam scelerisque malesuada libero. Nam finibus eros at vestibulum tincidunt. Fusce fringilla id ligula ut placerat. Etiam nec tellus vel velit vestibulum malesuada nec nec leo. Fusce tristique ultrices laoreet. Nam id viverra eros, nec imperdiet lectus. Sed maximus quam dui, in luctus velit finibus sed. Quisque quis mauris eget libero malesuada vestibulum non gravida ipsum.",
        "canPurchase": false,
        "agotado": false,
        "image": "images/corazon-delator.jpg",
        "comentarios": [
            {
                "estrellas": 4,
                "cuerpo": "Me gusta el autor",
                "autor": "andrea"
            }
        ]
    },
    {
        "year": "1943",
        "name": "El principito",
        "autor": "Antoine de Saint-Exupéry",
        "price": 15,
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris purus nisl, feugiat ac porta quis, maximus vitae odio. Suspendisse eu nisl ipsum. Duis sed ultricies elit. Donec tincidunt semper diam, sed mollis dui posuere eget. Nam vel nisl faucibus, elementum massa a, malesuada ex. Donec interdum feugiat sodales. Vestibulum euismod erat quis urna interdum, in elementum turpis vulputate. Curabitur consectetur mi felis, feugiat eleifend augue porttitor sed. Aliquam scelerisque malesuada libero. Nam finibus eros at vestibulum tincidunt. Fusce fringilla id ligula ut placerat. Etiam nec tellus vel velit vestibulum malesuada nec nec leo. Fusce tristique ultrices laoreet. Nam id viverra eros, nec imperdiet lectus. Sed maximus quam dui, in luctus velit finibus sed. Quisque quis mauris eget libero malesuada vestibulum non gravida ipsum.",
        "canPurchase": true,
        "agotado": false,
        "image": "images/el-principito.jpg",
        "comentarios": [
            {
                "estrellas": 5,
                "cuerpo": "Excelente este libro",
                "autor": "juan"
            },
            {
                "estrellas": 4,
                "cuerpo": "Buen libro",
                "autor": "Andres"
            }
        ]
    },
    {
        "year": "1915",
        "name": "Metamorfosis",
        "autor": "Franz Kafka",
        "price": 8,
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris purus nisl, feugiat ac porta quis, maximus vitae odio. Suspendisse eu nisl ipsum. Duis sed ultricies elit. Donec tincidunt semper diam, sed mollis dui posuere eget. Nam vel nisl faucibus, elementum massa a, malesuada ex. Donec interdum feugiat sodales. Vestibulum euismod erat quis urna interdum, in elementum turpis vulputate. Curabitur consectetur mi felis, feugiat eleifend augue porttitor sed. Aliquam scelerisque malesuada libero. Nam finibus eros at vestibulum tincidunt. Fusce fringilla id ligula ut placerat. Etiam nec tellus vel velit vestibulum malesuada nec nec leo. Fusce tristique ultrices laoreet. Nam id viverra eros, nec imperdiet lectus. Sed maximus quam dui, in luctus velit finibus sed. Quisque quis mauris eget libero malesuada vestibulum non gravida ipsum.",
        "canPurchase": true,
        "agotado": true,
        "image": "images/metamorfosis.jpg",
        "comentarios": [
            {
                "estrellas": 5,
                "cuerpo": "Me gusta este libro",
                "autor": "andres"
            }
        ]
    }
];