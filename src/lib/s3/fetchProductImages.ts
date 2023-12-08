'use server'
import { bucketConnect } from "../services/S3Connection";
const { ListObjectsV2Command, GetObjectCommand } = require("@aws-sdk/client-s3"); 


async function getProductImages(product: {id: string}) {
  try {
    const s3 = bucketConnect()
    if (s3.Error) throw s3.Error


    const list_params = {
      Bucket: `${process.env.S3_BUCKET}`,
      Key: 'product/' + product.id + '/',
    }
    const list_command = new ListObjectsV2Command(list_params)
    const list_resS3 = await s3.send(list_command)
    if (list_resS3['$metadata'].httpStatusCode !== 200) throw "5000"

    const images: string[] = []
    list_resS3.Contents.forEach(
        (item: {Key: string}) => {
          images.push(`https://${process.env.S3_BUCKET}.s3.${process.env.S3_REGION}.amazonaws.com/${item.Key}`)
        })
    
    return images

  } catch (error: any) {
    return {Error: error}
  }
}

export {
  getProductImages
}