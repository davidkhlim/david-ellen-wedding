/**
 * TODO: 
  1. ID/EN
  2. if "to" parameter not exists, Dear will show family and friends [DONE]
  3. Bandung Wedding Dinner RSVP / no
  4. coba RSVP pakai google form
  5. ganti kata2
 */

import './App.css';
import { React, useState, useRef } from 'react';
import { FaClone, FaExternalLinkAlt, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import { createClient } from "@supabase/supabase-js";

async function SubmitForm(name, pax) {
  const supabase = createClient("https://udwruewtbwimrrlfekig.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkd3J1ZXd0YndpbXJybGZla2lnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY0NjY4ODQsImV4cCI6MjAyMjA0Mjg4NH0.bd5izwVQucwICbx5cj_we0MnKQYvCR4fB8Ypts-_2JI");

  const { data } = await supabase.from("wedding-dinner-rsvp").insert({ name: name, pax: 1 });
  console.log(data);
}

function App() {
  const queryParam = new URLSearchParams(window.location.search);
  const name = queryParam.get("to");
  const [audioStatus, changeAudioStatus] = useState(true);
  const myRef = useRef();

  const copyToClipboard = () => {
    navigator.clipboard.writeText("12345678");
    toast.success("Copied to clipboard", {
      width: 100,
      autoClose: 2000,
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: true,
      pauseOnFocusLoss: false,
    });
  };

  const musicHandling = () => {
    if(audioStatus == true) myRef.current.pause();
    else myRef.current.play();
    changeAudioStatus(!audioStatus);
  }

  return (
    <div className="flex flex-col overflow-hidden">
      <audio autoPlay ref={myRef} src='song.mp3'/>
          
      <button onClick={musicHandling} className='p-3 m-2 w-fit bg-gray-400 rounded-full fixed bottom-0 z-10'>
        { audioStatus ? 
          <FaVolumeUp color='white' /> :
          <FaVolumeMute color='white' />
        }
      </button> 

      {/* OPENING IMAGE */}
      <div className="min-h-screen fade-in relative w-full">
        <img src="/images/opening.jpg" className='absolute h-full object-cover sm:w-full -z-10 sm:h-[120%]'></img>
        <div className="m-4 flex gap-8 justify-center text-center bg-linear items-center z-10">
          <div className="h-[1px] bg-black grow sm:w-20 sm:grow-0"></div>
          <div className="text-lg text-black top-font">
            <div>The Wedding of</div>
            <div className="text-3xl tracking-wider font-medium">
              David & Ellen
            </div>
          </div>
          <div className="h-[1px] bg-black grow sm:w-20 sm:grow-0"></div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="grid gap-6 mx-auto w-full justify-items-center text-center pb-6 schedule fade-in -z-1">

        {/* GROOM, BRIDE, FAMILY NAMES */}
        <div className="grid gap-8 w-full pb-12 border-b-8 border-t-8 border-white drop-shadow-lg shadow-inner bg-names">
          {/* <div className="pt-5 mb-6 grid gap-3 divide-y-2 divide-[#999090] text-[#999090] top-font text-lg font-medium"> */}
          <div className="mt-5 mb-6 p-2 grid gap-3 divide-y-2 bg-white bg-opacity-70 divide-[#999090] text-[#999090] top-font text-lg font-medium mx-auto rounded-xl">
            <div >Dear,</div>
            <div className="w-fit pt-2 text-2xl mx-auto">{name ? name : "Family and Friends"}</div>
          </div>

          <div className="content-font text-lg font-medium tracking-wider mb-8">
            <div className="font-extrabold">embraced by god's grace</div>
            <div>we welcome you to our</div>
            <div>wedding celebration</div>
          </div>

          <div className="leading-10">
            <div className="name-font text-[2.2rem] sm:text-[2.6rem]">David Khowanto Lim</div>
            <div className="text-lg capitalize parent-font leading-5">first son of<br />lim yam hiong & khow phek huan</div>
          </div>

          <div className="name-font text-[2rem] sm:text-[2.6rem] m-3">&</div>
          <div className="leading-10">
            <div className="name-font text-[2.2rem] sm:text-[2.6rem]">Eleonora Julianti Mardi Utami</div>
            <div className="text-lg capitalize parent-font leading-5">first Daughter of<br />apolonius sumardijono & elite julili</div>
          </div>
        </div>

        {/* SCHEDULE */}
        <div className='box-border px-8 max-w-screen w-screen'>
          <div className="mt-12 content-font text-base sm:text-lg font-medium tracking-wider leading-9">
            <div className="font-extrabold">holy matrimony</div>
            <div>Saturday, 18th May 2024 | xx.xx WIB</div>
            <a className="underline underline-offset-2 text-xl" target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/K7KnnNnHV1f9zGnY7" >Saint Peter Cathedral</a>
              {/* <a className="underline underline-offset-2 text-xl" target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/K7KnnNnHV1f9zGnY7" >
                <FaExternalLinkAlt className="inline-block ml-2 mb-1 h-3 w-4" />
              </a> */}
            <div className="mx-auto">
              Jl. Merdeka, no. 14, Bandung
            </div>
            <a className='bg-[#999090] px-5 py-1 text-sm text-white rounded-sm z-20' target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/K7KnnNnHV1f9zGnY7">get direction</a>
          </div>

          <div className="mt-12 content-font text-base sm:text-lg font-medium tracking-wider leading-9">
            <div className="font-extrabold">reception</div>
            <div>Saturday, 25th May 2024 | xx.xx WIB</div>
            <a className="underline underline-offset-2 text-xl" target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/8Rj8MCY5tRYaJxum8" >Star Restaurant </a>
              {/* <a className="" target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/8Rj8MCY5tRYaJxum8" >
                <FaExternalLinkAlt className="ml-2 mb-1 h-3 w-4 inline-block" />
              </a> */}
            <br />
            <a className="text-lg" target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/8Rj8MCY5tRYaJxum8">function hall lt. 3</a>
            <div className="mx-auto">
              Jl. Gajah Mada No. 189, Pontianak
            </div>

            <a className='bg-[#999090] px-5 py-1 text-sm text-white rounded-sm z-20' href={"https://maps.app.goo.gl/8Rj8MCY5tRYaJxum8"} target='_blank' rel="noopener noreferrer">get direction</a>
          </div>

          <div className="mt-12 pb-6 content-font text-lg font-medium tracking-wider leading-9">
            <div className="font-extrabold">reception rsvp</div>
            <div>please let us know if you'll join us</div>
            <div className="pb-2 drop-shadow-lg">
              <iframe className="w-[350px] mx-auto h-[350px] rounded-lg" src="https://tally.so/r/woGZWe" title="" />
              {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfZ5fXBMmFDF6qHHX7szGJFwRC5XqZAwc9Yq3X8U1DGYQqV9A/viewform?embedded=true" width="640" height="1116" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
            </div>
          </div>

          {/* WEDDING GIFTS */}
          <div className="w-full mx-auto">
            <div className="mt-6 mb-2 content-font text-lg font-medium tracking-wider leading-9">
              <div className="font-extrabold">wedding gifts</div>
              <div className="max-w-[25rem] mx-auto">Whilst it’s enough of your present and prayer, it would be our pleasure to receive your special gift of love</div>
              <div className="grid p-2 grid-flow-col auto-cols-max text-left mt-2 bg-white w-fit mx-auto rounded-lg drop-shadow-md">
                <div className="w-52" onClick={copyToClipboard}>
                  <div>BCA XXXXXXXX</div>
                  <div>a.n. David Ellen</div>
                </div>
                <FaClone className="h-12 w-4" onClick={copyToClipboard} />
              </div>
            </div>
            <div>
              <ToastContainer 
                style={{width: "230px"}}
              />
            </div>

            {/* OTHER IMAGES */}
            <div className="mx-auto w-fit mt-12 flex flex-wrap gap-10 items-center justify-center rounded-lg drop-shadow-lg">
              <img src='/images/bottom1.jpg' className="w-40 rounded-full border-4 border-white" />
              <img src='/images/bottom2.jpg' className="w-40 rounded-full border-4 border-white" />
              <img src='/images/bottom3.jpg' className="w-40 rounded-full border-4 border-white" />
            </div>
          </div>

          <div className="m-4 mt-16 flex gap-8 justify-center text-center bg-linear items-center">
            <div className="h-[1px] bg-black grow sm:w-20 sm:grow-0"></div>
            <div className="text-lg text-black top-font">
              <div>Thank you for your presence and warm wishes</div>
              <div className="text-3xl tracking-wider font-medium">
                David & Ellen
              </div>
              <div>with the family</div>
            </div>
            <div className="h-[1px] bg-black grow sm:w-20 sm:grow-0"></div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
