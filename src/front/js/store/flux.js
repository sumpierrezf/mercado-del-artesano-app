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
            productos: [],
            //login
            auth: false,
        },
        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
            getInfoProducts: (id) => {
                fetch(
                        "https://3001-sumpierrezf-mercadodela-7eh9bf6j1g9.ws-us85.gitpod.io/api/user/favorites/" +
                        id
                    )
                    .then((res) => res.json())
                    .then((data) =>
                        setStore({
                            productos: data,
                        })
                    )
                    .catch((err) => console.error(err));
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

            // Login
            login: (userEmail, userPassword) => {
                fetch(
                        "https://3001-sumpierrezf-mercadodela-nb1kqfi98gb.ws-us85.gitpod.io/api/login", {
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