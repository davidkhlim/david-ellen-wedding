/**
 * TODO: 
  1. ID/EN [IN PROGRESS]
  2. if "to" parameter not exists, Dear will show family and friends [DONE]
  3. Bandung Wedding Dinner RSVP [IN PROGRESS]
 */
import BandungRSVP from './bandung-rsvp.js';

import './App.css';
import { React, useState, useRef } from 'react';
import { FaClone, FaExternalLinkAlt, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function App() {
  const queryParam = new URLSearchParams(window.location.search);
  const name = queryParam.get("name");
  const isRsvp = queryParam.get("rsvp") === "true"; // should be true to show bandung rsvp

  const [audioStatus, changeAudioStatus] = useState(true);
  const myRef = useRef();

  const musicHandling = () => {
    if (audioStatus == true) myRef.current.pause();
    else myRef.current.play();
    changeAudioStatus(!audioStatus);
  };

  return (
    <div className="flex flex-col overflow-hidden h-max">
      <audio autoPlay ref={myRef} src='song.mp3' />

      <div className='fixed bottom-0 z-10'>
        <button onClick={musicHandling} className='p-3 m-2 w-fit bg-gray-400 rounded-full'>
          {audioStatus ?
          <FaVolumeUp color='white' /> :
          <FaVolumeMute color='white' />
        }
        </button>
        <button className='rounded-full bg-gray-400 w-10 h-10 text-slate-200'>
          {true ?
            "ID" :
            "EN"
          }
        </button>
      </div>


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

      <div id='wave' className='mt-[-12vh]'>
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" id='waveSvg'>
          <path d="M-0.00,49.85 C150.00,149.60 377.76,23.13 500.00,49.85 L500.00,149.60 L-0.00,149.60 Z" id="wavePath">
          </path>
        </svg>
      </div>
      <div id='wave' className='mt-[-5px] mb-[-150px]'>
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" id='waveSvg'>
          <path d="M-0.00,49.85 C28.44,40.84 409.93,-42.81 500.00,49.85 L500.00,0.00 L-0.00,0.00 Z" id="wavePath">
          </path>
        </svg>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col mx-auto w-full justify-items-center text-center fade-in -z-1">
        {/* GROOM, BRIDE, FAMILY NAMES */}
        <div className="grid gap-8 w-full pb-12 border-8 border-white drop-shadow-lg shadow-inner bg-names">
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

          <div className="flex flex-col leading-10 gap-4">
            <div className="name-font text-[2.2rem] sm:text-[2.6rem]">David Khowanto Lim</div>
            {/* <div className="text-lg capitalize parent-font leading-5">first son of<br />lim yam hiong & khow phek huan</div> */}
            <div className="text-lg capitalize parent-font leading-5">first son of</div>
            <div className='flex justify-center gap-4 w-full mx-auto max-w-3xl'>
              <div className='w-1/2'>
                <div className="text-lg capitalize parent-font leading-7">lim yam hiong</div>
                <div className="text-md capitalize parent-font leading-7">"kok liang"</div>
              </div>
              <div className='w-1/2'>
                <div className="text-lg capitalize parent-font leading-7">ho phek huan</div>
                <div className="text-md capitalize parent-font leading-7">"khow phek luan"</div>
              </div>
            </div>
          </div>

          <div className="name-font text-[2rem] sm:text-[2.6rem] m-3">&</div>

          <div className="flex flex-col leading-10 gap-4">
            <div className="name-font text-[2.2rem] sm:text-[2.6rem]">Eleonora Julianti Mardi Utami</div>
            {/* <div className="text-lg capitalize parent-font leading-5">first Daughter of<br />apolonius sumardijono & elite julili</div> */}
            <div className="text-lg capitalize parent-font leading-5">first daughter of</div>
            <div className='flex justify-center gap-4 w-full mx-auto max-w-3xl'>
              <div className='w-1/2'>
                <div className="text-lg capitalize parent-font leading-7">apolonius sumardijono</div>
                <div className="text-md capitalize parent-font leading-7">"apolonius"</div>
              </div>
              <div className='w-1/2'>
                <div className="text-lg capitalize parent-font leading-7">elite julili</div>
                <div className="text-md capitalize parent-font leading-7">"elite"</div>
              </div>
            </div>
          </div>
        </div>

        {/* SCHEDULE */}
        <div className='flex flex-col gap-24 box-border px-8 schedule sm:bg-cover bg-contain max-w-screen w-screen'>

          <div className="mt-20 content-font text-base sm:text-lg font-medium tracking-wider leading-9">
            <div className="font-extrabold">holy matrimony</div>
            <div>Saturday, 18th May 2024</div>
            <div>14.30 WIB</div>
            <a className="underline underline-offset-2 text-xl" target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/K7KnnNnHV1f9zGnY7" >Saint Peter Cathedral</a>
            <div className="mx-auto">
              Jl. Merdeka, no. 14, Bandung
            </div>
            <a className='bg-[#999090] px-5 py-1 text-sm text-white rounded-sm z-20' target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/K7KnnNnHV1f9zGnY7">get direction</a>
          </div>

          <div className="content-font text-base sm:text-lg font-medium tracking-wider leading-9">
            <div className="font-extrabold">reception</div>
            <div>Saturday, 25th May 2024</div>
            <div>17.00 - 20.00 WIB</div>
            <a className="underline underline-offset-2 text-xl" target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/8Rj8MCY5tRYaJxum8" >Star Restaurant </a>
            <br />
            <a className="text-lg" target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/8Rj8MCY5tRYaJxum8">function hall lt. 3</a>
            <div className="mx-auto">
              Jl. Gajah Mada No. 189, Pontianak
            </div>

            <a className='bg-[#999090] px-5 py-1 text-sm text-white rounded-sm z-20' href={"https://maps.app.goo.gl/8Rj8MCY5tRYaJxum8"} target='_blank' rel="noopener noreferrer">get direction</a>
          </div>

          {/* RSVP */}
          {isRsvp ? <>
            <BandungRSVP></BandungRSVP></>
            : null
          }

          {/* WEDDING GIFTS */}
          <div className="w-full mx-auto">
            <div className="content-font text-lg font-medium tracking-wider leading-9">
              <div className="font-extrabold">wedding gifts</div>
              <div className="max-w-[25rem] mx-auto">
                Whilst it's enough of your present and prayer, it would be our pleasure to receive your special gift of love
              </div>
              <div className="grid p-2 grid-flow-col auto-cols-max text-left mt-2 bg-white w-fit mx-auto rounded-lg drop-shadow-md">
                <div className="w-52" onClick={copyToClipboard} data-num="222222">
                  <div>BCA XXXXXXXX</div>
                  <div>a.n. David Ellen</div>
                </div>
                <FaClone className="h-12 w-4" onClick={copyToClipboard} />
              </div>
            </div>
            <div>
              <ToastContainer
                style={{ width: "140px" }}
              />
            </div>
          </div>

          {/* OTHER IMAGES */}
          <div className="mx-auto w-fit flex flex-wrap gap-10 items-center justify-center rounded-lg drop-shadow-lg">
            <img src='/images/bottom1.jpg' className="w-40 rounded-full border-4 border-white" />
            <img src='/images/bottom2.jpg' className="w-40 rounded-full border-4 border-white" />
            <img src='/images/bottom3.jpg' className="w-40 rounded-full border-4 border-white" />
          </div>

          <div className="flex gap-8 pb-4 justify-center text-center bg-linear items-center">
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

const copyToClipboard = (e) => {
  console.log(e);
  navigator.clipboard.writeText("12345678");
  toast.success("Copied", {
    width: 100,
    autoClose: 2000,
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: true,
    pauseOnFocusLoss: false,
  });
};

export default App;
