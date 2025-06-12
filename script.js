let products = []

function appendProduct() {
	let name = document.getElementById('product-name').value
	let price = document.getElementById('product-price').value

	// Vérifier que le nom ne soit pas vide
	if(name !== undefined && name !== "") {
		// Vérifier que le prix est un nombre strictement positif
		if(typeof price == "number" && price > 0) {
			// Ajoute l'objet au tableau
			for(let i = 0; i < products.length; i++) {
				products[i].push([name, price])
			}
		}
	}
	console.log(products)
}