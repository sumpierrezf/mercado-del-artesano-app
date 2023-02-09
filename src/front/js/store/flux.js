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
