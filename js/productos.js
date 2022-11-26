const productos = [
    {
        id: "monitor-01",
        titulo: "SAMSUNG 01",
        imagen: "./img/monitores/01.webp",
        cantidad: 1,
        precio: 1200,
        categoria: {
            id: "monitores",
            nombre: "Monitores"
        },
    },
    {
        id: "notebook-03",
        titulo: "HP 0000903",
        imagen: "./img/notebooks/03.webp",
        cantidad: 1,
        precio: 2100,
        categoria: {
            id: "notebooks",
            nombre: "Notebooks"
        },
    },
    {
        id: "robotica-08",
        titulo: "ARDUINO 08",
        imagen: "./img/robotica/08.webp",
        cantidad: 1,
        precio: 1400,
        categoria: {
            id: "robotica",
            nombre: "Robotica"
        },
    },
    {
        id: "placa-08",
        titulo: "RTX 3080 8",
        imagen: "./img/gpus/08.webp",
        cantidad: 1,
        precio: 1850,
        categoria: {
            id: "gpus",
            nombre: "Placas de video"
        },
    },
    {
        id: "robotica-06",
        titulo: "ARDUINO 06",
        imagen: "./img/robotica/06.webp",
        cantidad: 1,
        precio: 1653,
        categoria: {
            id: "robotica",
            nombre: "Robotica"
        },
    },
    {
        id: "robotica-07",
        titulo: "ARDUINO 07",
        imagen: "./img/robotica/07.webp",
        cantidad: 1,
        precio: 1986,
        categoria: {
            id: "robotica",
            nombre: "Robotica"
        },
    },
    {
        id: "notebook-05",
        titulo: "HP 0000905",
        imagen: "./img/notebooks/05.webp",
        cantidad: 1,
        precio: 2560,
        categoria: {
            id: "notebooks",
            nombre: "Notebooks"
        },
    },
    {
        id: "notebook-06",
        titulo: "HP 0000906",
        imagen: "./img/notebooks/06.webp",
        cantidad: 1,
        precio: 2324,
        categoria: {
            id: "notebooks",
            nombre: "Notebooks"
        },
    },
    {
        id: "notebook-07",
        titulo: "HP 0000907",
        imagen: "./img/notebooks/07.webp",
        cantidad: 1,
        precio: 1452,
        categoria: {
            id: "notebooks",
            nombre: "Notebooks"
        },
    },
    {
        id: "notebook-08",
        titulo: "HP 0000908",
        imagen: "./img/notebooks/08.webp",
        cantidad: 1,
        precio: 1874,
        categoria: {
            id: "notebooks",
            nombre: "Notebooks"
        },
    },
    {
        id: "placa-07",
        titulo: "RTX 3080 7",
        imagen: "./img/gpus/07.webp",
        cantidad: 1,
        precio: 1100,
        categoria: {
            id: "gpus",
            nombre: "Placas de video"
        },
    },
    {
        id: "notebook-01",
        titulo: "HP 0000901",
        imagen: "./img/notebooks/01.webp",
        cantidad: 1,
        precio: 1570,
        categoria: {
            id: "notebooks",
            nombre: "Notebooks"
        },
    },
    {
        id: "drone-07",
        titulo: "DJI mini 007",
        imagen: "./img/drones/07.webp",
        cantidad: 1,
        precio: 1720,
        categoria: {
            id: "drones",
            nombre: "Drones"
        },
    },
    {
        id: "drone-08",
        titulo: "DJI mini 008",
        imagen: "./img/drones/08.webp",
        cantidad: 1,
        precio: 1250,
        categoria: {
            id: "drones",
            nombre: "Drones"
        },
    },
    {
        id: "placa-02",
        titulo: "RTX 3080 2",
        imagen: "./img/gpus/02.webp",
        cantidad: 1,
        precio: 1900,
        categoria: {
            id: "gpus",
            nombre: "Placas de video"
        },
    },
    {
        id: "monitor-08",
        titulo: "SAMSUNG 08",
        imagen: "./img/monitores/08.webp",
        cantidad: 1,
        precio: 1300,
        categoria: {
            id: "monitores",
            nombre: "Monitores"
        },
    },
    {
        id: "monitor-04",
        titulo: "SAMSUNG 04",
        imagen: "./img/monitores/04.webp",
        cantidad: 1,
        precio: 2050,
        categoria: {
            id: "monitores",
            nombre: "Monitores"
        },
    },
    {
        id: "robotica-05",
        titulo: "ARDUINO 05",
        imagen: "./img/robotica/05.webp",
        cantidad: 1,
        precio: 2210,
        categoria: {
            id: "robotica",
            nombre: "Robotica"
        },
    },
    {
        id: "placa-06",
        titulo: "RTX 3080 6",
        imagen: "./img/gpus/06.webp",
        cantidad: 1,
        precio: 2410,
        categoria: {
            id: "gpus",
            nombre: "Placas de video"
        },
    },
    {
        id: "placa-01",
        titulo: "RTX 3080 1",
        imagen: "./img/gpus/01.webp",
        cantidad: 1,
        precio: 1152,
        categoria: {
            id: "gpus",
            nombre: "Placas de video"
        },
    },
    {
        id: "monitor-07",
        titulo: "SAMSUNG 07",
        imagen: "./img/monitores/07.webp",
        cantidad: 1,
        precio: 1503,
        categoria: {
            id: "monitores",
            nombre: "Monitores"
        },
    },
    {
        id: "drone-01",
        titulo: "DJI mini 001",
        imagen: "./img/drones/01.webp",
        cantidad: 1,
        precio: 1096,
        categoria: {
            id: "drones",
            nombre: "Drones"
        },
    },
    {
        id: "placa-05",
        titulo: "RTX 3080 5",
        imagen: "./img/gpus/05.webp",
        cantidad: 1,
        precio: 2520,
        categoria: {
            id: "gpus",
            nombre: "Placas de video"
        },
    },
    {
        id: "robotica-04",
        titulo: "ARDUINO 04",
        imagen: "./img/robotica/04.webp",
        cantidad: 1,
        precio: 1310,
        categoria: {
            id: "robotica",
            nombre: "Robotica"
        },
    },
    {
        id: "drone-03",
        titulo: "DJI mini 003",
        imagen: "./img/drones/03.webp",
        cantidad: 1,
        precio: 1050,
        categoria: {
            id: "drones",
            nombre: "Drones"
        },
    },
    {
        id: "monitor-06",
        titulo: "SAMSUNG 06",
        imagen: "./img/monitores/06.webp",
        cantidad: 1,
        precio: 1080,
        categoria: {
            id: "monitores",
            nombre: "Monitores"
        },
    },
    {
        id: "drone-04",
        titulo: "DJI mini 004",
        imagen: "./img/drones/04.webp",
        cantidad: 1,
        precio: 2100,
        categoria: {
            id: "drones",
            nombre: "Drones"
        },
    },
    {
        id: "monitor-02",
        titulo: "SAMSUNG 02",
        imagen: "./img/monitores/02.webp",
        cantidad: 1,
        precio: 2900,
        categoria: {
            id: "monitores",
            nombre: "Monitores"
        },
    },
    {
        id: "drone-05",
        titulo: "DJI mini 005",
        imagen: "./img/drones/05.webp",
        cantidad: 1,
        precio: 1630,
        categoria: {
            id: "drones",
            nombre: "Drones"
        },
    },
    {
        id: "placa-04",
        titulo: "RTX 3080 4",
        imagen: "./img/gpus/04.webp",
        cantidad: 1,
        precio: 1940,
        categoria: {
            id: "gpus",
            nombre: "Placas de video"
        },
    },
    {
        id: "robotica-03",
        titulo: "ARDUINO 03",
        imagen: "./img/robotica/03.webp",
        cantidad: 1,
        precio: 1742,
        categoria: {
            id: "robotica",
            nombre: "Robotica"
        },
    },
    {
        id: "notebook-04",
        titulo: "HP 00000904",
        imagen: "./img/notebooks/04.webp",
        cantidad: 1,
        precio: 1633,
        categoria: {
            id: "notebooks",
            nombre: "Notebooks"
        },
    },
    {
        id: "monitor-05",
        titulo: "SAMSUNG 05",
        imagen: "./img/monitores/05.webp",
        cantidad: 1,
        precio: 2563,
        categoria: {
            id: "monitores",
            nombre: "Monitores"
        },
    },
    {
        id: "monitor-03",
        titulo: "SAMSUNG 03",
        imagen: "./img/monitores/03.webp",
        cantidad: 1,
        precio: 2350,
        categoria: {
            id: "monitores",
            nombre: "Monitores"
        },
    },
    {
        id: "drone-06",
        titulo: "DJI mini 006",
        imagen: "./img/drones/06.webp",
        cantidad: 1,
        precio: 1153,
        categoria: {
            id: "drones",
            nombre: "Drones"
        },
    },
    {
        id: "robotica-02",
        titulo: "ARDUINO 02",
        imagen: "./img/robotica/02.webp",
        cantidad: 1,
        precio: 1251,
        categoria: {
            id: "robotica",
            nombre: "Robotica"
        },
    },
    {
        id: "notebook-02",
        titulo: "HP 0000902",
        imagen: "./img/notebooks/02.webp",
        cantidad: 1,
        precio: 1369,
        categoria: {
            id: "notebooks",
            nombre: "Notebooks"
        },
    },
    {
        id: "drone-02",
        titulo: "DJI mini 002",
        imagen: "./img/drones/02.webp",
        cantidad: 1,
        precio: 1258,
        categoria: {
            id: "drones",
            nombre: "Drones"
        },
    },
    {
        id: "placa-03",
        titulo: "RTX 3080 3",
        imagen: "./img/gpus/03.webp",
        cantidad: 1,
        precio: 1147,
        categoria: {
            id: "gpus",
            nombre: "Placas de video"
        },
    },
    {
        id: "robotica-01",
        titulo: "ARDUINO 01",
        imagen: "./img/robotica/01.webp",
        cantidad: 1,
        precio: 1963,
        categoria: {
            id: "robotica",
            nombre: "Robotica"
        },
    },
];


