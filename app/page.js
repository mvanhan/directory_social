"use client"
import Color from "@/components/color";
import Coolness from "@/components/coolness"
import Opium from "@/components/opium";
import {opiumOutput} from "./contexts"
import { useState } from "react";


export default function Home() {
  const coolnessState = useState(false)
  const colorState = useState(false)
  return (
    <div>
      <nav className="nav">
        <a href="#identify" className="nav-link">
          <h1>IDENTIFY</h1>
        </a>
        <a href="#about" className="nav-link">
          <h1>ABOUT</h1>
        </a>
        <a href="#products" className="nav-link">
          <h1>THEMES</h1>
        </a>
      </nav>
      <br />
      <br />
      <div className="head-box" style={{ fontSize: '30px' }}>
        <h1>Welcome to Directory-Social</h1>
      </div>
      <div className="flexing" style={{ marginTop: '40px' }}>
        {/* <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzOOBnfnOFn5Yr4eUcPAS88NjiHXcQBxh_Ug&usqp=CAU"
          alt="Image 1"
        /> */}
        {/* <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbm5ngswFVj4_7kPrA4629ijSac1xHqP4X-Q&usqp=CAU"
          alt="Image 2"
        /> */}
        {/* <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Ighvdq_W5oEmM17Dfh-tPw8LRXJZyVdD4A&usqp=CAU"
          alt="Image 3"
        /> */}
      </div>
      <section id="identify" className="content">
        <h2 style={{ textAlign: 'center' }}>IDENTIFY</h2>
        <div className="box">
          <div className="pad">
            <div style={ {textAlign: "center", fontSize: "35px"} }>Are you Opium?</div>
            <br />
            <br />
            <opiumOutput.Provider value={[coolnessState, colorState]}>
              <div className="flexing">
                <div className="small-box">
                  <Coolness />
                </div>
                <div className="spacing">
                  <Opium />
                </div>
                <div className="small-box">
                  <Color />
                </div>
              </div>
            </opiumOutput.Provider>
          </div>
        </div>
      </section>
      <section id="about" className="content">
        <h2 style={{ textAlign: 'center' }}>ABOUT</h2>
        <div className="box">
          <div className="pad">
            <div className="flexing">
              <div className="small-box">
                <h1 style={{ fontSize: '25px' }}>DIRECTORY</h1>
              </div>
              <div className="spacing"></div>
              <div className="small-box">
                <h1 style={{ fontSize: '25px' }}>SOCIAL</h1>
              </div>
            </div>
            <br />
            <p
              style={{
                fontSize: '25px',
                textAlign: 'center',
                fontFamily: 'sans-serif',
                fontWeight: 'bold',
              }}
            >
              The theme of this website was inpsired by a friend. However, the actual website was built exclusively by myself. 

              Hint: Try options 3, 5, or 7 above. 
            </p>
          </div>
        </div>
      </section>
      <section id="products" className="content">
        <h2 style={{ textAlign: 'center' }}>THEMES</h2>
        <div className="box">
          <div className="pad">
            <div className="flexing" style={{ fontSize: '32px' }}>
              <ul>
                <li>culture</li>
                <li>creativity</li>
                <li>civilization</li>
                <li>experience</li>
                <li>fashion</li>
              </ul>
              <div className="spacing"></div>
              <ul>
                <li>ability</li>
                <li>develop</li>
                <li>education</li>
                <li>progress</li>
                <li>advance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
