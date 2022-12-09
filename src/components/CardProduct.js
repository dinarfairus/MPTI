import React from 'react'
import { Button } from 'react-bootstrap'

const CardProduct = ({ isHotDeals, id, name, price, image }) => {
    return (
        <div style={{ width: "15rem" }} className="card-product rounded">
            <a href="/detail">
                <div className="position-relative">
                    {isHotDeals ? <div className="ms-2 mt-2 position-absolute top-0 left-0 badge bg-danger">Hot Deals</div> : ""}
                    <img src="/image/product.png" alt="product" width="100%" />
                </div>
                <div className="px-3">
                    <div className="mt-3">
                        <h5>Peaches Hat</h5>
                    </div>
                    <div className="mb-3">
                        <h5>Rp. 260.000</h5>
                    </div>
                </div>
            </a>
            <div className="px-3 pb-3">
                <Button href="
                https://wa.me/08123456789?text=Halo%20kak%2C%20Mau%20pesan%20merchandise%20by%20Mrch%20dengan%20detail%20%3A%0A%0ANama%20Produk%20%3A%20Justice%20Cross%20Hoodie%0AUkuran%20%3A%20All%20Size%0AJumlah%20Produk%20%3A%201%0A%0ABerikut%20saya%20sertakan%20data%20diri%20saya%20%3A%0A%0ANama%20%3A%20Dinar%20Fairus%20Salsabillah%0AAlamat%20%3A%20Jln.%20Panjaitan%20Gg%2019%20no%201%0ANo%20Telp%20%3A%20089602649111
                " 
                variant="dark" className="btn-buy">Buy Now</Button>
            </div>
        </div>
    )
}

export default CardProduct
