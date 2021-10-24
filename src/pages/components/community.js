import React, { useState, useEffect } from "react";
import { Stack } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import {
  buy,
  saleStatus,
  buyLimit,
} from "../../blockchain/functions/functions";
import { useSnackbar } from "notistack";
import exampleImg from "../../assets/images/alien.gif";
import bigPoint1 from "../../assets/images/Frame1.png";
import bigPoint2 from "../../assets/images/Frame2.png";
import bigPoint3 from "../../assets/images/Frame3.png";
import bigPoint4 from "../../assets/images/Frame4.png";
import plusIcon from "../../assets/images/+.png";
import minusIcon from "../../assets/images/-.png";
import arrowWhite from "../../assets/images/arrow-white.png";

function Community(props) {
  const { setUserAddress, userAddress } = props;
  const { enqueueSnackbar } = useSnackbar();
  const [amount, setAmount] = useState("1");
  const [isLoading, setIsLoading] = useState(false);
  const [isSaleLive, setIsSaleLive] = useState({
    onlyWhitelist: false,
    publicSale: false,
  });
  const [NFTbuyLimit, setBuyLimit] = useState(10);

  const connectWallet = async () => {
    try {
      console.log("hola");
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setUserAddress(accounts[0]);

      const chainId = await window.ethereum.request({
        method: "eth_chainId",
      });

      if (chainId !== "0x1") {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x1" }],
        });
      }
      console.log(chainId);

      window.ethereum.on("accountsChanged", function (accounts) {
        setUserAddress(accounts[0]);
      });

      window.ethereum.on("chainChanged", (_chainId) =>
        window.location.reload()
      );
    } catch (error) {
      console.log(error);
    }
  };

  const checkAmount = () => {
    console.log(NFTbuyLimit);
    if (amount <= 0) {
      enqueueSnackbar("Amount should de bigger than 0", {
        variant: "error",
      });
      return false;
    } else if (isSaleLive.publicSale) {
      if (Number(amount) > Number(NFTbuyLimit)) {
        enqueueSnackbar(`Minting limit is ${NFTbuyLimit}`, {
          variant: "error",
        });
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  };

  const amountHandler = (_amount) => {
    if (_amount > NFTbuyLimit) {
      setAmount(NFTbuyLimit);
    } else if (_amount < 1) {
      setAmount("1");
    } else {
      setAmount(_amount);
    }
  };

  const handleMint = async () => {
    setIsLoading(true);
    let correctAmount = checkAmount();
    if (!userAddress) {
      await connectWallet();
    }
    if (isSaleLive.publicSale) {
      if (correctAmount) {
        try {
          let receipt = await buy(amount);
          if (receipt) {
            if (receipt.status === "error") {
              enqueueSnackbar(receipt.result, {
                variant: "error",
              });
              console.log(receipt.result);
            } else {
              enqueueSnackbar("NFT Minted", {
                variant: "success",
              });
              console.log(receipt);
            }
          }
        } catch (error) {
          enqueueSnackbar(error.result, {
            variant: "error",
          });
          console.log(error.result);
        }
      }
    } else {
      enqueueSnackbar("sales are closed", {
        variant: "error",
      });
    }

    setIsLoading(false);
  };

  const checkSaleStatus = async () => {
    let result = await saleStatus();
    setBuyLimit(await buyLimit());
    console.log(result, "buy limit", buyLimit());
    if (result) {
      setIsSaleLive({ publicSale: result });
    }
  };

  useEffect(() => {
    checkSaleStatus();
  }, []);

  useEffect(() => {}, []);

  return (
    <Stack id="comunity" className="main-container community-container">
      <Stack
        direction={{ xs: "column", md: "column", xl: "row" }}
        justifyContent="space-around"
        alignItems="center"
        className="subcontainer community-subcontainer"
        spacing={{ xs: 0, sm: 5 }}
      >
        <Stack
          justifyContent="space-between"
          alignItems={{ xs: "center", sm: "flex-start" }}
          className="community-rigth"
          direction="column"
          spacing={2}
        >
          <h1 style={{ alignSelf: "center" }}>Ownership Perks</h1>
          <h2>
            Your Gonzorian serves as your digital membership identity, you will
            gain membership access to a league whose benefits and offerings will
            increase over time.
          </h2>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >
            <img src={bigPoint1} className="community-number" alt="" />
            <p>
              <span className="ownership-title"> COMMUNITY</span> It’s hard to
              be a lonely alien, so come hang out with us and meet new friends,
              collaborators, and digital explorers.
            </p>
          </Stack>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >
            <img src={bigPoint2} className="community-number" alt="" />
            <p>
              <span className="ownership-title">WEEKLY RAFFLE</span>Did you know
              that gonzorians love raffles? Every week 1ETH will be put into a
              raffle just for NFT holders, AKA you!
            </p>
          </Stack>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >
            <img src={bigPoint3} className="community-number" alt="" />
            <p>
              <span className="ownership-title">LEAGUE VAULT </span> Community
              wallet will be funded with 10 ETH each month to be used for
              operating, buyback the floor and rewards.
            </p>
          </Stack>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >
            <img src={bigPoint4} className="community-number" alt="" />
            <p>
              <span className="ownership-title"> VOTING RIGHTS </span> As a
              Gonzorian holder you’re now a citizen of WAL’s Metaverse, and as
              such have voting rights! Vote on the direction of Metaverse
              developments and activities.
            </p>
          </Stack>
        </Stack>
        <Stack className="community-left" spacing={2}>
          <h1>Mint a Gonzorian</h1>
          <h4>0.07 ETH / each</h4>
          <Stack
            className="amount-selector"
            justifyContent="space-between"
            direction="row"
            spacing={0}
          >
            <img
              className="amount-change"
              onClick={() => amountHandler(Number(amount) - 1)}
              src={minusIcon}
              alt=""
            />
            <input
              value={amount}
              onChange={(e) => amountHandler(e.target.value)}
              type="number"
            />
            <img
              className="amount-change"
              onClick={() => amountHandler(Number(amount) + 1)}
              src={plusIcon}
              alt=""
            />
          </Stack>
          <LoadingButton
            onClick={handleMint}
            loading={isLoading}
            className="connect-button mint-button"
            variant="contained"
            style={{ color: "#fff" }}
            disabled={!isSaleLive.publicSale}
          >
            mint <img src={arrowWhite} alt="" />
          </LoadingButton>
          <img className="community-img" src={exampleImg} alt="placeholder" />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Community;
