import React, { useState } from 'react';
import LoadingMask from '../LoadingMask/LoadingMask';

function Subscription(props) {
  const [email, setEmail] = useState("");
  const [res, setRes] = useState(false);
  const [load, setLoad] = useState(true)

  function submit(e) {
    console.log("működik")
    setLoad(false)

    fetch('./api/hotels/subscribe', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email": email,
        'hotel': props.item.name
      })
    }).then(response => setRes(true))
      .catch(error => setRes(false))
      .finally(() => setTimeout(() => props.setShowButton(true), 5000))

    //e.preventDefault()
  }


  return (
    <div>
      <h4>Request more info about</h4>

      {
        !load
          ? !res
            ? <LoadingMask />
            : email === "a@b.c" && props.item.name === "Hotel Curabitur suscipit suscipit" ? "Already subscribed" : "Subscribed"
          : <form>
            <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} />
            <button disabled={!(email.includes("@") && email.includes("."))} onClick={(e) => submit(e)}>Gomb</button>
          </form>
      }
    </div>
  )
}

export default Subscription
