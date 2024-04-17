
import { useQuery } from '@tanstack/react-query'

import instance from '../config/axios'

const useProductQuery = (id?:number|string) => {
    const query = useQuery({
        queryKey:['PRODUCT_KEY',id],
        queryFn: async()=>{
            try {
                return id? await instance.get(`/products/${id}`):await instance.get(`/products`)
            } catch (error) {
                console.log(error)
                return []
            }
        }
    })
  return query
}

export default useProductQuery