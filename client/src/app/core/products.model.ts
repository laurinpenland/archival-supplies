export interface IProduct {
  _id: string,
  vendor: string;
	productNum: string;
	description: string;
  packQuantity: number;
  productType: string;
  notes: string;
	productUrl: string;
	imageUrl: string;
}

export interface IVendor {
  _id: string,
  name: string,
  vendorUrl: string
}

export interface IType {
  _id: string,
  name: string
}
