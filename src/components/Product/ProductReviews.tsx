import { fetchCustomerName } from '@/lib/api/customer/customer'
import ProductReview from './ProductReview'

export default function ProductReviews({reviews}: {reviews: any}) {
  
  return (
    <div>
      {
        reviews.map((review: any) => {
          return (
            <ProductReview key={review.id} review={review}/>
          )
        })
      }
    </div>
  )
}
