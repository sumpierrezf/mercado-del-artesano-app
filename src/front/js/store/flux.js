const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            message: null,
            demo: [{
                    title: "FIRST",
                    background: "white",
                    initial: "white",
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white",
                },
            ],
        },

        //Viqui agrega espacio de memoria para setear los productos; agregar favoritos y agregar productos al carrito.
        productos: [],
        favoritos: [],
        carrito: [],
        //fin de creacion de espacios de memoria.

        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },

            //Viqui agrega funcion para obtener info de los productos
            obtenerInfoProductos: () => {
                fetch(
                        "https://3000-sumpierrezf-mercadodela-8vn0534b2pc.ws-us85.gitpod.io/api/products"
                    )
                    .then((res) => res.json())
                    .then((data) =>
                        setStore({
                            productos: data.results,
                        })
                    )
                    .catch((err) => console.error(err));
            },
            //Viqui agrega funciones para agregar y eliminar de favoritos.
            agregarFavorito: (favoritos) => {
                // console.log("funciona")
                let store = getStore();
                if (favoritos !== "" && !store.favoritos.includes(favoritos))
                    //agrega cada item solo una vez a fav.
                    setStore({
                        favoritos: [...store.favoritos, favoritos],
                    });
            },

            borrarFavorito: (favoritos) => {
                //console.log("funciona")
                let store = getStore();
                setStore({
                    favoritos: store.favoritos.filter((fav) => fav !== favoritos),
                });
            },

            //Viqui agrega funciones para agregar y eliminar productos del carrito.
            agregarAlCarrito: (carrito) => {
                // console.log("funciona")
                let store = getStore();
                if (carrito !== "" && !store.carrito.includes(carrito))
                    //agrega cada item solo una vez al carrito.
                    setStore({
                        carrito: [...store.carrito, carrito],
                    });
            },

            borrarDelCarrito: (carrito) => {
                //console.log("funciona")
                let store = getStore();
                setStore({
                    carrito: store.carrito.filter((item) => item !== carrito),
                });
            },
            //FIN de funciones agregadas por Viqui.

            getMessage: async () => {
                try {
                    // fetching data from the backend
                    const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
                    const data = await resp.json();
                    setStore({
                        message: data.message,
                    });
                    // don't forget to return something, that is how the async resolves
                    return data;
                } catch (error) {
                    console.log("Error loading message from backend", error);
                }
            },
            changeColor: (index, color) => {
                //get the store
                const store = getStore();

                //we have to loop the entire demo array to look for the respective index
                //and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });

                //reset the global store
                setStore({
                    demo: demo,
                });
            },
        },
    };
};

export default getState;