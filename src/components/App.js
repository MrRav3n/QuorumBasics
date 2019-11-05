import React, { Component } from 'react';
import Navbar from "./Navbar"
import './App.css';
import Web3 from 'web3'
import Main from './Main'
import BasicContract from '../abis/BasicContract.json'
class App extends Component {

    async componentWillMount() {
        await this.loadWeb3();
        await this.loadContract();
        await this.loadAccount();
        window.ethereum.on('accountsChanged', async (accounts)  => {
          await this.loadAccount();
        })
    }
    async loadWeb3() {

        if(window.ethereum) {
            window.web3 = new Web3(window.ethereum)
            await window.ethereum.enable()
        } else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider)
        } else {
            window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
        }
    }
    async loadAccount() {
        const account = await window.web3.eth.getAccounts();
        this.setState({account: account[0]});
        const peopleCount = await this.state.contract.methods.peopleCount().call();
        this.setState({peopleCount: peopleCount.toString()})
        for(let i=0; i<peopleCount; i++) {
            const person = await this.state.contract.methods.people(i).call();
            this.setState({people: [...this.state.people, person]});
            console.log(person);
        }

    }
    async loadContract() {
        const networkId = await window.web3.eth.net.getId();
        const networkData = await BasicContract.networks[networkId];
        if(networkData) {
            console.log("Connected");
            const contract = window.web3.eth.Contract(BasicContract.abi, networkData.address);
            this.setState({contract});
            console.log(contract);
        } else {
            console.log("Still not connected");
        }
    }
    async addPerson(name, age) {
        await this.state.contract.methods.addPerson(name,age).send({from: this.state.account});
    }
    constructor(props) {
        super(props);
        this.state = {
            account: null,
            people: []
        }
    }

  render() {
    return (
      <div>
      <Navbar account={this.state.account} />
      <Main addPerson={this.addPerson.bind(this)} peopleCount = {this.state.peopleCount} people={this.state.people}/>

      </div>
    );
  }
}

export default App;
