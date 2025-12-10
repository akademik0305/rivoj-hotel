export default {
	// home page
	getBanners() {
		return `/banners/all`;
	},
	// sections
	getSections() {
		return `/sections/all`;
	},
	

	// categories
	getCategories() {
		return `/categories/all`;
	},

	getOneCategory(id: number) {
		return `/categories/${id}`;
	},
	
	// products
	getProducts() {
		return `/products/all`;
	},


	// customers
	addCustomer() {
		return `/customers`;
	},

	// contact
	getContactInfo() {
		return `contacts`;
	},

	sendContact(){
		return `contacts`
	},	

	// orders
	orderDelivery() {
		return `/order/delivery`;
	},
	orderPickup() {
		return `/order/store-pickup`;
	},

	// cards
	getCards() {
		return `/my-card/all`;
	},

	// advantages
	getAdvantages() {
		return `/advantages/all`;
	},
	// advantages
	getEmployees() {
		return `/employees/all`;
	},
};
