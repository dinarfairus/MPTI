import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import CardProduct from '../components/CardProduct'
import Layout from '../components/Layout'

const LandingPage = () => {
    return (
        <Layout>
            <section id="hero">
                <div style={{ backgroundColor: "#F2D492" }}>
                    <Container>
                        <Row>
                            <Col className="pt-4">
                                <img src="/image/hero-image.png" alt="hero-image" width="90%" />
                            </Col>
                            <Col className="my-auto">
                                <div className="fw-bold fs-5 mb-3">New Arrival</div>
                                <h1 className="mb-3" style={{ fontWeight: "800", fontSize: "3.5rem" }}>Justin Bieber's <br /> <span style={{ color: "#202C39" }}>Merchandise</span></h1>
                                <Button variant="light" style={{ fontWeight: "500" }}>SHOP NOW</Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
            <section id="hot-deals" className="my-4">
                <Container>
                    <div className="text-center" style={{ marginTop: "40px", marginBottom: "40px" }}>
                        <h2 style={{ fontWeight: "700" }}>HOT DEALS</h2>
                    </div>
                    <div>
                        <Row>
                            <Col>
                                <CardProduct isHotDeals={true} />
                            </Col>
                            <Col>
                                <CardProduct isHotDeals={true} />
                            </Col>
                            <Col>
                                <CardProduct isHotDeals={true} />
                            </Col>
                            <Col>
                                <CardProduct isHotDeals={true} />
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
            <hr/>
            <section id="new-arrivals" className="my-4">
                <Container>
                    <div className="text-center" style={{ marginTop: "40px", marginBottom: "40px" }}>
                        <h2 style={{ fontWeight: "700" }}>NEW ARRIVALS</h2>
                    </div>
                    <div>
                        <Row>
                            <Col>
                                <CardProduct />
                            </Col>
                            <Col>
                                <CardProduct />
                            </Col>
                            <Col>
                                <CardProduct />
                            </Col>
                            <Col>
                                <CardProduct />
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </Layout>
    )
}

export default LandingPage
