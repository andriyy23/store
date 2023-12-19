const getProducts = async () => {
	const response = await fetch('https://fakestoreapi.com/products')
	return response
}

export default getProducts

export const getProduct = async(setData, setFilter, id) => {
	const response = await fetch(`https://fakestoreapi.com/products/${id}`)
	setData(await response.clone().json())
	setFilter(await response.json())
}