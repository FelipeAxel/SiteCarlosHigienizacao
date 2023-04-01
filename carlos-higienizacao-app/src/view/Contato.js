import React from "react";

class Contato extends React.Component {
    render() {
        return (
            <div className="container">
                <form>
                    <fieldset>
                        <legend>Entre em contato</legend>
       
                        <div className="form-group">
                            <label hmtlFor="exampleInputEmail1" className="form-label mt-4">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label hmtlFor="exampleTextarea" className="form-label mt-4">Example textarea</label>
                            <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default Contato