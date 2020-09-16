import React, {Component} from 'react';
import '../App.css';
import Contacts from "./Contacts";

class App extends Component{
    constructor() {
        super();
        this.addContact = this.addContact.bind(this);
    };

    state = {
        contacts: [
            {
                name: 'Ümit Kütük',
                phone: '12312312332'
            }
        ]
    };

    addContact(contact){
        const { contacts } = this.state;
        contacts.push(contact);
        this.setState({
            contacts
        });
    };

    render() {
      return (
          <div className="App">
              <Contacts
                  addContact={this.addContact}
                  contacts={this.state.contacts}
              />
          </div>
      );
    }
}

export default App;
