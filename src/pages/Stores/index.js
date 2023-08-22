import { useState } from "react";
import { useEffect } from "react";
import "./index.css"
import { Music } from "./data";
import { MERCH } from "./data";
function Stores(){
    const button = document.querySelectorAll('.add');
    const [data,setData] = useState([]);
    const [dataMerch,setDataMerch] = useState([]);    
    const [store,setStore] = useState([]);
    const [cart,setCart] = useState([]);
    function Up(data){
        const upCart = cart.map(
            (item) =>{
                if( item.id === data.id ){
                    return  {...item, quantity : item.quantity + 1}
                }
            }
        )
        setCart(upCart)
    }
    function Remove(data) {
        const updatedCart = cart.filter(item => item.id !== data.id);
        setCart(updatedCart);
      }
    function clear(data){
        const upDateCart = [];
        setCart(upDateCart);
        alert("Thank you for your purchase");
    }
    function Down(data){
        const upCart = cart.map(
            (item) =>{
                if( item.id === data.id ){
                    return  {...item, quantity : item.quantity - 1}
                }
            }
        )
        setCart(upCart)
    }
    function AddToCart(data){
    
        const checkStore = cart.find((item) => item.id === data.id);
    
        if(checkStore){
            const upDateCart = cart.map(
                (item) =>{
                    if( item.id === data.id ){
                        return  {...item, quantity : item.quantity + 1}
                    }
                }
            )
            setCart(upDateCart)
        }else{
            const upDateCart = [...cart,{...data,quantity: 1}];
            setCart(upDateCart)
        }
    }

    return(
        <>
            <div className="container-store">
               <div className="inner-content">
               <div className="inner-title-store">
                    <h1>MUSIC</h1>
                </div>
                <div className="inner-product">
                    {Music.map(
                        (data) => {
                            return(
                                <div className="inner-box">
                                <div className="inner-title-child">
                                    {data.title}
                                 </div>
                                <div className="inner-img-store">
                                    <img src={data.thumbnail}/>
                                </div>
                                <div className="inner-price">
                                    {data.price}
                                    <div className="add" onClick={() => AddToCart(data)}>
                                        add to Cart
                                    </div>
                                </div>
                                </div>
                            )
                        }
                    )}
                </div>
               </div>
               <div className="inner-content">
               <div className="inner-title-store-2">
                    <h1>MERCH</h1>
                </div>
                <div className="inner-product">
                    {MERCH.map(
                        (dataMerch) => {
                            return(
                                <div className="inner-box">
                                    <div className="inner-title-child">
                                        {dataMerch.title}
                                    </div>
                                    <div className="inner-img-store">
                                        <img src={dataMerch.thumbnail}/>
                                    </div>
                                    <div className="inner-price">
                                        {dataMerch.price}
                                        <div className="add"
                                        onClick={() => {AddToCart(dataMerch)}}
                                        > 
                                        add to Cart
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    )}
                </div>
               </div>
               <div className="inner-content">
               <div className="inner-title-store-2">
                    <div className="inner-store">
                        <div className="inner-h1">
                        <h1>CART</h1>
                        </div>
                        <div className="inner-shop-10">
                            <div className="inner-Item-10">ITEM</div>
                            <div className="inner-Price-10">PRICE</div>
                            <div className="inner-Quantity-10">QUANTITY</div>
                        </div>
                        <div className="inner-shopping-10">
                                {cart.map(
                                    (data) => {
                                        return(
                                            <div className="inner-product-10">
                                            <div className="inner-img-10">
                                            <img src={data.thumbnail}/>
                                            </div>
                                            <div className="inner-title-child-10">
                                            {data.title}
                                            </div>
                                            <div className="inner-price-10">
                                                {"$" + data.price.substring(1)*data.quantity}
                                            </div>
                                            <div className="inner-quantity">
                                            <div className="inner-1">
                                            <button className="inner-up" onClick={() => Up(data)}>+</button>
                                            </div>
                                            <div className="inner-quantity-10">
                                                {data.quantity}
                                            </div>
                                            <div className="inner-2">                       
                                                     <button className="inner-down" onClick={() => Down(data)}>-</button></div>
                                            </div>
                                            <button className="button-shop" onClick={() => Remove(data)}>Remove</button>
                                            </div>
                                        )
                                    }
                                )}
                            </div>
                          
                    </div>
                </div>
                </div>
            </div>
            <div>
                                                                               
            <div className="inner-total">
                        <div className="inner-sum">{
                           "$" + cart.reduce((accumulator,curentvalue) => accumulator + curentvalue.price.substring(1)*curentvalue.quantity,0)
                        }</div>
                        <div className="total">Total</div>
                    </div>
            
        </div>
        <div className="container">
        <div className="inner-Pucharse" onClick={() => clear()}>PUCHARSE</div>
        </div>

        </>
    )
}
export default Stores;

