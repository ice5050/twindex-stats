import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Countdown from './components/Countdown'
import Header from './components/Header'
import LPTable from './components/LPSection'
import MintSection from './components/MintSection'
import PriceCard from './components/PriceCard'
import StockTable from './components/StockSection'
import { getDopplePrice, getTwinPrice } from './modules/GovernanceToken'

const App = () => {
  const [twinPrice, setTwinPrice] = useState('')
  const [dopplePrice, setDopplePrice] = useState('')

  useEffect(() => {
    ;(async () => {
      setTwinPrice(await getTwinPrice())
      setDopplePrice(await getDopplePrice())
    })()
  }, [])

  return (
    <>
      <Header />
      <Container className="mt-3">
        <Row>
          <Col md="3">
            <PriceCard symbol="TWIN" price={twinPrice} />
          </Col>
          <Col md="3">
            <PriceCard symbol="DOP" price={dopplePrice} />
          </Col>
          <Col md="6">
            <Countdown />
          </Col>
          <Col md="12" className="mt-3">
            <LPTable />
          </Col>
          <Col md="6" className="mt-3">
            <MintSection />
          </Col>
          <Col md="6" className="mt-3">
            <StockTable />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
