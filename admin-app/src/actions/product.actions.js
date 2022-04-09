import axios from "../helpers/axios"
import { productConstant } from "./Constants";


// export const addProduct = form=>{
//     return async dispatch=>{
//         const res=await axios.post('product/create',form)
//         console.log(res);
//     }
// }



// self
export const addProduct=(form,categories)=>{
    return async dispatch=>{
        dispatch({type:productConstant.ADD_NEW_PRODUCTS_REQUEST});
        const res=await axios.post('product/create',form);
        if(res.status===201){
            dispatch({
                type:productConstant.ADD_NEW_PRODUCTS_SUCCESS,
                payload: {product:res.data.product, categories:categories}
            });
        }else{
            dispatch({
                type:productConstant.ADD_NEW_PRODUCTS_FAILURE,
                payload: res.data.error
            });
        }
        console.log(res,res.status);
    }

}