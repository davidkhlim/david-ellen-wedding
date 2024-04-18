import BandungRSVP from './components/bandung-rsvp.js';
import BankAcc from "./components/bank-acc.js";
import dataEN from './localization-en.json';
import dataID from './localization-id.json';
import dataCH from './localization-ch.json';
import './App.css';
import { React, useState, useRef } from 'react';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';


function App() {
  const queryParam = new URLSearchParams(window.location.search);
  const name = queryParam.get("name");
  const isRsvp = queryParam.get("rsvp") === "true"; // should be true to show bandung rsvp

  const [audioStatus, changeAudioStatus] = useState(false);
  const [language, changeLanguageStatus] = useState(1);
  const [data, setData] = useState(dataEN);

  const languageHandling = async () => {
    if(language == 1){
      setData(dataID);
      changeLanguageStatus(2);
    }
    else if (language == 2) {
      setData(dataCH);
      changeLanguageStatus(3);
    }
    else if (language == 3){
      setData(dataEN);
      changeLanguageStatus(1);
    }
  };

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
        <button className='rounded-full bg-gray-400 w-10 h-10 text-slate-200' onClick={languageHandling}>
          {language == 1 ? "EN" : language == 2 ? "ID" : "CH"
          }
        </button>
      </div>


      {/* OPENING IMAGE */}
      <div className="min-h-screen fade-in relative w-full capitalize">
        <img src="/images/opening.jpg" className='absolute h-full object-cover sm:w-full -z-10 sm:h-[120%]'></img>
        <div className="m-4 flex gap-8 justify-center text-center bg-linear items-center z-10">
          <div className="h-[1px] bg-black grow sm:w-20 sm:grow-0"></div>
          <div className="text-lg text-black top-font">
            <div>{data.map(d => d.heading)}</div>
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
        <div className="grid gap-20 w-full pb-12 border-b-8 border-white drop-shadow-lg shadow-inner bg-names">
          <div className="mt-5 mb-6 p-2 grid gap-3 divide-y-2 bg-white bg-opacity-70 divide-[#999090] text-[#999090] top-font text-lg font-medium mx-auto rounded-xl">
            <div className='capitalize'>{data.map(d => d.recipient)},</div>
            <div className="w-fit pt-2 text-2xl mx-auto capitalize">{name ? name : "Family and Friends"}</div>
          </div>

          <div className="content-font text-lg font-medium tracking-wider flex flex-col gap-16 lowercase">
            <div>
              <p className="font-extrabold">{data.map(d => d.bible)}</p>
              <p>{data.map(d => d['bible-verse'])}</p>
            </div>
            <div className='p-5 mx-12 text-xl font-semibold'>{data.map(d => d.welcome)}</div>
          </div>

          <div className='flex flex-col gap-3'>
            <div className="flex flex-col">
              <div className="name-font text-[2.2rem] sm:text-[2.6rem] leading-tight">David Khowanto Lim<br />(David)</div>
              <div className="text-lg capitalize parent-font leading-5">{data.map(d => d.statusSon)}</div>
              <div className='flex justify-center gap-4 w-full mx-auto max-w-3xl'>
                <div className='w-1/2'>
                  <div className="text-lg capitalize parent-font leading-7">lim yam hiong</div>
                  <div className="text-md capitalize parent-font leading-7">(kok liang)</div>
                </div>
                <div className='w-1/2'>
                  <div className="text-lg capitalize parent-font leading-7">Khow phek luan</div>
                  <div className="text-md capitalize parent-font leading-7">(phek huan)</div>
                </div>
              </div>
            </div>

            <div className="name-font text-[2rem] sm:text-[2.6rem] mb-11">&</div>

            <div className="flex flex-col pb-10">
              <div className="name-font text-[2.2rem] sm:text-[2.6rem] leading-tight">Eleonora Julianti Mardi Utami<br />(Ellen)</div>
              <div className="text-lg capitalize parent-font leading-5">{data.map(d => d.statusDaughter)}</div>
              <div className='flex justify-center gap-4 w-full mx-auto max-w-3xl'>
                <div className='w-1/2'>
                  <div className="text-lg capitalize parent-font leading-7">apolonius sumardijono</div>
                  <div className="text-md capitalize parent-font leading-7">(Apolo)</div>
                </div>
                <div className='w-1/2'>
                  <div className="text-lg capitalize parent-font leading-7">elite julili</div>
                  <div className="text-md capitalize parent-font leading-7">(elite)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SCHEDULE */}
        <div className='flex flex-col gap-24 box-border px-8 schedule lg:bg-cover bg-contain max-w-screen w-screen'>

          <div className="mt-20 content-font text-base sm:text-lg font-medium tracking-wider leading-9">
            <div className="font-extrabold">{data.map(d => d.holyMatrimony)}</div>
            <div>{data.map(d => d.holyMatrimonyDate)}</div>
            <div>14.30 WIB</div>
            <a className="underline underline-offset-2 text-xl" target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/K7KnnNnHV1f9zGnY7" >{data.map(d => d.holyMatrimonyLoc)}</a>
            <div className="mx-auto">
              Jl. Merdeka, no. 14<br /> Kota Bandung
            </div>
            <a className='bg-[#999090] px-5 py-1 text-sm text-white rounded-sm z-20' target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/K7KnnNnHV1f9zGnY7">{data.map(d => d.getDirection)}</a>
          </div>

          <div className="content-font text-base sm:text-lg font-medium tracking-wider leading-9">
            <div className="font-extrabold">{data.map(d => d.reception)}</div>
            <div>{data.map(d => d.receptionDate)}</div>
            <div>17.00 - 20.00 WIB</div>
            <a className="underline underline-offset-2 text-xl" target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/8Rj8MCY5tRYaJxum8" >{data.map(d => d.receptionLoc)}<br />{data.map(d => d.receptionLocDetail)}</a>
            <br />
            <a className="text-lg" target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/8Rj8MCY5tRYaJxum8"></a>
            <div className="mx-auto">
              Jl. Gajah Mada No. 189<br />Kota Pontianak
            </div>

            <a className='bg-[#999090] px-5 py-1 text-sm text-white rounded-sm z-20' href={"https://maps.app.goo.gl/8Rj8MCY5tRYaJxum8"} target='_blank' rel="noopener noreferrer">{data.map(d => d.getDirection)}</a>
          </div>

          {/* RSVP */}
          {isRsvp ? <>
            <BandungRSVP name={name} lang={data} />
          </>
            : null
          }

          {/* WEDDING GIFTS */}
          <div className="w-full mx-auto">
            <div className="content-font text-lg font-medium tracking-wider leading-9">
              <div className="font-extrabold">{data.map(d => d.weddingGift)}</div>
              <div className="max-w-[25rem] mx-auto">
              {data.map(d => d.weddingGiftDesc)}<br/>{data.map(d => d.weddingGiftDescDetail)}
              </div>
              <BankAcc name="david_bca"></BankAcc>
              <BankAcc name="ellen_bca"></BankAcc>
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
              <div>{data.map(d => d.thankyou)}</div>
              <div className="text-3xl tracking-wider font-medium">
                David & Ellen
              </div>
              <div>{data.map(d => d.thankyouFamily)}</div>
            </div>
            <div className="h-[1px] bg-black grow sm:w-20 sm:grow-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
