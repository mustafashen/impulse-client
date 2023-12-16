
type Review = {
	id?: string,
	rating: 1|2|3|4|5,
	comment: string,
	product_id: string,
	customer_id?: string
}

type Reviews = Review[]