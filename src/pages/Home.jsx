import React, {useEffect,useState} from "react";
import Nav from '../components/Nav'
import Main from '../components/Main'
import Footer from '../components/Footer'
import Formulario from "../components/Formulario"
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import loading from "../assets/Loading_icon.gif"
import "../components/styles/home.css"
import WhatsAppButton from "../components/WhatsAppButton";
import FiltrarProductos from "../components/FiltrarProductos";
import hacia_abajo from '../assets/flecha-abajo.webp'
import DetallesProducto from "../components/detallesProducto";

const Home = ({cart,handlerAddToCart,handlerRemoveFromCart}) => {
    const countItem = cart.length;
    const [productos, setProductos] = useState([]);
    const [carga, setCarga] = useState(true);
    const [filtro, setFiltro] = useState('');
    const [detalle, setDetalle] = useState(null);


    useEffect(()=>{
      fetch('https://681d9331f74de1d219b03777.mockapi.io/productos')
        .then((respuesta) => respuesta.json())
        .then((datos) => {setProductos(datos) 
                          setCarga(false)})
        .catch((error) => {console.error('Error:', error)
                           setCarga(false)
        });

    },[]);

    const productosFiltrados = productos.filter((producto)=> producto.nombre.toLowerCase().includes(filtro.toLowerCase()))

    if(detalle){
      return(
        <div>
          <Nav countItem={countItem} />
          <DetallesProducto producto={detalle} onClose={()=>setDetalle(null)}/>
        </div>
      )
    }
    return (
        <>
        <Nav countItem={countItem}/>
        <div 
          id="main-section" 
          style={{
            position: 'relative',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Main />
          
          {/* Flecha abajo fija al fondo de la sección */}
          <a 
            href="#products-section" 
            style={{
              position: 'absolute',
              bottom: '10%', 
              left: '50%',
            }}
          >
            <img 
              src={hacia_abajo} 
              alt="flechas" 
              style={{
                width: '50px',
                height: '50px',
                opacity: 0.7,
                transition: 'opacity 0.3s',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => e.currentTarget.style.opacity = 1}
              onMouseOut={(e) => e.currentTarget.style.opacity = 0.7}
            />
          </a>
        </div>

        <div id="products-section" className="container mt-5">
          <FiltrarProductos filtro={filtro} setFiltro={setFiltro} />
          {
            carga 
              ? <img src={loading} alt="loading" />
              : <ProductList 
                  products={productosFiltrados}
                  addToCart={handlerAddToCart}
                  removeFromCart={handlerRemoveFromCart}
                  setDetalle={setDetalle}
                />
          }
          <Cart cartItems={cart} handlerRemoveFromCart={handlerRemoveFromCart} countItem={countItem} />
          <WhatsAppButton />
        </div>
        <div className="d-flex justify-content-center" style={{
          backgroundColor:'#1d2024',
          padding: '2rem 1rem',
          color: 'white'}}>
          <div className="last_section d-flex flex-column">
          <Formulario />
          <Footer />
        </div>
        </div>
        </>
      )

}

export default Home