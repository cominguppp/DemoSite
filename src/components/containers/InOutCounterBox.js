import React, {Component} from 'react';
import 'font-awesome/css/font-awesome.min.css';

class InOutCounterBox extends Component {
      render() {
            return (<div className='in-out-counter-box align-self-center containers text-white'>
                  <span>
                        <div className='d-flex flex-column bd-highlight mb-3 display-table'>
                              <div className='table-row'>
                                    <div className='fontawesome-containers table-cell text-center fontawesome-user '>
                                          <i className="fa fa-user "></i>
                                    </div>
                                    <div className='in-out-containers table-cell'>
                                          <div className="p-2 bd-highlight counter-in col-sm-12 text-center des-text">
                                                In: &nbsp;
                                                <span>
                                                      5
                                                </span>
                                          </div>
                                          <div className="p-2 bd-highlight counter-out col-sm-12 text-center des-text">
                                                Out: &nbsp;
                                                <span>
                                                      7
                                                </span>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <div className="d-flex flex-column bd-highlight ">
                              <div className='table-row'>
                                    <div className='fontawesome-containers table-cell text-center fontawesome-users'>
                                          <i className="fa fa-users "></i>
                                    </div>
                                    <div className='in-out-containers table-cell text-right'>
                                          <div className="p-2 bd-highlight counter-total col-sm-12 text-center des-text">
                                                Total: &nbsp;
                                                <span>
                                                      12
                                                </span>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </span>
            </div>)
      }
}

export default InOutCounterBox
