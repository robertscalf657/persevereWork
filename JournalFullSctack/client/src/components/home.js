import React, { useState, useEffect, useRef } from 'react';

function Home() {
    const url = 'http://localhost:5000/home';

    return (
        <div className="homeContainer" id="Home">
<h1 className="homeTitle">Welcome to Robert's Journal !</h1>
<h3 className="homeTitle">Here you will find day to day entries about his activities <br /> and
anything he may have learned or work he completed.</h3>
        </div>
    )
}
export default Home;