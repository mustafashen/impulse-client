
type Review = {
	id?: string,
	rating: number,
	comment: string,
	product_id: string,
	customer_id?: string
}

type Reviews = Review[]