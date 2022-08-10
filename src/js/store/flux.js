import elementsImages from "../Resources/images.json"
const API_URL = "https://www.swapi.tech/api/"
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
			people: [],
			starships: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			loadCategories: (category) => {
				const store = getStore();

				fetch(`${API_URL}${category}?page=1&limit=0`)
					.then(data => data.json())
					.then(async (data) => {
						let newArray = store[category]
						newArray = newArray.concat(data.results);
						getActions().loadImages(newArray, category);
						setStore({ [category]: newArray });
					})
			},
			loadImages: (array, name) => {

				let category = ""
				array.map(async (idCard) => {
					if (name === 'people') category = 'characters'
					if (name === 'starships') category = 'vehicles'
					if (name === 'planets') category = 'planets'
					await fetch(`https://starwars-visualguide.com/assets/img/${category}/${idCard.uid}.jpg`)
						.then((response) => {

							(response.ok)
								? idCard.image = `https://starwars-visualguide.com/assets/img/${category}/${idCard.uid}.jpg`
								: idCard.image = "https://starwars-visualguide.com/assets/img/big-placeholder.jpg"
						})
						.catch((error) => error.json())

					setStore({ [name]: array });
				})
			},
			loadSingular: (id, category, url) => {
				const store = getStore();

				fetch(url)
					.then(data => data.json())
					.then(data => {
						let newArray = store[category]
						newArray[id].info = data.result
						setStore({ [category]: newArray });

					})


			},
			homeworld: (id, url) => {
				const store = getStore();
				const home = (url.charAt(url.length - 1) - 1)
				let newArray = store.people
				store.planets[home].name
				newArray[id].info.properties.homeworld_name = store.planets[home].name
				setStore({ people: newArray });

			},
			pilots: (id, array) => {
				const store = getStore();
				let newArray
				newArray = store.starships
				newArray[id].info.properties.pilots_name = []
				
				for (let url in array) {
					const home = (((array[url].charAt(array[url].length - 2) === '/') ? '' : array[url].charAt(array[url].length - 2)) + "" + array[url].charAt(array[url].length - 1))
					

					store.people.map((value, index) => {(value.uid === home) ? (newArray[id].info.properties.pilots_name.push(store.people[index].name + " | ")) : null})
					
					
					setStore({ starships: newArray });
				}


			},
			addFavorite: (uid, name, category, id) => {
				const store = getStore();
				let newArray = store.favorites
				let finalInfo = {}
				finalInfo.id = id
				finalInfo.uid = uid
				finalInfo.name = name
				finalInfo.category = category
				newArray.push(finalInfo)
				let likeArray = store[category]
				likeArray[id].favorite = true
				setStore({ favorites: newArray });
				setStore({ [category]: likeArray });
				
				
				
				
			},
			deleteFavorite: (uid, category) => {
				
				const store = getStore();
				let newArray = store[category]
				newArray.map((value, index) => {(value.uid === uid) ? newArray[index].favorite = false : null })
				setStore({ [category]: newArray });
				let favArray = store.favorites
				favArray.map((value, index) => {(value.uid === uid) ? favArray.splice(index, 1) : null })
				setStore({ favorites: favArray });


				
				
				
			},
			loadSomeData: () => {
				getActions().loadCategories('planets')
				getActions().loadCategories('people')
				getActions().loadCategories('starships')
			}
		}
	}
}


export default getState;
