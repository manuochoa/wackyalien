import NFTinterface from "../interface/NFTinterface";
import web3 from "../web3";
import data from "./address.json";

export const buy = async (_amount) => {
  try {
    let value = web3.utils.toWei((_amount * 0.07).toString());
    let instance = await NFTinterface();
    let status = await saleStatus();
    let result;
    // if (status.publicSale) {

    if (canBuy()) {
      console.log("public buy");
      try {
        let gas = 450000 * Number(_amount);
        result = await instance.methods
          .buy(_amount)
          .send({ from: window.ethereum.selectedAddress, value, gas });
        return { status: "success", result };
      } catch (error) {
        console.log(error);
        return { status: "error", result: "transaction failed" };
      }
    } else {
      return { status: "error", result: "not in the whitelist" };
    }
 
  } catch (error) {
    console.log(error);
    return { status: "error", result: "something went wrong" };
  }
};

const canBuy = () => {
  let result = false;
  data.map((i) => {
    if (i.toLowerCase() === window.ethereum.selectedAddress.toLowerCase()) {
      result = true;
      console.log(i, window.ethereum.selectedAddress);
    }
  });
  return result;
};

export const saleStatus = async () => {
  try {
    let instance = await NFTinterface();
    let publicSale = await instance.methods.isSaleLive().call();

    return publicSale;
  } catch (error) {
    console.log(error);
  }
};

export const isUserWhitelisted = async () => {
  try {
    let instance = await NFTinterface();
    let isWhitelisted = await instance.methods
      .isWhitelisted(window.ethereum.selectedAddress)
      .call();

    return isWhitelisted;
  } catch (error) {
    console.log(error);
  }
};

export const buyLimit = async () => {
  try {
    let instance = await NFTinterface();
    let limit = await instance.methods.buyLimit().call();

    return limit;
  } catch (error) {
    console.log(error);
  }
};

// export const getTX = async () => {
//   var transaction =
//     "0x11d19802405cd8972aa726ffd1833135b15f44c8afda4f6e78ed21b5fb038892";

//   web3.eth.getTransaction(transaction, function (err, tx) {
//     console.log(tx);
//     let tx_data = tx.input;
//     let input_data = "0x" + tx_data.slice(10); // get only data without function selector

//     let params = web3.eth.abi.decodeParameters(
//       ["bytes32", "string", "string", "string"],
//       input_data
//     );
//     console.log(params);
//   });
// };
