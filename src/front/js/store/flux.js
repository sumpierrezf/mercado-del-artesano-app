import axios from "axios";
let back = "https://3001-sumpierrezf-mercadodela-7ms2um6rmsm.ws-us87.gitpod.io";
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
      user_id: null,
      mercadoPago: {},
      productosName: [],
      user_info: [],
      image: "",
      url: "",
    },

    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      getUserFavs: (id) => {
        fetch(back + "/api/user/favorites/" + id)
          .then((res) => res.json())
          .then((data) =>
            setStore({
              fav_products: data,
            })
          )
          .catch((err) => console.error(err));
      },
      addToFavorites: (user_id, product_id) => {
        fetch(back + "/api/favorites", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: user_id,
            product_id: product_id,
          }),
        })
          .then((response) => {
            if (response.status === 200) {
              alert("Producto agregado a favoritos");
            }
            return response.json();
          })
          .then((data) => {
            console.log(data);
            if (data.msg === "Ya tienes ese producto en favoritos")
              alert(data.msg);
          })
          .catch((err) => console.log(err));
      },
      borrarFavorito: (id, id_product) => {
        fetch(back + "/api/user/favorites/" + id, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            product_id: id_product,
          }), // body data type must match "Content-Type" header
        }).catch((err) => console.log(err));
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
        fetch(back + "/api/user/cart/" + id)
          .then((res) => res.json())
          .then((data) =>
            setStore({
              products_in_cart: data,
            })
          )
          .catch((err) => console.error(err));
      },
      borrarProductInCart: (id, id_product) => {
        fetch(back + "/api/user/cart/" + id, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            product_id: id_product,
          }), // body data type must match "Content-Type" header
        }).catch((err) => console.log(err));
      },
      setAmountInCart: (user_id, product_id, amount) => {
        fetch(back + "/api/cart", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: user_id,
            product_id: product_id,
            amount: amount,
          }),
        });
      },
      getUserInfo: (id) => {
        fetch(back + "/api/user/" + id)
          .then((res) => res.json())
          .then((data) =>
            setStore({
              user_info: data,
            })
          );
      },
      editProfile: (
        id,
        password,
        nombre,
        apellido,
        nacimiento,
        direccion,
        pais,
        ciudad,
        postal,
        telefono,
        foto
      ) => {
        fetch(back + "/api/profile", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: id,
            password: password,
            first_name: nombre,
            last_name: apellido,
            birth: nacimiento,
            address: direccion,
            country: pais,
            city: ciudad,
            postal_code: postal,
            phone_number: telefono,
            profile_picture: foto,
          }),
        });
      },
      uploadImage: () => {
        const store = getStore();
        const data = new FormData();
        data.append("file", store.image);
        data.append("upload_preset", "pdnsjg41");
        data.append("cloud_name", "dlesv1phq");
        fetch("https://api.cloudinary.com/v1_1/dlesv1phq/image/upload", {
          method: "POST",
          body: data,
        })
          .then((resp) => resp.json())
          .then((data) =>
            setStore({
              url: data.url,
            })
          )
          .catch((err) => console.log(err));
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

      enviarForm: (
        nombre,
        categoria,
        precio,
        stock,
        descripcion,
        condicion,
        img1,
        // img2,
        // img3,
        // img4,
        user_id
      ) => {
        console.log(user_id);
        fetch(
          "https://3001-sumpierrezf-mercadodela-tr3yhm59nig.ws-us86.gitpod.io/api/upload_product/" +
            user_id,
          {
            method: "POST",
            // mode: "no-cors",
            // credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: nombre,
              category: categoria,
              price: precio,
              amount: stock,
              description: descripcion,
              condition: condicion,
              img1: img1,
              // img2: img2,
              // img3: img3,
              // img4: img4,
              user_id: user_id,
            }),
          }
        );
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
        fetch(back + "/api/signup", {
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
        });
      },
      filterProducts(searchTerm) {
        const store = getStore();
        const filtered = store.productos.filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        console.log(filtered);
        setStore({
          productos: filtered,
        });
      },

      // filterProducts: () => {
      //   fetch(back + "/api/products")
      //     .then((response) => response.json())
      //     .then((data) => {
      //       setStore({
      //         productos: data.results,
      //       });
      //     });
      // },

      // _____________________________________________________
      login: (userEmail, userPassword) => {
        fetch(back + "/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: userEmail,
            password: userPassword,
          }),
        })
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
            setStore({
              user_id: data.user_id,
            });
          })
          .catch((err) => console.log(err));
      },
      logout: () => {
        localStorage.removeItem("token");
        setStore({
          user_id: null,
        });
        setStore({
          user_info: [],
        });
        setStore({
          auth: false,
        });
      },
      // CAMBIAR CONTRASEÑA
      changePassword: async (email) => {
        try {
          const response = await axios.post(back + "/api/resetPassword", {
            email: email,
          });
          if (response.status === 200) {
            console.log("La contraseña ha sido enviada");
          }
        } catch (error) {
          if (error.code === "ERR_BAD_REQUEST") {
            console.log(error.response.data.msg);
          }
        }
      },
      //FUNCIONES AGREGADAS POR VIQUI
      obtenerInfoProductos: () => {
        fetch(back + "/api/product")
          .then((res) => res.json())
          .then((data) =>
            setStore({
              productos: data,
            })
          )
          .catch((err) => console.error(err));
      },
      obtenerDetalleProducto: (id) => {
        fetch(back + "/api/product/" + id)
          .then((res) => res.json())
          .then((data) =>
            setStore({
              detalleProducto: data,
            })
          )
          .catch((err) => console.error(err));
      },
      agregarAlCarrito: async (user_id, product_id, amount) => {
        console.log(user_id, product_id, amount);
        try {
          let response = await axios.post(back + "/api/cart", {
            user_id: user_id,
            product_id: product_id,
            amount: amount,
          });
          console.log(response.data);
          alert("Producto agregado al carrito");
        } catch (error) {
          console.log(error);
          alert("Ya tienes ese producto en el carrito");
        }
      },
      pagoMercadoPago: async (total) => {
        try {
          const response = await axios.post(back + "/api/preference", {
            total: total,
          });
          console.log(response.data);
          setStore({ mercadoPago: response.data });
        } catch (error) {
          console.log(error);
        }
      },
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
