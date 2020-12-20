import React from 'react';

const Contact = () => {
    return (
        <section className="jumbotron mt-5" style={{backgroundColor: '#FBD062'}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1 style={{color:'#2D2D2D'}}><b>Let us handle your project, professionally.</b></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta consectetur voluptate at autem. Dolorem recusandae architecto nam provident! Repellendus inventore ipsa minima amet perferendis rerum dolor quis.</p>
                    </div>
                    <div className="col-md-6">
                        <div>
                            <input type="text" className="form-control m-2" placeholder="Your email address"/>
                            <input type="text" className="form-control m-2" placeholder="Your Name/Company's Name"/>
                            <textarea className="form-control m-2" cols="30" rows="10" placeholder="Your message"></textarea>
                            <button className="btn btn-dark m-2">Send</button>
                        </div>
                    </div>
                </div>
                <p className="text-center" style={{marginTop:'100px'}}><small>Designed By Faysal@c2020</small></p>
            </div>
        </section>
    );
};

export default Contact;