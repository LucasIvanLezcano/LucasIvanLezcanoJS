const productos = [
    // Zapatillas
    {
        id: "nb01",
        nombre: "Zapatillas Running New Balance Arishi",
        precio: 149.99,
        categoria: "zapatillas",
        foto:"https://www.newbalance.com.ar/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/z/a/zapatillas-new-balance-arishi-v2-kids-paarisn2_nb_02_i-min_4.jpg"
        
    },
    {
        id: "nb02",
        nombre: "Zapatillas Lifestyle New Balance 574",
        precio: 99.99,
        categoria: "zapatillas",
        foto:"https://www.newbalance.com.ar/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/z/a/zapatillas-hombre-new-balance-574-ml574rb2_nb_02_i_1.jpg"
    },
    {
        id: "nb03",
        nombre: "Zapatillas Deportivas New Balance Fresh Foam",
        precio: 119.99,
        categoria: "zapatillas",
        foto:"https://www.newbalance.com.ar/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/z/a/zapatillas-mujer-new-balance-fresh-foam-arishi-v4-warisqe4_nb_02_i-min_7.jpg"
    },
    {
        id: "nb04",
        nombre: "Zapatillas Casual New Balance Classic",
        precio: 89.99,
        categoria: "zapatillas",
        foto:"https://www.newbalance.com.ar/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/z/a/zapatillas-unisex-new-balance-xc-72-uxc72ec_nb_02_i_4.jpg"
    },
    {
        id: "nb05",
        nombre: "Zapatillas Running New Balance FuelCell",
        precio: 169.99,
        categoria: "zapatillas",
        foto:"https://www.newbalance.com.ar/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/z/a/zapatillas-mujer-new-balance-fuelcell-rebel-v2-wfcxcp2-2-min.jpg"
    },
    {
        id: "nb06",
        nombre: "Zapatillas Deportivas New Balance Basquet",
        precio: 79.99,
        categoria: "zapatillas",
        foto:"https://www.newbalance.com.ar/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/z/a/zapatillas-hombre-new-balance-two-wxy-v2-bb2wyph2_nb_02_i.jpg"

    },
    {
        id: "nb07",
        nombre: "Zapatillas Lifestyle New Balance 327",
        precio: 109.99,
        categoria: "zapatillas",
        foto:"https://www.newbalance.com.ar/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/z/a/zapatillas-hombre-new-balance-327-ms327be_nb_02_i_2.jpg"
    },
    {
        id: "nb08",
        nombre: "Zapatillas Running New Balance 57/40",
        precio: 139.99,
        categoria: "zapatillas",
        foto:"https://www.newbalance.com.ar/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/z/a/zapatillas-hombre-new-balance-5740-m5740llg_nb_02_i_1.jpg"
    },
    {
        id: "nb09",
        nombre: "Zapatillas Deportivas New Balance Roav",
        precio: 94.99,
        categoria: "zapatillas",
        foto:"https://www.newbalance.com.ar/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/z/a/zapatillas-mujer-new-balance-5740-w5740sga_nb_02_i_1.jpg"
    },
    {
        id: "nb10",
        nombre: "Zapatillas Lifestyle New Balance 574",
        precio: 129.99,
        categoria: "zapatillas",
        foto:"https://www.newbalance.com.ar/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/z/a/zapatillas-hombre-new-balance-574-ml574lf2_nb_02_i_4.jpg"
    },
    
    // Indumentaria
    {
        id: "nb11",
        nombre: "Remera Deportiva New Balance Dry Fit",
        precio: 39.99,
        categoria: "indumentaria",
        foto:"https://www.newbalance.com.ar/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/r/e/remera-hombre-new-balance-graphic-impact-run-short-sleeve-mt21277lem_nb_70_i_1.jpg"
    },
    {
        id: "nb12",
        nombre: "Short Deportivo New Balance Essential",
        precio: 29.99,
        categoria: "indumentaria",
        foto:"https://www.newbalance.com.ar/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/w/s/ws81294bk_40_1.jpg"
    },
    {
        id: "nb13",
        nombre: "Camiseta Casual New Balance Logo",
        precio: 24.99,
        categoria: "indumentaria",
        foto:"https://www.newbalance.com.ar/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/m/t/mt21503bk_nb_70_i-min_1.jpg"
    },
    {
        id: "nb14",
        nombre: "Calza Deportiva New Balance Performance",
        precio: 44.99,
        categoria: "indumentaria",
        foto:"https://www.newbalance.com.ar/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/w/p/wp11507ag_70_1.jpg"
    },
    {
        id: "nb15",
        nombre: "Buzo Deportivo New Balance Fleece",
        precio: 54.99,
        categoria: "indumentaria",
        foto:"https://www.newbalance.com.ar/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/b/u/buzo-mujer-new-balance-essentials-celebrate-fleece-wt21509ctu_1__1.jpg"
    },
    {
        id: "nb16",
        nombre: "Pantalón Deportivo New Balance Tech",
        precio: 49.99,
        categoria: "indumentaria",
        foto:"https://www.newbalance.com.ar/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/p/a/pantalon-mujer-new-balance-essentials-celeb-wp21508bk_1__1.jpg"
    },
    {
        id: "nb17",
        nombre: "Mochila New Balance Bordo",
        precio: 19.99,
        categoria: "indumentaria",
        foto:"https://www.newbalance.com.ar/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/m/o/mochila-new-balance-mini-me-backpack-lab23019bg_1__1.jpg"
    },
    {
        id: "nb18",
        nombre: "Campera Deportiva New Balance Windbreaker",
        precio: 69.99,
        categoria: "indumentaria",
        foto:"https://www.newbalance.com.ar/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/b/u/buzo-mujer-new-balance-athletics-amplified-quarter-zip-wj21501vrs_1__2.jpg"
    },
    {
        id: "nb19",
        nombre: "Top Deportivo New Balance  Azul",
        precio: 34.99,
        categoria: "indumentaria",
        foto:"https://www.newbalance.com.ar/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/b/u/buzo-hombre-new-balance-essentials-nbx-hoodie-mt13567at_1__1.jpg"
    },
    {
        id: "nb20",
        nombre: "Musculosa New Balance",
        precio: 37.99,
        categoria: "indumentaria",
        foto:"https://www.newbalance.com.ar/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/m/u/musculosa-mujer-new-balance-printed-velocity-bo-wt03221bkw-1_1.jpg"
    }
];





