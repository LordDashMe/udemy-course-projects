import React, { Component } from 'react';
import Radium from 'radium';

import Person from './Person/Person';

import './App.css';
import logo from '../logo.svg';

class App extends Component {
  
  state = {
    rolesVisibility: true,
    roles: [
      { id: 'P001', label: 'Developer' },
      { id: 'P002', label: 'Team Leader' }
    ],
  };

  togglePersons = () => {
    this.setState({
      roles: this.state.roles,
      rolesVisibility: !this.state.rolesVisibility
    });
  }

  switchRoleHandler = (addOnName) => {
    let roles = [...this.state.roles];
    
    if (addOnName) {
      if (roles[0].label.search(addOnName) <= -1) {
        roles[0].label += ' ' + addOnName;
      } else {
        roles[0].label = roles[0].label.replace(addOnName, '').trim();
      }
      this.setState({ roles: roles });
      return;
    }
    
    if (roles[0].label.search('Super') > -1) {
      roles = roles.map(role => {
        role.label = role.label.replace('Super', '').trim();
        return role;
      });
    } else {
      roles = roles.map(role => {
        role.label = 'Super ' + role.label;
        return role;
      });
    }

    // Do not change the state value without using the setState, thus
    // this will not trigger any changs on the DOM to update.
    //   Wrong: this.state.roles[0].label = secondRole;
    //   Wrong: this.state.roles[1].label = firstRole;
    this.setState({ roles: roles });
  }

  changeRoleHandler = (event, roleId) => {
    const roleIndex = this.state.roles.findIndex(role => {
      return role.id === roleId;
    });

    const role = {...this.state.roles[roleIndex]};
    role.label = event.target.value;

    const roles = [...this.state.roles];
    roles[roleIndex] = role;

    this.setState({ roles: roles });
  }

  render = () => {
    // Applying inline CSS style.
    const style = {
      'backgroundColor': 'green',
      'color': 'white',
      'font': 'inherit',
      'border': '1px solid black',
      'padding': '8px',
      'cursor': 'pointer',
      ':hover': {
        'backgroundColor': 'lightgreen',
        'color': 'black'
      }
    };

    let persons = null;

    if (this.state.rolesVisibility) {
      style.backgroundColor = 'red';
      style[':hover'] = {
        'backgroundColor': 'salmon',
        'color': 'black'
      };
      persons = (
        <div>
          {this.state.roles.map((role, index) => {
            return (
              <Person key={role.id}
                      id={role.id}
                      role={role.label}
                      parentClick={role.id === 'P001' ? this.switchRoleHandler.bind(this, 'From Child') : null}
                      changeRole={event => {this.changeRoleHandler(event, role.id)}}>
                      {role.id === 'P001' ? 'Who build the tree!' : ''}
              </Person>
            );
          })}
        </div>
      );
    }

    const pClasses = ['bold'];

    if (this.state.rolesVisibility) {
      pClasses.push('red');
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <br/>

        <h1>Hi, I'm a React App</h1>
        <p className={pClasses.join(' ')}>This is really working!</p>
        
        <button key="btn1" style={style} onClick={this.togglePersons.bind(this)}>Toggle Persons</button>
        <br/>
        <br/>

        {/* Anonymous function call might performance issue. */}
        <button key="btn2" style={style} onClick={() => this.switchRoleHandler('')}>Switch Role</button>
        
        {persons}

      </div>
    );
    // If you want to use react in a manually HTML implementation.
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, null, 'Hi!'), null);
  }
}

export default Radium(App);
