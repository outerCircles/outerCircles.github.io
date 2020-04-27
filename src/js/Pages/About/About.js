import React from "react";

const About = () => {
    return (
        <>
        <header class="settingsHeader">
            <span class="material-icons homeIconHeader">home</span>
        </header>
        <main>
            <section class="about">
            <div id="AboutTab">
                <div class="aboutTile">
                    {/* <img src="/svg/Logo.svg" alt="Logo Outer Circle" class="aboutImg"> */}
                    <h3>OuterCircle</h3>
                </div>
                <h4>A Chat Website.</h4>
                <h4>Created By: - </h4>
                <a href="https://kunaldhawan93.com/" target="_blank"><h4>Kunal Dhawan</h4></a>
                <a href="https://hardeepsiyan.com/" target="_blank"><h4>Hardeep Singh</h4></a>
            </div>
            </section>
        </main>
        </>
    )
}

export default About;