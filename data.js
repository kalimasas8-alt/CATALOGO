/**
 * ARCHIVO DE DATOS - KALIMA CATALOG
 * 
 * GUÍA DE REEMPLAZO DE IMÁGENES:
 * 1. Para las CATEGORÍAS: Cambia la propiedad 'image' por la ruta de tu foto de portada
 *    Ejemplo: image: "imagenes/categoria-clasicos.jpg"
 * 2. Para los PRODUCTOS: Cambia la propiedad 'image' de cada color
 *    Ejemplo: image: "imagenes/clasico-senorales-negro.jpg"
 */

const catalogData = [
    {
        id: "clasicos",
        prefix: "CLA",
        name: "CLÁSICOS",
        image: "imagenes/CLASICO.jpg",
        products: [
            {
                id: "senorales",
                prefix: "SEÑ",
                name: "SEÑORERO",
                description: "Panty invisible, interior de algodón de máxima suavidad. Opción con franja: +$1.000 COP.",
                price: "$20.000 COP",
                sizes: ["XS", "S", "M", "L", "XL"],
                colors: [
                    { name: "Negro", hex: "#000000", prefix: "NEG", image: "imagenes/SEÑORALES-NEGRO.png" },
                    { name: "Blanco", hex: "#FFFFFF", prefix: "BLA", image: "imagenes/SEÑORAL-BLANCO.png" },
                    { name: "Azul", hex: "#89CFF0", prefix: "AZU", image: "imagenes/SEÑORALES-AZUL.png" },
                    { name: "Beige", hex: "#D2B48C", prefix: "BEI", image: "imagenes/SEÑORAL-BEIGE.png" },
                    { name: "Rosa", hex: "#FFC0CB", prefix: "ROS", image: "imagenes/SEÑORAL-ROSA.png" }
                ]
            },
            {
                id: "tangas-brasilera",
                prefix: "BRA",
                name: "TANGAS BRASILERA",
                image: "imagenes/TANGAS.jpg",
                description: "Corte estilizado que evita marcas bajo la ropa ajustada. Opción con franja: +$1.000 COP.",
                price: "$15.000 COP",
                sizes: ["XS", "S", "M", "L", "XL"],
                colors: [
                    { name: "Negro", hex: "#000000", prefix: "NEG", image: "imagenes/TANGAS-BRAZI-NEGRAS.png" },
                    { name: "Blanco", hex: "#FFFFFF", prefix: "BLA", image: "imagenes/TANGA-BLANCA.png" },
                    { name: "Azul", hex: "#89CFF0", prefix: "AZU", image: "imagenes/TANGA-AZUL.png" },
                    { name: "Beige", hex: "#D2B48C", prefix: "BEI", image: "imagenes/TANGA-BEIGE.png" },
                    { name: "Rosa", hex: "#FFC0CB", prefix: "ROS", image: "imagenes/TANGA-ROSA.png" }
                ]
            },
            {
                id: "tanga-alto-pierna",
                prefix: "TAL",
                name: "TANGA ALTO DE PIERNA",
                description: "Diseño ergonómico de tiro alto para mayor confort. Opción con franja: +$1.000 COP.",
                price: "$17.000 COP",
                sizes: ["XS", "S", "M", "L", "XL"],
                colors: [
                    { name: "Negro", hex: "#000000", prefix: "NEG", image: "imagenes/TANGA-ALTO-NEGRO.png" },
                    { name: "Blanco", hex: "#FFFFFF", prefix: "BLA", image: "imagenes/TANGA-ALTO-BLANCA.png" },
                    { name: "Azul", hex: "#89CFF0", prefix: "AZU", image: "imagenes/TANGA-ALTO-AZUL.png" },
                    { name: "Beige", hex: "#D2B48C", prefix: "BEI", image: "imagenes/TANGA-ALTO-BEIGE.png" }
                ]
            },
            {
                id: "invisibles",
                prefix: "INV",
                name: "INVISIBLES",
                description: "Panty invisible, interior de algodón de máxima suavidad. Opción con franja: +$1.000 COP.",
                price: "$23.000 COP",
                sizes: ["XS", "S", "M", "L", "XL"],
                colors: [
                    { name: "Negro", hex: "#000000", prefix: "NEG", image: "imagenes/INVISIBLE-NEGRO.png" },
                    { name: "Beige", hex: "#D2B48C", prefix: "BEI", image: "imagenes/INVISIBLE-BEIGE.png" }
                ]
            }
        ]
    },
    {
        id: "coquette",
        prefix: "COQ",
        name: "COQUETTE",
        image: "imagenes/coquette.jpg",
        products: [
            {
                id: "bralet",
                prefix: "BRL",
                name: "BRALET",
                description: "Viene en conjunto con pantie delicado de encaje.",
                price: "$35.000 COP",
                sizes: ["XS", "S", "M", "L", "XL"],
                colors: [
                    { name: "Rosa", hex: "#FFC0CB", prefix: "ROS", image: "imagenes/BRALET-ROSA.png" },
                    { name: "Azul", hex: "#89CFF0", prefix: "AZU", image: "imagenes/BRALET-AZUL.png" },
                    { name: "Rojo", hex: "#C8102E", prefix: "ROJ", image: "imagenes/BRALET-ROJO.png" }
                ]
            },
            {
                id: "tangas-coquette",
                prefix: "TCO",
                name: "TANGAS COQUETTE",
                description: "Base gris suave con encaje decorativo. Opción con franja: +$1.000 COP.",
                price: "$16.000 COP",
                sizes: ["XS", "S", "M", "L"],
                colors: [
                    { name: "Azul", hex: "#89CFF0", prefix: "AZU", image: "imagenes/TANGA-CO-AZUL.png" },
                    { name: "Blanco", hex: "#FFFFFF", prefix: "BLA", image: "imagenes/TANGA-CO-BLANCO.png" },
                    { name: "Rosa", hex: "#FFC0CB", prefix: "ROS", image: "imagenes/TANGA-CO-ROSA.png" }
                ]
            }
        ]
    },
    {
        id: "masculina",
        prefix: "MAS",
        name: "MASCULINA",
        image: "imagenes/MASCULINO.png",
        products: [
            {
                id: "pantaloneta",
                prefix: "PTN",
                name: "PANTALONETA",
                description: "Suavidad y ajuste anatómico.",
                price: "$20.000 COP",
                sizes: ["S", "M", "L", "XL"],
                colors: [
                    { name: "Gris / Celeste", hex: "#BAC7CE", prefix: "GRI", image: "imagenes/PANTALONE-AZUL.png" },
                    { name: "Negra", hex: "#050505", prefix: "NEG", image: "imagenes/PANTALONE-AZUL.png" },
                    { name: "Blanca", hex: "#FFFFFF", prefix: "BLA", image: "imagenes/PANTALONE-AZUL.png" }
                ]
            },
            {
                id: "boxer",
                prefix: "BOX",
                name: "BOXER",
                description: "Microfibra elástica de transpirabilidad superior.",
                price: "$17.000 COP",
                sizes: ["S", "M", "L", "XL"],
                colors: [
                    { name: "Negro", hex: "#000000", prefix: "NEG", image: "imagenes/BOXER-AZUL.png" },
                    { name: "Blanco", hex: "#FFFFFF", prefix: "BLA", image: "imagenes/BOXER-AZUL.png" },
                    { name: "Azul", hex: "#000080", prefix: "AZU", image: "imagenes/BOXER-AZUL.png" },
                    { name: "Beige", hex: "#D2B48C", prefix: "BEI", image: "imagenes/BOXER-AZUL.png" }
                ]
            }
        ]
    }
];
