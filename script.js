const products = [
	{
		"name": "test",
		"price": 2
	},
	{
		"name": "test",
		"price": 23
	},
	{
		"name": "test",
		"price": 234
	},
	{
		"name": "test",
		"price": 2345
	},
	{
		"name": "test",
		"price": 23456
	},
	{
		"name": "test",
		"price": 234567
	}
]

function appendProduct() {
	let name = document.getElementById('product-name').value
	let price = parseFloat(document.getElementById('product-price').value)

	// // Vérifier que le nom ne soit pas vide
	// if(name !== undefined && name !== "") {
	// 	// Vérifier que le prix est un nombre strictement positif
	// 	if(typeof price == "number" && price > 0) {
	// 		// Ajoute l'objet au tableau
	// 		for(let i = 0; i < products.length; i++) {
	// 			products[i].push([name, price])
	// 		}
	// 	}
	// }

	if(!(name !== undefined && name !== "")) {
		return
	}

	if(!(typeof price == "number" && price > 0)) {
		return
	}

	let founded = false;
	for(let i = 0; i < products.length; i++) {
		if(products[i].name === name && products[i].price === price) {
			founded = true;
			break;
		}
	}

	if(founded !== true) {
		products.push({name: name, price: price})
	}

	console.log(products)
}

// document // Selectionner la page HTML
// document.getElementById("") // Selectionner un élement par son ID
// document.querySelector("button[type='submit']") // Selectionner un élement par son sélecteur
// document.getElementById("").append() // Ajouter un enfant à un parent selectionner
// document.getElementById("").addEventListener('click', (e) => {}) // Ajout d'un event

function showProducts() {
	// let container = document.getElementsByClassName('container')[0]
	let container = document.querySelector('.container');

	console.log(container)

	// Créer un container pour contenir nos p
	// pour que si on le supprime ca supprime tous nos p dedans

	// Ajouter une classe "p-temp" pour les paragraphes temporaire et de
	// tous les supprimer

	// Verifier si les p existe, si c'est le cas ne pas rajouter

	// Supprimer les p qui contiennent ": " + "€"

	let paragraphElements = [...container.getElementsByTagName("p")]

	paragraphElements.forEach((element) => {
		container.removeChild(element)
	})

	for(const product of products) {
		let node = document.createElement("p")
		node.classList.add("p-temp")
		node.innerText = product.name + ": " + product.price + "€"
		container.appendChild(node)
	}

}