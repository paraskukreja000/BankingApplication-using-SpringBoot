import './App.css';
import Header from './components/Header';
import { Col, Container, Row } from 'reactstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Options from './components/Options';
import Home from './components/Home';
import Account from './components/Account';
import AllAccounts from './components/AllAccounts';
import AddAccount from './components/AddAccount';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import AccountByNo from './components/AccountByNo';


function App() {
  return (
    <div>
      <Router>
        <ToastContainer/>
        <Container>
        <Routes>
                <Route path="/"             exact element={<Header title={"Welcome to Bank Services"}/>} />
                <Route path="/accounts"     exact element={<Header title={"All Accounts"}/>} />
                <Route path="/your-account" exact element={<Header title={"Your Account"}/>} />
                <Route path="/add-account"  exact element={<Header title={"Add New Account"}/>} />
                <Route path="/deposit"      exact element={<Header title={"Deposit Money"}/>} />
                <Route path="/withdraw"     exact element={<Header title={"Withdraw Money"}/>} />
              </Routes>
          {/* <Header /> */}
          <Row>
            <Col md={4}><Options/></Col>
            <Col md={8}>
              <Routes>
                <Route path="/" exact element={<Home/>} />
                <Route path="/accounts" exact element={<AllAccounts/>} />
                <Route path="/your-account" exact element={<AccountByNo/>} />
                <Route path="/add-account" exact element={<AddAccount/>} />
                <Route path="/deposit" exact element={<Deposit/>} />
                <Route path="/withdraw" exact element={<Withdraw/>} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
