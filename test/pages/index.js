import Head from 'next/head'
import Script from 'next/script'
// import { Html, Main } from 'next/document'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import pusher from 'pusher'

export default function Home() {
  const [username, setUsername] = useState('');
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  let allMessages = [];

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

  return (
    <div className={styles.container}>
      <Head>
        <title>Colab</title>
      </Head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"/>
      <script src="https://js.pusher.com/7.2/pusher.min.js"></script>

      <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white">
        <div className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
          <span >Enter username : </span>
          <input className="fs-5 fw-semibold" placeholder='Username' value={username} onChange={e => setUsername(e.target.value)}/>
        </div>

        <div className="list-group list-group-flush border-bottom scrollarea" style={{minHeight: "500px"}}>
          {messages.map(message => {
            return(
              <div className="list-group-item list-group-item-action py-3 lh-tight">
                <div className="d-flex w-100 align-items-center justify-content-between">
                  <strong className="mb-1">{message.username}</strong>
                </div>
                <div className="col-10 mb-1 small">{message.message}</div>
              </div>
            )
          })}
        </div>
      </div>

      <form onSubmit={submit}>
        <input className='form-control' placeholder='Enter your message' value = {message}
            onChange={e => setMessage(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>

    </div>
  )
}
