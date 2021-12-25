// @flow strict

import React, {Component, Fragment} from 'react';



class InvociseEdit extends Component {
    render() {
        return (
            <Fragment>
                <div className="container mx-auto px-7">
                    <div>
                        <h1 className="font-bold mt-10 text-xl">Invoices</h1>
                        <h3 className="mt-10 font-medium">Payment Info</h3>
                    </div>
                    <hr className="text-gray-300 border-t-2 mt-2"/>
                    <div className="mt-1">
                       
                    <from class="space-y-2">
                        <div>
                            <label class="block  mr-3"><span class="mb-1 font-bold text-write-300" >Name</span> (on the bank account)</label>
                            <input type="text" placeholder='Rakib' class=" border border-red-500 px-1 py-1 rounded-lg "/>   
                        </div>
                        <div>
                            <label class="block mb-1 font-bold text-write-300 mr-3">Bank Name</label>
                            <input type="text" placeholder='Bank Name' class="border border-red-500 px-1 py-1 rounded-lg"/>
                        </div>
                        <div>
                            <label class="block mb-1 font-bold text-write-300 mr-3">Sort Code</label>
                            <input type="text" placeholder='Sort Code' class="border border-red-500 px-1 py-1 rounded-lg"/>  
                        </div>
                        <div>
                            <label class="block mb-1 font-bold text-write-300 mr-3"> Account Number</label>
                            <input type="text" placeholder='Account Number' class="border border-red-500 px-1 py-1 rounded-lg"/> 
                        </div>


                        <button class="block bg-red-500 px-4 py-1 rounded text-white hover:bg-red-700 transition duration-300">Save</button>
                    </from>
  
                      
                        
                       
                    </div>

                <hr className="text-gray-300 border-t-2 mt-2"/>
                    <div className="columns-1 mt-3">
                        <span className="font-medium">Invoice of : </span> <span className="text-red-700 font-medium"> 13 Dec 2021 </span> <span> to </span> <span className="text-red-700 font-medium"> 19 Dec 2021, </span> <span className="font-medium mr-5">Of</span>
                        {/*<span className="border-2 pl-6 pr-2 py-2 rounded-full">*/}
                        {/*    <span className="mr-2"><FontAwesomeIcon  icon={faCalendarAlt} /> </span><span className="font-medium"> Select Date <input type="date" placeholder="Select Date"/></span><span className="ml-2 bg-gray-200 px-3 py-1  rounded-full text-gray-500"><FontAwesomeIcon  icon={faAngleDown} /></span>*/}
                        {/*</span>*/}
                        <input type="date"  className="border-2 mt-3 focus:outline-none focus:shadow-outline pl-5 pr-2 py-2 rounded-full text-gray-500"/>

                    </div>

                </div>
            </Fragment>
        );
    }
}

export default InvociseEdit;