import './App.css'
import React from 'react'
    //Navbar with account address
    class Main extends React.Component{
        render() {
            var isTrue=false;
            if(this.props.peopleCount===1) {
                isTrue=true;
            }
            return(
                <span>
                <div className="container">
                    <h1 className="text-center text-white display-3 m-md-3">You are able to see: {this.props.peopleCount} {isTrue
                    ? <span>people</span>
                    : <span>person</span>
                    }</h1>
                    <table className="table h1 border-warning m-md-5">
                      <thead>
                        <tr>
                          <th className="border-top-0" scope="col">#</th>
                          <th className="border-top-0" scope="col">Name</th>
                          <th className="border-top-0" scope="col">Age</th>
                        </tr>
                      </thead>
                        <tbody>
                        {this.props.people.map((item, i) => {
                            return (
                                <tr>
                                    <th scope="row">{i}</th>
                                    <td>{item.name}</td>
                                    <td>{item.age.toString()}</td>
                                </tr>
                            );
                        })
                        }
                        </tbody>
                        </table>
                      <form className="m-md-5" onSubmit={(event => {
                          event.preventDefault();
                          this.props.addPerson(this.name.value, this.age.value)
                      })}>
                          <div className="row justify-content-center">
                      <div className="form-group col-md-6">
                        <input ref={(input) => this.name = input} className="form-control" placeholder="Enter name"/>
                      </div>
                      <div className="form-group col-md-6">
                        <input ref={(input) => this.age = input} className="form-control" placeholder="Enter age"/>
                      </div>

                      <button type="submit" className="btn btn-warning btn-lg col-3 font-weight-bold">Add new person!</button>
                               </div>
                    </form>
                </div>

                </span>
            );

        }
    }

export default Main
