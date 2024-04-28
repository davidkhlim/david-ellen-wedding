// TODO: Add submit hopes and wishes
import BandungRSVP from './components/bandung-rsvp.js';
import BankAcc from "./components/bank-acc.js";
import OpeningCarousel from "./components/opening-carousel.js";
import dataEN from './localization-en.json';
import dataID from './localization-id.json';
import dataCH from './localization-ch.json';
import './App.css';
import { React, useState, useRef, useEffect } from 'react';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import Tooltip from '@mui/material/Tooltip';
import { AddToCalendarButton } from 'add-to-calendar-button-react';



function App() {
  const queryParam = new URLSearchParams(window.location.search);
  const name = queryParam.get("name");
  const isRsvp = queryParam.get("rsvp") === "true"; // should be true to show bandung rsvp

  const [audioStatus, changeAudioStatus] = useState(false);
  const [language, changeLanguageStatus] = useState(1);
  const [data, setData] = useState(dataEN);
  const [musicTooltipOpen, setMusicTooltipOpen] = useState(true);
  const [musicTooltipMsg, setMusicTooltipMsg] = useState(data.musicTooltipMsgOff);
  const [showOtherPhotos, setShowOtherPhotos] = useState(false);
  const myRef = useRef();

  useEffect(() => {
    musicHandling();
  }, []);

  useEffect(() => {
    if (musicTooltipOpen) {
      setTimeout(() => {
        setMusicTooltipOpen(false);
      }, 1500);
    }
  }, [musicTooltipOpen]);

  const languageHandling = async () => {
    if (language === 1) {
      setData(dataID);
      changeLanguageStatus(2);
    }
    else if (language === 2) {
      setData(dataCH);
      changeLanguageStatus(3);
    }
    else if (language === 3) {
      setData(dataEN);
      changeLanguageStatus(1);
    }
  };

  const musicHandling = () => {
    setMusicTooltipOpen(true);
    changeAudioStatus(!audioStatus);
    if (audioStatus === false) {
      setMusicTooltipMsg(data.map(d => d.musicTooltipMsgOff));
      myRef.current.pause();
    }
    else {
      setMusicTooltipMsg(data.map(d => d.musicTooltipMsgOn));
      myRef.current.play();
    }
  };


  return (
    <div className="flex flex-col overflow-hidden h-max">

      {/* FLOATING MENU */}
      <audio autoPlay ref={myRef} src='song.mp3' />

      <div className='fixed bottom-0 z-10'>
        <Tooltip open={musicTooltipOpen} title={musicTooltipMsg ? musicTooltipMsg : " "}>
          <button onClick={musicHandling} className='p-3 m-2 w-fit bg-gray-400 rounded-full'>
            {audioStatus ?
              <FaVolumeMute color='white' /> :
              <FaVolumeUp color='white' />
            }
          </button>
        </Tooltip>
        <Tooltip title={language === 1 ? "English" : language === 2 ? "Indonesia" : "中文"}>
          <button className='rounded-full bg-gray-400 w-10 h-10 text-slate-200' onClick={languageHandling}>
            {language === 1 ? "EN" : language === 2 ? "ID" : "中文"}
          </button>
        </Tooltip>
      </div>


      {/* OPENING IMAGE */}
      <div className="min-h-screen fade-in relative w-full capitalize">
        {/* <img src={`/images/opening-${1}.jpg.webp`} className='opening-img absolute h-full object-cover sm:w-full -z-10 sm:h-[120%]' /> */}
        <OpeningCarousel />
        <div className="m-4 flex gap-8 justify-center text-center bg-linear items-center z-10 ">
          <div className="h-[1px] bg-black grow sm:w-20 sm:grow-0 "></div>
          <div className="text-lg text-black top-font bg-white bg-opacity-50 rounded-3xl p-2">
            <div>{data.map(d => d.heading)}</div>
            <div className="text-3xl tracking-wider font-medium ">
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
      </div>;

      {/* CONTENT */}
      <div className="flex flex-col mx-auto w-full justify-items-center text-center fade-in -z-1">
        {/* GROOM, BRIDE, FAMILY NAMES */}
        <div className="grid gap-20 w-full pb-12 border-b-8 border-white drop-shadow-lg shadow-inner bg-names">
          <div className="mt-5 mb-6 p-2 grid gap-3 divide-y-2 bg-white bg-opacity-70 divide-[#999090] text-[#333333] top-font text-lg font-medium mx-auto rounded-xl">
            <div className='capitalize'>{data.map(d => d.recipient)},</div>
            <div className="w-fit pt-2 text-2xl mx-auto capitalize">{name ? name : data.map(d => d.recipientName)}</div>
          </div>

          {/* BIBLE & WELCOME INVITATION*/}
          <div className="content-font text-lg font-medium tracking-wider flex flex-col gap-16 lowercase px-4">
            <div>
              <p className="font-extrabold">{data.map(d => d.bible)}</p>
              <p>{data.map(d => d['bible-verse'])}</p>
            </div>
            <div className='p-5 mx-12 text-xl font-semibold'>{data.map(d => d.welcome)}</div>
          </div>

          {/* COUPLE NAMES */}
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

            <div className="name-font text-[2rem] sm:text-[2.6rem] mb-8 mt-8">&</div>

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
          {/* BANDUNG */}
          <div className="mt-20 content-font text-base sm:text-lg font-medium tracking-wider leading-9">
            <div className='mb-4'>
              <div className="font-extrabold">{data.map(d => d.holyMatrimony)}</div>
              <div>{data.map(d => d.holyMatrimonyDate)}</div>
              <div>14.30 WIB</div>
              <a className="underline underline-offset-2 text-xl" target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/K7KnnNnHV1f9zGnY7" >{data.map(d => d.holyMatrimonyLoc)}</a>
              <div className="mx-auto">
                Jl. Merdeka, no. 14<br /> Kota Bandung
              </div>
              <a className='bg-[#999090] px-5 py-1 text-sm text-white rounded-sm z-20' target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/K7KnnNnHV1f9zGnY7">{data.map(d => d.getDirection)}</a>
            </div>
            <AddToCalendarButton
              name="David & Ellen Holy Matrimony"
              description="https://maps.app.goo.gl/W2HjuZArmwMrajjM9"
              startDate="2024-05-18"
              startTime="14:30"
              endTime="16:00"
              timeZone="Asia/Jakarta"
              location="Saint Peter Cathedral Bandung, Jl. Merdeka No.14, Babakan Ciamis, Kec. Sumur Bandung, Kota Bandung, Jawa Barat 40117"
              options="'Apple','Google','Outlook.com','Yahoo','iCal'"
              buttonStyle="date"
              trigger="click"
              hideBackground
              size="5"
              inline
              label={data.map(d => d.addToCalendar)[0]} />
          </div>

          {/* PONTIANAK */}
          <div className="content-font text-base sm:text-lg font-medium tracking-wider leading-9">
            <div className='mb-4'>
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
            <AddToCalendarButton
              name="David & Ellen Reception"
              description="https://maps.app.goo.gl/xuNyyzBkmkLtgYSx9"
              startDate="2024-05-25"
              startTime="17:00"
              endTime="20:00"
              timeZone="Asia/Jakarta"
              location="Star Hotel Jl. Gajah Mada No.189, Benua Melayu Darat, Kec. Pontianak Sel., Kota Pontianak, Kalimantan Barat 78122"
              options="'Apple','Google','Outlook.com','Yahoo','iCal'"
              buttonStyle="date"
              trigger="click"
              hideBackground
              size="5"
              inline
              label={data.map(d => d.addToCalendar)[0]}
              open={true}
            />
          </div>

          {/* RSVP */}
          {isRsvp ? <>
            <BandungRSVP name={name} lang={data} />
          </>
            : null
          }
          {/* NOTES TO COUPLE */}
          <div className="w-full mx-auto">
            <div className="flex flex-col mx-3 gap-2 content-font text-lg font-medium tracking-wider leading-9">
              <div className="font-extrabold">{data.map(d => d.noteToCouple)}</div>
              <input placeholder={data.map(d => d.rsvpFormName)} type="text" className="border-2 border-gray-400 px-3 py-2 text-sm rounded-lg font-bold" value={name} />
              <textarea type='textarea' placeholder={data.map(d => d.noteToCouple)} className="border-2 border-gray-400 px-3 py-2 text-sm rounded-lg font-bold h-28" minLength={0} maxLength={512} />
              <button className="bg-[#999090] p-2 rounded-full text-white text-sm"  >{data.map(d => d.submit)}</button>
            </div>
          </div>

          {/* WEDDING GIFTS */}
          <div className="w-full mx-auto">
            <div className="content-font text-lg font-medium tracking-wider leading-9">
              <div className="font-extrabold">{data.map(d => d.weddingGift)}</div>
              <div className="max-w-[25rem] mx-auto">
                {data.map(d => d.weddingGiftDesc)}<br />{data.map(d => d.weddingGiftDescDetail)}
              </div>
              <BankAcc name="david_bca"></BankAcc>
              <BankAcc name="ellen_bca"></BankAcc>
            </div>
          </div>

          {/* OTHER IMAGES */}
          <div className="mx-auto w-fit flex flex-wrap gap-10 items-center justify-center rounded-lg drop-shadow-lg">
            <img src='/images/bottom1.jpg.webp' className="w-40 rounded-full border-4 border-white" />
            <img src='/images/bottom2.jpg.webp' className="w-40 rounded-full border-4 border-white" />
            <img src='/images/bottom3.jpg.webp' className="w-40 rounded-full border-4 border-white" />
            <img src='/images/bottom4.jpg.webp' className="w-40 rounded-full border-4 border-white" />
          </div>

          <div className="flex gap-8 justify-center text-center bg-linear items-center align-middle h-full">
            <div className="h-[1px] bg-black grow sm:w-20 sm:grow-0"></div>
            <div className="text-lg text-black top-font">
              <div>{data.map(d => d.thankyou)}</div>
              <div className="text-3xl tracking-wider font-medium">
                David & Ellen
              </div>
              <div>{data.map(d => d.thankyouFamily)}</div>
              <div className='flex flex-col justify-center items-center'>
                <img src="/images/img-bible.jpg.webp" className='sm:w-full sm:h-[120%] rounded-full border-4 border-white' />
                <a className='bg-[#999090] px-5 py-1 text-sm text-white rounded-sm mb-2 w-fit' target="_blank" rel="noopener noreferrer" href="/UndanganFisik.pdf" >{data.map(d => d.seePhysInvt)}</a>
                <button className='bg-[#999090] px-5 py-1 text-sm text-white rounded-sm w-fit' onClick={() => setShowOtherPhotos(!showOtherPhotos)}>{data.map(d => d.seeOtherPhotos)}</button>
                {showOtherPhotos ? <>
                  <img src="/images/img-cool.jpg.webp" className='sm:w-full sm:h-[120%] rounded-full border-4 border-white' />
                  <img src="/images/img-funny.jpg.webp" className='sm:w-full sm:h-[120%] rounded-full border-4 border-white' /></>
                  : null}
              </div>
            </div>
            <div className="h-[1px] bg-black grow sm:w-20 sm:grow-0"></div>
          </div>
        </div>
      </div>
      {/* THANK YOU */}
    </div >
  );
}


export default App;
