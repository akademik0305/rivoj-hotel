export default {
	
	// home page
	getBanners() {
		return `/banners/all`;
	},
	getSections() {
		return `/sections/all`;
	},
	getOneSection(id: number) {
		return `/sections/${id}`;
	},

	// categories
	addCategories() {
		return `/categories`;
	},
	getCategories(search: string = "", page: number = 1, limit: number = 10) {
		return `/categories?search=${search}&page=${page}&limit=${limit}`;
	},
	getOneCategory(id: number) {
		return `/categories/${id}`;
	},
	updateCategory() {
		return `/categories`;
	},
	deleteCategory(id: number) {
		return `/categories/${id}`;
	},

	// products
	addProducts() {
		return `/products`;
	},
	getProducts(search: string = "", page: number = 1, limit: number = 10) {
		return `/products?search=${search}&page=${page}&limit=${limit}`;
	},
	getOneProduct(id: number) {
		return `/products/${id}`;
	},
	updateProduct() {
		return `/products`;
	},
	deleteProduct(id: number) {
		return `/products/${id}`;
	},


	// customers
	addCustomer() {
		return `/customers`;
	},


	// auth
	sendPhone() {
		return `/auth-manager/register/phone`;
	},
	verifyCode() {
		return `/auth-manager/register/verify`;
	},
	signUp() {
		return `/auth-manager/register/sign-up`;
	},

	// profile
	profileInfo() {
		return `/profile/index`;
	},
	updateName() {
		return `/profile/update-name`;
	},
	updatePhone() {
		return `/update-username/phone`;
	},
	updatePhoneVerify() {
		return `/update-username/verify`;
	},
	getOrders(page: number) {
		return `/profile/my-orders?page=${page}`;
	},
	getPayments(page: number) {
		return `/profile/my-payments?page=${page}`;
	},


	// wishlist
	addToWishlist(product_id: number) {
		return `/product-save/save-or-remove?product_id=${product_id}`;
	},
	getWishlists() {
		return `/product-save/user-saved-products`;
	},

	// contact
	getContactInfo() {
		return `contacts`;
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



};
