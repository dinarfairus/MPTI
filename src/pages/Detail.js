import React from 'react'
import Layout from '../components/Layout'
import { Button, Col, Container, Row } from 'react-bootstrap';

export default function Detail() {

    return (
        <Layout>
            <div style={{ marginTop: "50px", marginBottom: "50px" }}>
                <Container>
                    <Row>
                        <Col xs={5} className="d-flex justify-content-center">
                            <img src="/image/product.png" alt="product" width="80%"/>
                        </Col>
                        <Col xs={7}>
                            <div className="mt-4">
                                <h1 className="mb-4" style={{ fontWeight: "700" }}>Justice Cross Hoodie</h1>
                                <h3 className="mb-4" style={{ fontWeight: "700" }}>Rp. 260.000</h3>
                                <div style={{ width: "80%" }} className="mb-3">
                                    <h6 style={{ fontWeight: "600", borderBottom: "2px solid black", display: "inline" }}>DESCRIPTION</h6>
                                    <p className="mt-4">Hoodie in sweatshirt fabric with a double-layered drawstring hood, kangaroo pocket and wide ribbing at the cuffs and hem. Soft brushed inside.</p>
                                </div>
                                <Row className="mb-4" style={{ width: "40%" }}>
                                    <Col>
                                        <h6 style={{ fontWeight: "600" }}>SIZE</h6>
                                    </Col>
                                    <Col>
                                        <h6 style={{ fontWeight: "400" }}>All Size</h6>
                                    </Col>
                                </Row>
                                <Row className="mb-4" style={{ width: "40%" }}>
                                    <Col>
                                        <h6 style={{ fontWeight: "600" }}>STOCK</h6>
                                    </Col>
                                    <Col>
                                        <h6 style={{ fontWeight: "400" }}>21 Items</h6>
                                    </Col>
                                </Row>
                                <Button href="
                                https://wa.me/6289602649130?text=Halo%20kak%2C%20Mau%20pesan%20merchandise%20by%20Mrch%20dengan%20detail%20%3A%0A%0ANama%20Produk%20%3A%20Justice%20Cross%20Hoodie%0AUkuran%20%3A%20All%20Size%0AJumlah%20Produk%20%3A%201%0A%0ABerikut%20saya%20sertakan%20data%20diri%20saya%20%3A%0A%0ANama%20%3A%20Dinar%20Fairus%20Salsabillah%0AAlamat%20%3A%20Jln.%20Panjaitan%20Gg%2019%20no%201%0ANo%20Telp%20%3A%20089602649111
                                " variant="dark" className="btn-buynow">Buy It Now</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Layout>
    )
}
