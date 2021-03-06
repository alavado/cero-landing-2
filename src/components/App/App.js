import { Switch, Route } from 'react-router-dom'
import Banner from '../Banner'
import Header from '../Header'
import QueEs from '../QueEs'
import Superior from '../Superior'
import Beneficios from '../Beneficios'
import Testimonios from '../Testimonios'
import Trabajemos from '../Trabajemos'
import Footer from '../Footer'
import AcercaDe from '../AcercaDe'
import Contacto from '../Contacto'
import Carreras from '../Carreras'
import ContactoDemo from '../ContactoDemo'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/contacto_demo">
          <Header />
          <ContactoDemo />
        </Route>
        <Route exact path="/">
          <Banner />
          <Header />
          <Superior />
          <QueEs />
          <Beneficios />
          <Testimonios />
          <Trabajemos />
        </Route>
        <Route path="/sobre">
          <Header />
          <AcercaDe />
          <Carreras />
        </Route>
        <Route path="/contacto">
          <Header invertir={true} />
          <Contacto />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
