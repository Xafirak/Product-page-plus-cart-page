import { Route, Routes } from 'react-router-dom'
import ProductsPage from './Components/main-page/ProductsPage'
import Cart from './Components/cart-page/Cart'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import ErrorPage from './Components/error-page/ErrorPage'
import Box from '@mui/material/Box'

function App() {
    return (
        <Box
            style={{
                backgroundColor: '#EAEAEA',
            }}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minHeight="100vh"
        >
            <Header />
            <Box marginBottom="auto" width="70%">
                <Routes>
                    <Route path="/" element={<ProductsPage />} />
                    <Route path="/productCart" element={<Cart />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </Box>

            <Footer />
        </Box>
    )
}

export default App
