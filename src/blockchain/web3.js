import Web3 from "web3";

let web3;

if (typeof window.ethereum !== "undefined") {
  web3 = new Web3(Web3.givenProvider);
} else {
  web3 = new Web3(
    "https://mainnet.infura.io/v3/d57a79a53322459bac2ee60811fd23"
  );
}

export default web3;
