import web3 from "../web3";
import ABI from "../abi/NFT.json";

export const tokenAddress = "0x94C70D0aC01F64d78f2706f3eB1141A10E1A7029";

const instance = async () => {
  try {
    return new web3.eth.Contract(ABI.abi, tokenAddress);
  } catch (error) {
    console.log(error);
  }
};

export default instance;
