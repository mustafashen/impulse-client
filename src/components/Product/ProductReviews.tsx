import ProductReview from './ProductReview'
import ProductWriteReview from './ProductWriteReview'

export default function ProductReviews({
  reviews, 
  product_id,}: {
    reviews: Reviews,
    product_id: string,}) {
  
  return (
    <div>
      <ProductWriteReview
        product_id={product_id}/>
      {
        reviews.map((review: Review) => {
          return (
            <ProductReview key={review.id} review={review}/>
          )
        })
      }
    </div>
  )
}
