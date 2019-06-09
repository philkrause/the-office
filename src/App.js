import React, { Component } from 'react'
import AddEmp from './components/AddEmp'
import HomePage from './components/pages/HomePage'
import EmpList from './components/pages/EmpList'
import EmpPage from './components/pages/EmpPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/AddEmployee' exact component={AddEmp} />
            <Route path='/EmployeeList' exact component={EmpList} />
            <Route path='/EmployeeList/:id' exact component={EmpPage} />
          </Switch>
        </Router>
      </>
    )

  }
}

export default App
