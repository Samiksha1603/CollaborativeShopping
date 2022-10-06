import Head from 'next/head'
import Script from 'next/script'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
// import '../styles/index.module.css';
import pusher from 'pusher'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import Link from 'next/link';

// import {router} from "next/client";
// import { Html, Main } from 'next/document'
//react index
// import reportWebVitals from './reportWebVitals';
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
//end

export default function Home() {
  const [username, setUsername] = useState('');
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  let allMessages = [];
  if (typeof window !== "undefined") {

  }

  useEffect(() => {
    Pusher.logToConsole = true;
    const pusher = new Pusher('361f7ef1d7f18076912c', {
      cluster: 'ap2'
    });
    const channel = pusher.subscribe('test');
    channel.bind('message', function(data) {
      allMessages.push(data);
      setMessages(allMessages);
    });
  })

  const submit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:8000/api/messages` ,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        message
      })
    });
    console.log(response);
    setMessage('');
  }

  //deleted :
  // <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
  // <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" crossorigin></script>
  // <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin></script>

  return (
    <div className={styles.fullbody}>
      <Head>
        <title>Colab</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <React.StrictMode>
        <App />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"/>
        <script src="https://js.pusher.com/7.2/pusher.min.js"></script>
        <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white" className={styles.chat}>
          <div className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
            <span className={styles.chattop}>Enter username :</span>
            <input className={styles.input} placeholder='  Username' value={username} onChange={e => setUsername(e.target.value)}/>
          </div>

          <div className={styles.chatarea} style={{minHeight: "300px"}}>
            {messages.map(message => {
              return(
                <>
                  <div className={styles.message}>
                    <strong>{message.username}</strong>
                    <div className="col-10 mb-1 small">{message.message}</div>
                  </div>
                </>
              )
            })}
          </div>

          <form onSubmit={submit} className={styles.chatbottom}>
            <input className={styles.input} placeholder='Enter your message' value = {message}
                onChange={e => setMessage(e.target.value)}
            />
            <button type='submit' className={styles.button}> Send </button>
          </form>
        </div>
      </React.StrictMode>
      <script>var Alert = ReactBootstrap.Alert;</script>
    </div>
  )
}
