import { RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { useEffect, useState } from "react";
import { FaClone, FaClipboardCheck } from 'react-icons/fa';

/* TODO:  // http://localhost:3000/?name=Davita%20Khowati&lang=EN&rsvp=true
Pakai location search untuk dapat url awal, lalu parameter di URLEncode
*/

export default function InvitationBuilder() {
  const DEFAULT_MESSAGE = "Hi ini undangannya ya";
  const [msg, setMsg] = useState(DEFAULT_MESSAGE);
  const [name, setName] = useState("");
  const [language, setLanguage] = useState("ID");
  const [isTextCopied, setIsTextCopied] = useState(false);
  const [goToRoyalDynasty, setGoToRoyalDynasty] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(msg);
    setIsTextCopied(true);
    setTimeout(() => {
      setIsTextCopied(false);
    }, 2000);
  };

  useEffect(() => {
    console.log(goToRoyalDynasty);
  }, [goToRoyalDynasty]);


  const handleClearInput = () => {
    setName("");
    setLanguage("ID");
    setGoToRoyalDynasty(false);
  };


  return <div className="flex flex-col px-4 gap-4 h-full w-full">
    <div className="text-center text-3xl font-bold text-[#2d2d4b]">
      Invitation Builder
    </div>
    <div>
      <label className="font-bold text-[#2d2d4b]">Nama Penerima: </label>
      <input type="text" className="border-2 border-gray-400 px-3 py-2 text-sm rounded-lg font-bold" placeholder="Nama penerima" value={name} onChange={(e) => setName(e.target.value)} />
    </div>
    <div>
      <label className="w-full text-right font-bold">Bahasa default: </label>
      <select name="guests" id="guests" className="font-bold border-2 border-gray-400 px-3 py-2 rounded-lg w-2/6" value={language} onChange={(e) => setLanguage(e.target.value)} >
        <option value="ID">Indonesia</option>
        <option value="EN">Inggris</option>
        <option value="ZH">Mandarin</option>
      </select>
    </div>
    <div >
      <fieldset name="rsvp" >
        <legend className="text-lg font-bold text-[#2d2d4b]" >Ikut ke royal dynasty? </legend>
        <RadioGroup row name="rsvp" value={goToRoyalDynasty} onChange={(e) => setGoToRoyalDynasty(e.target.value)}>
          <FormControlLabel value={true} control={<Radio />} label="Iya" />
          <FormControlLabel value={false} control={<Radio />} label="Tidak" />
        </RadioGroup>
      </fieldset>
    </div>
    <div>
      <div className="flex flex-row gap-2">
        <button className="flex flex-row bg-slate-800 text-white font-bold py-2 px-4 rounded items-center" onClick={(e) => copyToClipboard(e.target.value)}>{isTextCopied ? <FaClipboardCheck className="h-12 w-4 text-green-500 transition-transform duration-300" /> : <FaClone className="h-12 w-4" />} Copy Text  </button>
        <button className="flex flex-row bg-slate-800 text-white font-bold py-2 px-4 rounded items-center" onClick={handleClearInput} >RESET INPUT</button>
      </div>
      <textarea type='textarea' className="border-2 border-gray-400 px-3 py-2 text-sm rounded-lg font-bold w-full h-96 normal-case" value={msg} onChange={(e) => setMsg(e.target.value)}></textarea>
    </div>
  </div >;
}