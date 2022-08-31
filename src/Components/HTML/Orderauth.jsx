import React from 'react';
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";

const Orderauth = ({ order }) => {
	
  return (
    <div className="order my-4 postion-relative bg-white">
			<h2>Order</h2>
			<p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
			<p className="order__id postion-absolute">
				<small>{order.id}</small>
				
			</p>
			{order.data.basket?.map((item) => (
				<CheckoutProduct
                id={item.id}
                title={item.tit}
                price={item.pri}
                imgone={item.one}
                imgtwo={item.two}
                imgthree={item.three}
                rip={item.rip}
                zip={item.zip}
                rating={item.rate}
				hideButton
				/>
			))}
			<CurrencyFormat
				renderText={(value) => (
					<h3 className="order__total text-end fw-bold">Order Total: {value}</h3>
				)}
				decimalScale={2}
				value={order.data.amount / 100}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"$"}
			/>
		</div>
  )
}

export default Orderauth;