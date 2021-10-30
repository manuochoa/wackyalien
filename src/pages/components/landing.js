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
                            Us Gonzorians are adventurous aliens native to Gonzora,
                            a planet located 9,733 light-years away from yours.
                            We have traveled far and wide in search of fun, community,
                            and opportunities, eventually making our way to Earth.
                        </p>
                        <p>
                            As co-founders of the Wacky Alien League (WAL) we’re happy
                            to welcome you to our community! Once you have your Gonzorian
                            you gain access to our galaxy, a place where wacky aliens from
                            all across WAL’s Metaverse can gather.
                        </p>
                        <h1>
                            WAL's Metaverse Starts with You!
                        </h1>
                        {submitted ? (
                            <h1 className={'success'}>Thank you!</h1>
                        ) : (
                            <div className="subscribe-section">
                                <p>
                                    1,000 Gonzorians 1st Drop on Nov. 1 <br/>
                                    (extra 30x will be raffled and airdropped)
                                </p>
                                <div className="button-container">
                                    <div className="button" onClick={openModal}>Join</div>
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
                    <p className="text">1,000 gonzorian 1st Drop on Nov.1 <br/>
                        (extra 30x will be raffled and airdropped)</p>
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
