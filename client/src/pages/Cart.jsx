import React, { useState,useEffect} from 'react'
import CartItem from '../components/CartItem'
import banner from '../assets/home-bottom-banner2.jpg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ToastContainer,toast } from 'react-toastify'
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios";
import GooglePayButton from '@google-pay/button-react'

const Cart = () => {
  const productData = useSelector((state) => state.flexedge.productData);
  const userInfo= useSelector((state) => state.flexedge.userInfo)
  const [totamt,setTotamt]=useState("")
  const [pay,setPay]=useState(false)
  
  useEffect(() => {
    let price=0;
    productData.map((item) => {
      price+=item.price * item.quantity;
      return price;
    });
    setTotamt(price);
  },[productData]);
  
  const handleCheckout = () => {
      if(userInfo){
        setPay(true)
      } else{
        toast.error("please sign in")
      }
  }
  const payment = async(token)=>
  await axios.post("https://flexedge.onrender.com/pay", {
  amount:totamt * 100,
  token : token,
  });
  return (
    <div>
      <Link to="/gymoutfits">
        <img
        className="w-full h-full object-cover mt-8"
        src={banner}
        alt="cartImg"
        />
      </Link>

      <div className="max-w-screen-xl px-5 py-10 flex flex-col gap-2  lg:flex-row">
        <CartItem />
        <div className="w-3/3 bg-[#fafafa] py-6 px-4 sm:w-2/3 lg:w-1/3">
          <div className=" flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
            <h2 className="text-2xl font-medium ">cart totals</h2>
            <p className="flex items-center gap-4 text-base">
            Subtotal{" "}
            <span className="font-titleFont font-bold text-lg">$ {totamt}</span>
            </p>
            <p className='flex items-center gap-4 text-base'>
              Shipping{" "}
              <span>
                Lorem, ipsum dolor sit amet consectutor adipisicing elit.quos ,
                versatile.
              </span>
            </p>
          </div>
          <p className='font-titleFont font-semibold flex justify-between mt-6'>
          Total<span className='text-xl font-bold'>$ {totamt}</span>
          </p>
          <button onClick={handleCheckout} className='text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300'>
            proceed to checkout
          </button>
          {
            pay && <div>
            <StripeCheckout
                className='mx-20 mt-4 min-w-60'
                stripeKey="pk_test_51OP2QGSIF347d4QTyMA5cNNzQg9pBnrxzlICBHDqy9vyYCXJhcKskvlfiV3aVxPTPYOvvxUbAFxQRusoEp22r4Ko00opmfi3BY"
                name="FlexEdge.com"
                amount={totamt * 100}
                Label="Pay to bazar"
                description={`Your Payment amount is $${totamt}`}
                token={payment}
                email={userInfo.email}
                />
            <GooglePayButton
                className='mx-20 mt-3'
                environment="TEST"
                paymentRequest={{
                apiVersion: 2,
                apiVersionMinor: 0,
                allowedPaymentMethods: [
                  {
                    type: 'CARD',
                    parameters: {
                      allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                      allowedCardNetworks: ['MASTERCARD', 'VISA'],
                    },
                    tokenizationSpecification: {
                      type: 'PAYMENT_GATEWAY',
                      parameters: {
                        gateway: 'example',
                        gatewayMerchantId: 'exampleGatewayMerchantId',
                      },
                    },
                  },
                ],
                merchantInfo: {
                  merchantId: '12345678901234567890',
                  merchantName: 'Demo Merchant',
                },
                transactionInfo: {
                  totalPriceStatus: 'FINAL',
                  totalPriceLabel: 'Total',
                  totalPrice: totamt+'.00',
                  currencyCode: 'USD',
                  countryCode: 'US',
                },
                shippingAddressRequired:true,
                callbackIntents:['PAYMENT_AUTHORIZATION']
              }}
              onLoadPaymentData={paymentRequest => {
                console.log('load payment data', paymentRequest);
              }}
              onPaymentAuthorized={paymentData =>{
                console.log(paymentData);
                return{transactionState:'SUCCESS'}
              }}
              existingPaymentMethodRequired = 'false'
              buttonColor='black'
              buttonType='buy'
            ></GooglePayButton>
            </div>
          }
          
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
</div>
  )
}

export default Cart
