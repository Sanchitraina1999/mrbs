
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import Header from './components/Header'
import Footer from './components/Footer'
import LandingPageScreen from './screens/LandingPageScreen'
import LogInScreen from './screens/LogInScreen'
import SignUpScreen from './screens/SignUpScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3 bg-gray'>
        <Container>
          <Route exact path='/' component={LandingPageScreen}/>
          <Route path='/signup' component={LogInScreen}/>
          <Route path='/login' component={SignUpScreen}/>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App