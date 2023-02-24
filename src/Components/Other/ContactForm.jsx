import React, { useState } from "react";
import Styles from "../../Styles/Component-Styles/ContactForm.module.scss";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [meassage, setMeassage] = useState("");

  return (
    <div className={Styles.ContactForm}>
      <div className={Styles.Form_Head}>
        <p className={Styles.Title}>Contact Us</p>
        <p className={Styles.Text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam,
          sapiente aspernatur! In quidem doloribus maxime!
        </p>
      </div>
      <form action="" className={Styles.Form}>
        <div className={Styles.InputGroup}>
          <input
            type="text"
            placeholder="Full Name"
            required
            className={Styles.Input}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            required
            className={Styles.Input}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <input
          type="email"
          placeholder="Subject"
          required
          className={Styles.Input}
          onChange={(e) => setSubject(e.target.value)}
        />
        <textarea
          name=""
          id=""
          type="email"
          placeholder="Message"
          required
          className={Styles.Input}
          onChange={(e) => setMeassage(e.target.value)}
          cols="30"
          rows="10"
        ></textarea>
        <button type={"submit"} className={Styles.Submit_Button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
