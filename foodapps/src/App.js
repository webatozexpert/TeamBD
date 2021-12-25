import React, {Component} from 'react';
import InvociseEdit from './components/InvociseEdit';
import "./assets/css/tailwind.css"

class Invoices extends Component {
    render() {
        return (
           <div>
               <InvociseEdit/>
           </div>
        );
    }
}

export default Invoices;