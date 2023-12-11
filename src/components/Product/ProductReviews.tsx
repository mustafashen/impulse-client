import ProductReview from './ProductReview'

export default function ProductReviews({reviews}: {reviews: Reviews}) {
  
  return (
    <div>
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
