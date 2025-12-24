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
		product_brand: string;
		length: number;
		width: number;
		height: number;
		weight: number;
		mix_brand: string;
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
	id: number,
	name: string,
	price: number,
	discount: number,
	file_url: string,
	status: boolean,
	new_price: number,
};

export type TSectionProducts = {
	data: {
		section_id: number,
		section_name: string,
		products: TSectionProduct[]
	};
	pagination: TMeta;
};

export type TAdvantage = {
	id: number;
	title: string;
	description: string;
	status: number;
	created_at: string;
	file_url: string;
};

// employees
export type TEmployee = {
	id: number;
	name: string;
	position: string;
	status: number
	file_url: string;
};

export type TEmployees = {
	data: TEmployee[],
	pagination: TMeta
}

// partners
export type TPartner = {
	id: number;
	name: string;
	status: number
	file_url: string;
};

export type TPartners = {
	data: TPartner[],
	pagination: TMeta
}

// faq
export type TFaq = {
	id: number;
	label: string;
	content: string;
	status: number;
	created_at?: number;
}

export type TFaqs = {
	data: TFaq[];
	pagination: TMeta;
}

// orders
export type TOrderProduct = {
	product_id: number,
	quantity: number
}

export type TOrder = {
	customer_name: string,
	customer_phone: string,
	notes?: string,
	items: TOrderProduct[]
}