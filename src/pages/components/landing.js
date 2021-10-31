import React, {useEffect, useState} from "react";
import {Stack, Box, Button} from "@mui/material";
import {HashLink} from "react-router-hash-link";
import Countdown from "./helper/countdown";
import Modal from 'react-modal';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import arrowWhite from "../../assets/images/arrow-white.png";
import arrowBlack from "../../assets/images/arrow-black.png";
import {supabase} from "../../supabase";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

Modal.setAppElement('body');

function Landing() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [ETHAddress, setETHAddress] = useState('');
    const [submitted, setSubmitted] = useState(false);

    function openModal() {
        setModalIsOpen(true)
    }

    function closeModal() {
        setModalIsOpen(false)
    }

    function onRequestClose() {

    }

    async function sendData() {
        const result = await supabase
            .from('subscribes')
            .insert({email, 'eth-address': ETHAddress});
        setSubmitted(true);
        toast("Success registration.");
    }

    return (
        <Stack id="home" className="main-container landing-container">
            <Stack
                direction={{xs: "column", sm: "row"}}
                justifyContent="space-between"
                alignItems={{xs: "center", sm: "flex-start"}}
                className="subcontainer"
                spacing={5}
            >
                <Stack
                    direction="column"
                    justifyContent={{xs: "center", sm: "center"}}
                    alignItems={{xs: "center", md: "center", xl: "flex-start"}}
                    className="mint-left"
                >
                    <Box className="text-box">
                        <h1>Welcome to the Wacky Alien League</h1>
                        <p>
                            The Wacky Alien League (WAL) was created so that carbon-based lifeforms, 
                            aliens, and travelers of all kinds can explore, expand, and create a unique Galaxy. 
                            The Gonzorians, co-founders of WAL, came from Gonzora, a planet 9,733 light years away from Earth. 
                            Their goal is to develop WAL’s Metaverse for future collections in our community.
                        </p>
                        <p>
                            For the first time in the history of The League, we are opening up admission to humans. 
                            Now you can not only join our community of explorers, but will also have the power to shape and guide 
                            the creation of our world. Once you secure your Gonzorian you will gain access to WAL’s Metaverse, 
                            a place to meet other Wacky Aliens, and to enjoy perks and benefits spanning the digital world and the real one.
                        </p>
                        <h1>
                            WAL's Metaverse Starts with You!
                        </h1>
                        {submitted ? (
                            <h1 className={'success'}>ETH Wallet Whitelisted!</h1>
                        ) : (
                            <div className="subscribe-section">
                                <p>
                                    Gonzorians 1st Drop on Nov. 4<br/>
                                    (extra 25x will be raffled and airdropped)
                                </p>
                                <div className="button-container">
                                    <div className="button" onClick={openModal}>Presale PASS</div>
                                </div>
                            </div>
                        )}
                        <Countdown/>
                    </Box>
                    <Stack
                        direction={{xs: "column", sm: "row"}}
                        spacing={2}
                        justifyContent={{xs: "center", sm: "flex-start"}}
                        className="buttons-landing"
                    >
                        <Button
                            component={HashLink}
                            smooth
                            to="/#mint-a-gonzorian"
                            className="connect-button"
                            variant="contained"
                            style={{color: "#fff"}}
                        >
                            mint <img src={arrowWhite} alt=""/>
                        </Button>
                        <Button
                            component={"a"}
                            href="https://discord.gg/A8r5aTZBDJ"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="connect-button discord"
                            variant="contained"
                        >
                            Discord <img src={arrowWhite} alt=""/>
                        </Button>
                        <Button
                            component={"a"}
                            href="https://twitter.com/WALNFT"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="connect-button twitter"
                            variant="contained"
                        >
                            Twitter <img src={arrowBlack} alt=""/>
                        </Button>
                    </Stack>
                </Stack>
                {/*<Stack
          direction="column"
          justifyContent="flex-end"
          alignItems="center"
          className="mint-right"
        >
          <Box className="img-container">
             <img src={imageHolder} alt="NFT example" />
          </Box>
        </Stack>*/}
            </Stack>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover={false}
            />
            <Modal
                isOpen={modalIsOpen && !submitted}
                contentLabel="Example Modal"
                className="modal"
                onRequestClose={closeModal}
                overlayClassName="overlay"
            >
                <div className="modal-inner">
                    <div className="close" onClick={closeModal}>
                        <HighlightOffIcon scale={2} style={{
                            width: 30,
                            height: 30
                        }}/>

                    </div>
                    <h1 className="title">Join the Whitelist</h1>
                    <p className="text">Gonzorians 1st Drop on Nov. 4<br/>
                        (extra 25x will be raffled and airdropped)</p>
                    <input
                        type="email"
                        className={'input'}
                        onChange={event => setEmail(event.target.value)}
                        placeholder={'Enter your email address'}/>
                    <input
                        type="text" className={'input'}
                        onChange={event => setETHAddress(event.target.value)}
                        placeholder={'Enter your ETH address'}/>
                    <button disabled={!email || !ETHAddress}  className="send" onClick={sendData}>Send</button>
                </div>
            </Modal>
        </Stack>
    );
}

export default Landing;
