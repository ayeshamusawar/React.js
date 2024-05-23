import React, { useContext} from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Items from './Items';
import { CartContext } from './ShoppingCart';
import Footer from '../../Footer/Footer';

const ContextCart = () => {
    const { item, clearCart, totalItem } = useContext(CartContext);

    if (item.length === 0) {
        return (
            <Container>
                <section className='main-cart-section'>
                    <h1>Shopping Cart</h1>
                    <p className='total-items'> You have <span className='total-itemms-count'>{totalItem}</span> items in shopping cart</p>
                </section>
            </Container>
        );
    }

    return (
        <div>
            <Container>
            <section className='main-cart-section'>
                <h1>Shopping Cart</h1>
                <p className='total-items'> You have <span className='total-itemms-count'>{totalItem}</span> items in shopping cart</p>

                <div className='cart-items' style={{ backgroundColor: "#F7F7F7" }}>
                    {
                        item.map((curItem) => {
                            return <Items key={curItem.id} {...curItem} />
                        })
                    }
                </div>

                <div className='d-flex mt-3 flex-column align-items-end'>
                    <h3>Cart Total : <span>2200rs</span></h3>
                    <div className='d-flex h=justify-content-end m-2'>
                        <button style={{ backgroundColor: "#0052A4", color: "white", borderRadius: "10px", padding: "0.5vw", border: "none" }}>
                            CHECKOUT
                        </button>
                        <Button style={{ marginLeft: "1vw" }} variant="danger" onClick={clearCart}>
                            CLEAR CART
                        </Button>
                    </div>
                </div>
            </section>
        </Container>

        <Footer />
        </div>

       
    )
}

export default ContextCart;
