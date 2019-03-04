import React, { Component } from 'react';
import axios from 'axios';

const ProductContext = React.createContext();
const detailProducts = 0;

class ProductProvider extends Component {
  state={
    products:[],
    detailProducts:detailProducts,
    cart:[],
    modalOpen:false,
    loginModalOpen:true,
    modalProduct:detailProducts,
    cartSubTotal:0,
    cartTax:0,
    cartTotal:0
  }
  componentDidMount(){
    this.setProducts()
  }
  setProducts = () =>{
    axios.get('https://e-tshirt-store.herokuapp.com/api/v2/products').then(
      (response)=>{
      this.setState({
        products:response.data.data
      })

    })

  }
  getItem =id =>{
    const product = this.state.products.find(item =>
       item.id ===id)
    return product
}
  handleDetail = (id) =>{
    const product = this.getItem(id)
    this.setState(() =>{
      return {detailProducts:product}
    })

  }
  addToCart = id =>{
    let tempProducts = [...this.state.products]
    const index = tempProducts.indexOf(
      this.getItem(id))
    const product = tempProducts[index]
    product.incart = true
    product.count = 1
    const price = product.price
    product.total = price
    this.setState(
      () => {
        return {products:tempProducts,
          cart:[...this.state.cart,
          product] }
      },
      () => {
        this.addTotals()
      }
    )

  }
openModal = id =>{
    const product = this.getItem(id)
    this.setState(() =>{
      return {modalProduct:product,modalOpen:true}
    })
  }
openLoginModal = () =>{
      this.setState(() =>{
        return {loginModalOpen:true}
      })
  }
closeModal = () =>{
  this.setState(() =>{
    return {modalOpen:false}
  })
}
increment = (id) =>{
  let tempCart = [...this.state.cart]
  const selectedProduct = tempCart.find(
    item =>item.id === id)
  const index = tempCart.indexOf(
    selectedProduct)
  const product = tempCart[index]

  product.count = product.count + 1
  product.total = product.price * product.count

  this.setState(() => {
    return {cart:[...tempCart]}
  },() =>{
    this.addTotals()
  })
}
decrement = (id) =>{
  let tempCart = [...this.state.cart]
  const selectedProduct = tempCart.find(
    item =>item.id === id)
  const index = tempCart.indexOf(
    selectedProduct)
  const product = tempCart[index]

  product.count = product.count - 1
  if (product.count === 0){
    this.removeItem(id)
  }else{
    product.total = parseFloat((product.price * product.count).toFixed(2))

    this.setState(() => {
      return {cart:[...tempCart]}
    },() =>{
      this.addTotals()
    })
  }
}
removeItem = (id) =>{
  let tempProducts =
   [...this.state.products]
  let tempCart = [...this.state.cart]
tempCart = tempCart.filter(item =>
  item.id !== id)
const index = tempProducts.indexOf(
  this.getItem(id))
  let removedProduct = tempProducts[index]
  removedProduct.incart = false
  removedProduct.count = 0
  removedProduct.total = 0

  this.setState(
    () => {
      return {
        cart:[...tempCart],
        products:[...tempProducts]
      }
    },
    () => {
      this.addTotals()
    }
  )

}
clearCart= (id) =>{
  this.setState(() =>{
    return {cart:[]}

  },
  () =>{
    this.setProducts()
    this.addTotals()
  }
)

}
addTotals = () =>{
  let subTotal = 0
  this.state.cart.map(item =>(
    parseFloat((subTotal += item.total).toFixed(2)) ))

    const tempTax = subTotal * 0.16
    const tax = parseFloat(
      tempTax.toFixed(2))
    const total = parseFloat((subTotal + tax).toFixed(2))

    this.setState(() =>{
      return {
        cartSubTotal:subTotal,
        cartTax:tax,
        cartTotal:total
      }
    })
}

  render() {
    return (
    <ProductContext.Provider value={{
      ...this.state,
      handleDetail:this.handleDetail,
      addToCart:this.addToCart,
      openModal:this.openModal,
      closeModal:this.closeModal,
      increment:this.increment,
      decrement:this.decrement,
      removeItem:this.removeItem,
      clearCart:this.clearCart,
      openLoginModal:this.openLoginModal
    }}>
     {this.props.children}
    </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer
export { ProductProvider, ProductConsumer}
