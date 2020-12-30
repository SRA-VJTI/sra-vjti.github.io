import { useState } from "react";

const ContactUs = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onFormSubmit = () => {
    // Punch here
  }

  return (
    <>
      <div id="contact-form">
        <div id="form-overlay"></div>
        <form action="/">
          <label for="name">Name:</label>
          <input
            type="text"
            name=""
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
            id="name"
            placeholder="Name"
            autocomplete="name"
          />
          <label for="email">Email:</label>
          <input
            type="text"
            name=""
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            id="email"
            placeholder="Email"
            autocomplete="email"
          />
          <label for="message">Message for us:</label>
          <textarea
            name=""
            id="message"
            value={message}
            onChange={(e)=>{setMessage(e.target.value)}}
            placeholder="Message"
            autocomplete="off"
            rows="3"
          ></textarea>

          <input onClick={onFormSubmit} type="submit" value="Submit!" />
        </form>
      </div>
    </>
  );
}

export default ContactUs;