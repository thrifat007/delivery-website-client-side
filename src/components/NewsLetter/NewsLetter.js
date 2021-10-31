import React from 'react';
import { Link } from 'react-router-dom';
import './NewsLetter.css';

const NewsLetter = () => {
    return (
        <div className="bg-grey">
            <div className="container">
                <div className="row justify justify-content-center">
                    <div className="col-12 col-lg-9 col-xl-8">
                        <form className="">
                            <div className="card">
                                <div className="row justify-content-center">
                                    <div className="col-md-9 col-11">
                                        <div className="row mt-0">
                                            <div className="col-md-12 ">
                                                <h4 className="text-center heading">get 10% off</h4>
                                                <p className="text-center sub-heading">subscribe to our newsletter & receive a coupon</p>
                                            </div>
                                        </div>
                                        <div className="form-group row mb-3">
                                            <div className="col-md-12 mb-0"> <input id="e-mail" type="text" placeholder="ENTER YOUR EMAIL" name="email" className="form-control input-box rm-border text-center" /> </div>
                                        </div>
                                        <div className="form-group row justify-content-center mb-0">
                                            <div className="col-md-12 px-3"> <input type="submit" value="GET IT NOW!" className="btn btn-block btn-black rm-border" /> </div>
                                        </div>
                                        <div className="form-group row justify-content-center mb-0">
                                            <div className="col-md-12 px-3 mt-4 text-decoration-none"> <Link to="/">
                                                <p className="thanks">no thanks</p>
                                            </Link> </div>
                                        </div>
                                        <div className="form-group row justify-content-center mb-0">
                                            <div className="col-md-12 px-3">
                                                <p className="conditions">* $50 minimum purchase</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;