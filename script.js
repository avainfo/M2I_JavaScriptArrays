const products = []

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

	if(name !== undefined && name !== "") {
		if(typeof price == "number" && price > 0) {
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
		}
	}
	console.log(products)
}