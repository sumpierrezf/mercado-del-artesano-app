const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      demo: [
        {
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
      productos: [], //espacio para guardar todos los productos de la api (creado por viqui)
      detalleProducto: {}, //esp. de memoria para guardar la info de cada producto (creado por viqui)
      carrito: [],
      fav_products: [],
      auth: false,
      categoria: [],
      products_in_cart: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      getUserFavs: (id) => {
        fetch(
          "https://3001-sumpierrezf-mercadodela-2e1gcx19xxx.ws-us86.gitpod.io/api/user/favorites/" +
            id
        )
          .then((res) => res.json())
          .then((data) =>
            setStore({
              fav_products: data,
            })
          )
          .catch((err) => console.error(err));
      },
      borrarFavorito: (id, id_product) => {
        fetch(
          "https://3001-sumpierrezf-mercadodela-6f58p0ahex1.ws-us86.gitpod.io/api/user/favorites/" +
            id,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              product_id: id_product,
            }), // body data type must match "Content-Type" header
          }
        ).catch((err) => console.log(err));
      },
      handleCategory: (e) => {
        const opcion = e.target.value;
        setStore({
          categoria: opcion,
        });
      },
      eliminarFiltro: () => {
        setStore({
          categoria: [],
        });
      },
      getUserProductsInCart: (id) => {
        fetch(
          "https://3001-sumpierrezf-mercadodela-2e1gcx19xxx.ws-us86.gitpod.io/api/user/cart/" +
            id
        )
          .then((res) => res.json())
          .then((data) =>
            setStore({
              products_in_cart: data,
            })
          )
          .catch((err) => console.error(err));
      },
      borrarProductInCart: (id, id_product) => {
        fetch(
          "https://3001-sumpierrezf-mercadodela-2e1gcx19xxx.ws-us86.gitpod.io/api/user/cart/" +
            id,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              product_id: id_product,
            }), // body data type must match "Content-Type" header
          }
        ).catch((err) => console.log(err));
      },
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
      signup: (
        email,
        password,
        nombre,
        apellido,
        nacimiento,
        direccion,
        pais,
        ciudad,
        postal,
        telefono
      ) => {
        fetch(
          "https://3001-sumpierrezf-mercadodela-2whridtfsv4.ws-us86.gitpod.io/api/signup",
          {
            method: "POST",
            mode: "no-cors",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: email,
              password: password,
              first_name: nombre,
              last_name: apellido,
              birth: nacimiento,
              address: direccion,
              country: pais,
              city: ciudad,
              postal_code: postal,
              phone_number: telefono,
            }),
          }
          // ).then((response) => {
          //   if (response.status === 200) {
          //     setStore({
          //       auth: true,
          //     });
          //   }
          //   return response.json();
          // }
        );
      },
      login: (userEmail, userPassword) => {
        fetch(
          "https://3001-sumpierrezf-mercadodela-nb1kqfi98gb.ws-us86.gitpod.io/api/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: userEmail,
              password: userPassword,
            }),
          }
        )
          .then((response) => {
            if (response.status === 200) {
              setStore({
                auth: true,
              });
            }
            return response.json();
          })
          .then((data) => {
            console.log(data);
            if (data.msg === "Bad email or password") alert(data.msg);
            localStorage.setItem("token", data.access_token);
          })
          .catch((err) => console.log(err));
      },
      //FUNCIONES AGREGADAS POR VIQUI
      obtenerInfoProductos: () => {
        fetch(
          "https://3001-sumpierrezf-mercadodela-kpc2aj1wfms.ws-us86.gitpod.io/api/product"
        )
          .then((res) => res.json())
          .then((data) =>
            setStore({
              productos: data.results,
            })
          )
          .catch((err) => console.error(err));
      },
      obtenerDetalleProducto: (id) => {
        fetch(
          "https://3001-sumpierrezf-mercadodela-2e1gcx19xxx.ws-us86.gitpod.io/api/product/" +
            id
        )
          .then((res) => res.json())
          .then((data) =>
            setStore({
              detalleProducto: data,
            })
          )
          .catch((err) => console.error(err));
      },
      // agregarAlCarrito: (
      //   user_id,
      //   name,
      //   category,
      //   price,
      //   amount,
      //   description,
      //   condition,
      //   img1,
      //   img2,
      //   img3,
      //   img4
      // ) => {
      //   fetch(
      //     "https://3001-sumpierrezf-mercadodela-kpc2aj1wfms.ws-us86.gitpod.io/api/user/cart/1",
      //     {
      //       method: "POST",
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //       body: JSON.stringify({
      //         name: name,
      //         category: category,
      //         price: price,
      //         amount: amount,
      //         description: description,
      //         condition: condition,
      //         img1: img1,
      //         img2: img2,
      //         img3: img3,
      //         img4: img4,
      //       }), // body data type must match "Content-Type" header
      //     }
      //   )
      //     .then((response) => {
      //       console.log(response.status);
      //       if (response.status === 200) {
      //         setStore({
      //           carrito: [...store.carrito, carrito],
      //         });
      //         console.log(store.carrito);
      //       }
      //       return response.json();
      //     })
      //     .catch((err) => console.log(err));
      // },
      //FIN DE FUNCIONES AGREGADAS POR VIQUI
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
