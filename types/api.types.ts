export type ApiResponse<Data> = {
	data: Data;
	status: number;
	message: string;
	success: boolean;
};

export type TMeta = {
	totalCount: number;
	pageCount: number;
	currentPage: number;
	perPage: number;
};

export type TBanner = {
	id: number;
	file_url: string;
	url: string;
	status: number;
};

export type TBanners = {
	data: TBanner[];
};

// products
export type TProduct = {
	id: number;
	category_id: number;
	name: string;
	description: null;
	price: number;
	discount: number;
	file_url: string;
	status: number;
	created_at: string;
	category_name: string;
	new_price: number;
	details: {
		description: string;
		features: {
			id: number;
			name: string;
		}[];
	};
};

export type TCategory = {
	category: {
		id: number;
		name: string;
		imageUrl: string;
	};
	dataProvider: {
		items: TProduct[];
		_meta: TMeta;
	};
};

export type TSearch = {
	items: TProduct[];
	_meta: TMeta;
};

export type TWishlist = TProduct[];

export type TOrderProduct = {
	id: number;
	product_id: number;
	productName: string;
	count: string;
	total_sum: string;
	totalSumFormat: string;
	product_price: string;
	productPriceFormat: string;
};

export type TOrderItem = {
	id: number;
	dateFormat: string;
	delivery_type: number;
	deliveryTypeName: string;
	phone: string;
	delivery_sum: string | null;
	deliverySumFormat: string;
	total_sum: string;
	totalSumFormat: string;
	status: number;
	statusName: string;
	orderItems: TOrderProduct[];
};

export type TOrder = {
	items: TOrderItem[];
	_meta: TMeta;
};

export type TPaymentItem = {
	id: number;
	payment_type_id: number;
	paymentTypeName: string;
	amount: string;
	amountSumFormat: string;
	dateFormat: string;
};

export type TPayment = {
	items: TPaymentItem[];
	_meta: TMeta;
};

// sections
export type TSection = {
	id: number;
	status: number;
	created_at: string;
	name: string;
	products: TProduct[];
};

export type TSections = {
	data: TSection[];
	pagination: TMeta;
};

// section product
export type TSectionProduct = {
	created_at: string;
	id: number;
	name: string;
	price: number;
	product_id: number;
	section_id: number;
	status: number;
};

export type TSectionProducts = {
	data: TSectionProduct[];
	pagination: TMeta;
};
