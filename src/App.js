import './App.css';
import { React } from 'react';
import { FaClone, FaExternalLinkAlt, FaMusic } from 'react-icons/fa';

import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  const queryParam = new URLSearchParams(window.location.search);
  const name = queryParam.get("to");

  const copyToClipboard = async () => {
    navigator.clipboard.writeText("12345678");
    toast.success("Copied to clipboard", {
      autoClose: 2000,
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: true,
      pauseOnFocusLoss: false,

    });
  };

  return (
    <div class="grid grid-flow-row auto-rows-max">
      <audio loop autoPlay>
        <source src="song.mp3" type="audio/mpeg" />
      </audio>

    {/* <div class="border-b-8 opening drop-shadow-lg border-white fade-in">
      <img class="w-full max-h-screen object-cover object-top animate-fade" src="/images/opening.jpg" />
    </div> */}

      <div class="main fade-in p-2 w-full">
        <div class="grid gap-8 grid-flow-col auto-cols-max mx-auto justify-center text-center bg-linear">
          <div class="grid gap-3 divide-y-2 divide-[#999090] pl-2 text-transparent top-font text-lg font-medium">
            <div>--------------------</div>
            <div>--------------------</div>
          </div>

          <div class="text-lg text-black top-font">
          {/* <div class="text-lg text-[#999090] top-font"> */}
            <div>The Wedding of</div>
            <div class="text-3xl tracking-wider font-medium">
              David & Ellen
            </div>
          </div>

          <div class="grid gap-3 divide-y-2 divide-[#999090] pr-2 text-transparent top-font text-lg font-medium">
            <div>--------------------</div>
            <div>--------------------</div>
          </div>
        </div>    
      </div>

      <div class="grid gap-6 mx-auto w-full justify-items-center text-center pb-6 schedule fade-in">

        <div class="grid gap-8 w-full pb-12 border-b-8 border-white drop-shadow-lg shadow-inner bg">
          <div class="pt-5 mb-6 grid gap-3 divide-y-2 divide-[#999090] text-[#999090] top-font text-lg font-medium">
            <div >Dear,</div>
            <div class="w-fit pt-2 text-2xl mx-auto">{name}</div>
          </div>

          <div class="content-font text-lg font-medium tracking-wider mb-8">
            <div class="font-extrabold">embraced by god's grace</div>
            <div>we welcome you to our</div>
            <div>wedding celebration</div>
          </div>

          <div class="leading-10">
            <div class="name-font text-[2.6rem]">David Khowanto Lim</div>
            <div class="text-lg capitalize parent-font leading-5">first son of<br />lim yam hiong & khow phek huan</div>
          </div>

          <div class="name-font text-[2.6rem] m-3">&</div>
          <div class="leading-10">
            <div class="name-font text-[2.6rem]">Eleonora Julianti Mardi Utami</div>
            <div class="text-lg capitalize parent-font leading-5">first Daughter of<br />apolonius sumardijono & elite julili</div>
          </div>
        </div>

        <div class="mt-12 content-font text-lg font-medium tracking-wider leading-9">
          <div class="font-extrabold">holy matrimony</div>
          <div>Saturday, 18th May 2024 | xx.xx WIB</div>
          <a class="underline underline-offset-2 text-xl" target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/K7KnnNnHV1f9zGnY7" >Saint Peter Cathedral</a>
          <div class="grid grid-flow-col auto-cols-max gap-2 w-fit mx-auto">
            Jl. Merdeka, no. 14, Bandung
            <a class="underline underline-offset-2 text-xl" target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/K7KnnNnHV1f9zGnY7" >
              <FaExternalLinkAlt class="mt-2.5 h-3 w-4" />
            </a>
          </div>
        </div>

        <div class="mt-10 content-font text-lg font-medium tracking-wider">
          <div class="font-extrabold">reception</div>
          <div>Saturday, 25th May 2024 | xx.xx WIB</div>
          <a class="underline underline-offset-2 text-xl" target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/8Rj8MCY5tRYaJxum8" >Star Restaurant </a>
          <br />
          <a class="text-lg" target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/8Rj8MCY5tRYaJxum8" >function hall lt. 3</a>
          <div class="grid grid-flow-col auto-cols-max gap-2 w-fit mx-auto">
            Jl. Gajah Mada No. 189, Pontianak
            <a class="underline underline-offset-2 text-xl" target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/8Rj8MCY5tRYaJxum8" >
              <FaExternalLinkAlt class="mt-2 h-3 w-4" />
            </a>
          </div>
        </div>

        <div class="mt-10 pb-6 content-font text-lg font-medium tracking-wider">
          <div class="font-extrabold">reception rsvp</div>
          <div>please let us know if you'll join us</div>
          <div class="pb-2 drop-shadow-lg">
            <iframe class="w-[350px] mx-auto h-[350px] rounded-lg" src="https://tally.so/r/woGZWe" title="" />
          </div>
        </div>


        <div class="w-full mx-auto">
          <div class="mt-6 mb-2 content-font text-lg font-medium tracking-wider">
            <div class="font-extrabold">wedding gifts</div>
            <div class="max-w-[25rem] mx-auto">Whilst it’s enough of your present and prayer, it would be our pleasure to receive your special give of love</div>
            {/* <div>it would be our pleasure to receive</div>
            <div>your special give of love</div> */}
            <div class="grid p-2 grid-flow-col auto-cols-max text-left mt-2 bg-white w-fit mx-auto rounded-lg drop-shadow-md">
              <div class="w-52">
                <div>BCA XXXXXXXX</div>
                <div>a.n. David Ellen</div>
              </div>
              <FaClone class="h-12 w-4" onClick={copyToClipboard} />
            </div>
          </div>
          <div>
            <ToastContainer 
              style={{width: "230px"}}
            />
          </div>

          <div class="mx-auto w-fit mt-12 grid gap-8 grid-flow-col auto-cols-max rounded-lg drop-shadow-lg">
            <img src='/images/main.png' class="w-24 rounded-full border-4 border-white" />
            <img src='/images/main.png' class="w-24 rounded-full border-4 border-white" />
            <img src='/images/main.png' class="w-24 rounded-full border-4 border-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
