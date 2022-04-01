import { delete_cart_failure, delete_cart_request, delete_cart_success, get_cart_failure, get_cart_request, get_cart_success } from "./Cart.action"
import {api} from "../../Server/Server";
import axios from "axios";

export const cartapi = (params)=>(dispatch)=>{
    dispatch(get_cart_request())
    axios
    .get("https://snapdeal-backend.herokuapp.com/cart")
    .then((res)=>{
        console.log(res.data)
        dispatch(get_cart_success(res.data))
    })
    .catch((err)=>{
        dispatch(get_cart_failure())
        console.log(err)
    })

}


export const delete_api = (id)=> (dispatch)=>{
    console.log("id",id)
     dispatch(delete_cart_request());
     axios
     .delete(`https://snapdeal-backend.herokuapp.com/cart/${id}`)
     .then( (res)=>{
       dispatch(delete_cart_success(id))
         console.log(res)
         cartapi();
     })
     .catch((res)=>{
         dispatch(delete_cart_failure())
         console.log(res)
     })
 }