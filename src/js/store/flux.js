const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			baseURL: "http://127.0.0.1:5000",
			user: [],
		},
		actions: {
			//cuando quiera traerme a los usuarios en la db:
			// getUsers: async(user) => {
			// 	const store = getStore();
			// 	const response = await fetch(
			// 		`${store.baseURL}/user`
			// 	);
			// 	const body = await response.json();
			// 	setStore({
			// 		[user]: body,
			// 	});
			// }

			// createUser: async () => {
			// 	const response = await fetch(
			// 		"http://127.0.0.1:5000/signup",
			// 		{
			// 			method: "POST",
			// 			headers: {
			// 				"Content-Type": "application/json",
			// 			},
			// 			body: JSON.stringify({
			// 				"name": "prueba directta",
			// 				"email": "prueba@g.com",
			// 				"password": "1234"
			// 			}),
			// 		}
			// 	);
			// 	const body = await response.json();
			// 	if (!response.ok) {
			// 		alert(`Fallo el POST: ${response.status}: ${body.msg}`);
			// 	}
			// }
		}
	};
};

export default getState;
