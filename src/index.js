import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
// import App from './App';
// import SideBar from './SideBar';
import Body from './Body'
import Footer from './Footer'
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
const rtitle = "Discord"
const rsubtitle = "JOIN OUR DISCORD COMMUNITY"
const rbody = "Join thousands of Frontend Mentor community members taking the challenges, sharing resources, helping each other, and chatting about all things front-end!"
const rbutton = "JOIN OUR DISCORD"
const fContent = "copyright @ 2023: Unizik.edu.ng"


root.render(
  <React.StrictMode>
    <Header />
    <Body title={rtitle} subtitle={rsubtitle} body={rbody} click={rbutton} />
    <Footer content={fContent} />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
