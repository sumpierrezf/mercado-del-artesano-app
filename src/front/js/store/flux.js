import axios from "axios";
import swal from "sweetalert";
let back = "https://3001-sumpierrezf-mercadodela-6nxeeyc9quq.ws-us87.gitpod.io";
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
      getReviews: [],
      sellerProducts: [],
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
              swal(
                "Buen trabajo!",
                "Producto agregado a favoritos!",
                "success"
              );
            }
            return response.json();
          })
          .then((data) => {
            // console.log(data);
            if (data.msg === "Ya tienes ese producto en favoritos")
              swal("Cuidado!", "Ya tienes ese producto en favoritos!", "error");
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
        })
          .then((response) => {
            if (response.status === 200) {
              swal("Listo!", "El favorito ha sido eliminado!", "success");
            }
            return response.json();
          })
          .catch((err) => console.log(err));
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
        })
          .then((response) => {
            if (response.status === 200) {
              swal(
                "Listo!",
                "El producto ha sido eliminado del carrito!",
                "success"
              );
            }
            return response.json();
          })
          .catch((err) => console.log(err));
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
      updateProductSales: (product_id, sales) => {
        fetch(back + "/api/sales", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: product_id,
            sales: sales,
          }),
        });
      },
      getUserInfo: () => {
        let id = localStorage.getItem("user_id");
        // console.log(id);
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

      createProduct: (
        nombre,
        categoria,
        precio,
        stock,
        descripcion,
        condicion,
        imagen,
        user_id
      ) => {
        // console.log(user_id);
        // console.log(imagen[1]);

        let img1 = null;
        let img2 = null;
        let img3 = null;
        let img4 = null;

        if (imagen.length > 0) {
          img1 = imagen[0];
        }
        if (imagen.length > 1) {
          img2 = imagen[1];
        }
        if (imagen.length > 2) {
          img3 = imagen[2];
        }
        if (imagen.length > 3) {
          img4 = imagen[3];
        }

        fetch(back + "/api/upload_product/" + user_id, {
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
            img2: img2,
            img3: img3,
            img4: img4,
            // user_id: user_id,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.msg === "Producto subido") {
              swal(
                "Genial!",
                "Has subido tu producto correctamente",
                "success"
              );
            }
            // console.log(data.msg);
          })
          .catch((error) => console.log(error));
      },

      signup: async (
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
        try {
          let response = await axios.post(back + "/api/signup", {
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
          });
          // console.log(response);
          if (response.status === 200) {
            // alert(response.data.msg);
            swal("Genial!", "Has creado tu cuenta correctamente", "success");
            return true;
          }
        } catch (error) {
          if (error.response.status === 401) {
            return false;
          }
        }
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
            if (data.msg === "Bad email or password") {
              swal(
                "Cuidado!",
                "Error en el email o en la contraseña",
                "warning"
              );
              // alert(data.msg);
              return null;
            }
            localStorage.setItem("token", data.access_token);
            localStorage.setItem("user_id", data.user_id);
            setStore({
              user_id: data.user_id,
            });
          })
          .catch((err) => console.log(err));
      },
      logout: () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user_id");
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
      getSellerProducts: (id) => {
        fetch(back + "/api/seller/products/" + id)
          .then((res) => res.json())
          .then((data) =>
            setStore({
              sellerProducts: data,
            })
          )
          .catch((err) => console.error(err));
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
          // console.log(response.data);
          swal(
            "Genial!",
            "El producto ha sido agregado al carrito!",
            "success"
          );
        } catch (error) {
          // console.log(error);
          swal("Cuidado!", "Ya tienes ese producto en el carrito!", "warning");
        }
      },
      vaciarCarrito: async (user_id) => {
        try {
          let response = await axios.delete(
            back + "/api/user/cart/delete/" + user_id
          );
          console.log(response.data);
          // swal("Que pena!", "Has vaciado el carrito", "info");
        } catch (error) {
          console.log(error);
        }
      },
      pagoMercadoPago: async (total, user_id) => {
        let store = getStore();
        try {
          const response = await axios.post(back + "/api/preference", {
            total: total,
          });
          console.log(response.data);
          setStore({
            mercadoPago: response.data,
          });
          if (store.mercadoPago.auto_return === "approved") {
            // setStore({
            //   products_in_cart: [],
            // });
            //NO ESTA FUNCIONANDO CORRECTAMENTE PORQUE VACIA EL CARRITO ANTES DE HACER EL PAGO.
            getActions().vaciarCarrito(user_id);
          }
        } catch (error) {
          console.log(error);
        }
        console.log(store.mercadoPago.auto_return);
      },
      obtenerReviews: (product_id) => {
        fetch(back + "/api/reviews/product/" + product_id)
          .then((res) => res.json())
          .then((data) =>
            setStore({
              getReviews: data,
            })
          )
          .catch((err) => console.error(err));
      },
      crearReviews: (product_id, reviews, stars) => {
        fetch(back + "/api/reviews/product/" + product_id, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            reviews: reviews,
            calification: stars,
            user: localStorage.getItem("user_id"),
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.msg === "Comentario subido") {
              swal("Gracias!", "Comentario subido!", "success");
              getActions().obtenerReviews(product_id);
            } else if (
              data.msg === "Ya hiciste un comentario sobre este producto"
            ) {
              swal(
                "Ya comentaste este producto!",
                "Tu comentario fue agregado anteriormente!",
                "warning"
              );
            }
          })
          .catch((err) => console.error(err));
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
