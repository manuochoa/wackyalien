import React, {useState} from "react";
import {Switch, Route} from "react-router-dom";
import Header from "./components/header";
import Landing from "./components/landing";
import Join from "./components/join";
import Community from "./components/community";
import Roadmap from "./components/roadmap";
import Team from "./components/team";
// import Questions from "./components/questions";
import Footer from "./components/footer";

function Home() {
    const [userAddress, setUserAddress] = useState("");

    return (
        <div className={'home-page'}>
            <Header userAddress={userAddress} setUserAddress={setUserAddress}/>
            <>
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => (
                            <>
                                <Landing/>
                                <Join/>
                                <Community
                                    userAddress={userAddress}
                                    setUserAddress={setUserAddress}
                                />
                                <Roadmap/>
                                <Team/>
                            </>
                        )}
                    />
                </Switch>

                {/* <Questions /> */}
            </>

            <Footer/>
        </div>
    );
}

export default Home;
