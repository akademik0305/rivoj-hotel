export default {
	// home page
	getBanners() {
		return `/banners/all`;
	},
	// sections
	getSections() {
		return `/sections/public`;
	},

	getSectionProducts(section_id: number) {
		return `/section_products?section_id=${section_id}`
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
	// products
	getOneProduct(id: number) {
		return `/products/${id}`;
	},


	// customers
	addCustomer() {
		return `/customers`;
	},

	// contact
	getContactInfo() {
		return `contacts`;
	},

	sendContact() {
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
		return `/advantages`;
	},
	// employees
	getEmployees() {
		return `/employees`;
	},
	// partners
	getPartners() {
		return `/partners`;
	},
	// faqs
	getFaqs() {
		return `/faqs`
	},
	// create order
	createOrder() {
		return `/orders`
	},
	sendMessage() {
		return `/messages`
	},
};
