import { RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { useEffect, useState } from "react";
import { FaClone, FaClipboardCheck } from 'react-icons/fa';

/* TODO: lalu parameter harus di URLEncode
minimize ukuran webp yang masih besar
*/

export default function InvitationBuilder() {
  const GREETINGS_MSG1 = "Kepada Yth.\nBapak/Ibu/Saudara/i\n";
  const CONTENT_MSG1 = "\n_____________________\n\nDengan kerendahan hati dan hormat kami sekeluarga, kami mengundang Bapak/Ibu/Saudara/Saudari untuk menghadiri acara resepsi pernikahan kami.\n\nBerikut link undangan kami, untuk info lengkap dari acara, bisa kunjungi:\n";
  const THANKS_MSG1 = "\n\nMerupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir dan memberikan doa restu.";
  const GREETINGS_MSG2 = "Halo ";
  const CONTENT_MSG2 = "!\n_____________________\n\nKami ada berita bahagia buat teman-teman!\nDengan berbahagia kami mengajak teman-teman untuk menghadiri acara resepsi pernikahan kami.\n\nBerikut link undangan kami, untuk info lengkap dari acara, bisa kunjungi:\n";
  const THANKS_MSG2 = "\n\nMerupakan suatu kebahagiaan bagi kami apabila teman-teman berkenan untuk hadir dan memberikan doa restu.";
  const REGARD_MSG = "\n\nTerima Kasih\n\nHormat kami,\nDavid & Ellen\n____________________";
  const DEFAULT_MSG = GREETINGS_MSG1 + CONTENT_MSG1 +THANKS_MSG1;
  const [msg, setMsg] = useState(DEFAULT_MSG);
  const [name, setName] = useState("");
  const [language, setLanguage] = useState("ID");
  const [isTextCopied, setIsTextCopied] = useState(false);
  const [goToRoyalDynasty, setGoToRoyalDynasty] = useState(false);
  const [version, setVersion] = useState(true ); //false 2, true 1

  const copyToClipboard = () => {
    navigator.clipboard.writeText(msg);
    setIsTextCopied(true);
    setTimeout(() => {
      setIsTextCopied(false);
    }, 2000);
  };

  useEffect(() => {
    const a = document.getElementById("warning");

    if(goToRoyalDynasty === "true") a.style.display = 'block';
    else a.style.display = 'none';

    generateText();
  }, [goToRoyalDynasty, name, language, version]);

  const handleClearInput = () => {
    setName("");
    setLanguage("ID");
    setGoToRoyalDynasty(false);
    setVersion(true);
  };

  const generateText = () => {
    const a = encodeURI(name);
    let b = GREETINGS_MSG1 + '*' + name + '*' + CONTENT_MSG1 + "https://david-eleonora-wedding.web.app/?name=" + a + "&rsvp=" + goToRoyalDynasty + "&lang=" + language + THANKS_MSG1;
    if(version === 'false') b = GREETINGS_MSG2 + '*' + name + '*' + CONTENT_MSG2 + "https://david-eleonora-wedding.web.app/?name=" + a + "&rsvp=" + goToRoyalDynasty + "&lang=" + language + THANKS_MSG2;
    b = b + REGARD_MSG;
    setMsg(b);
  }


  return <div className="flex flex-col px-4 gap-4 h-full w-full">
    <div className="text-center text-3xl font-bold text-[#2d2d4b]">
      Invitation Builder
    </div>
    <div className="text-md">
      <label className="font-bold text-[#2d2d4b]">Nama Penerima: </label>
      <input type="text" className="border-2 border-gray-400 px-3 py-2 text-sm rounded-lg font-bold" placeholder="Nama penerima" value={name} onChange={(e) => setName(e.target.value)} />
    </div>
    <div>
      <label className="w-full text-right font-bold text-md">Bahasa default: </label>
      <select name="guests" id="guests" className="font-bold border-2 border-gray-400 px-3 py-2 rounded-lg w-2/6 text-sm" value={language} onChange={(e) => setLanguage(e.target.value)} >
        <option value="ID">Indonesia</option>
        <option value="EN">Inggris</option>
        <option value="ZH">Mandarin</option>
      </select>
    </div>
    <div className="text-md">
      <fieldset name="rsvp" >
        <legend className="text-md font-bold" >Ikut ke royal dynasty? </legend>
        <RadioGroup row name="rsvp" value={goToRoyalDynasty} onChange={(e) => setGoToRoyalDynasty(e.target.value)}>
          <FormControlLabel value={true} control={<Radio />} label="Iya" />
          <FormControlLabel value={false} control={<Radio />} label="Tidak" />
        </RadioGroup>
      </fieldset>
      <div className="text-red-600 font-bold" id="warning">
      Woi ini acara tertutup ye
      </div>

      <fieldset name="text-version">
        <legend className="text-md font-bold" >Versi 1 (Formal) / Versi 2 (Friendly)</legend>
        <RadioGroup row name="version" value={version} onChange={(e) => setVersion(e.target.value)}>
          <FormControlLabel value={true} control={<Radio />} label="1" />
          <FormControlLabel value={false} control={<Radio />} label="2" />
        </RadioGroup>
      </fieldset>
    </div>
    <div>
      <div className="flex flex-row gap-2 my-4">
        <button className="flex flex-row bg-slate-800 text-white font-bold py-2 px-4 rounded items-center" onClick={(e) => copyToClipboard(e.target.value)}>{isTextCopied ? <FaClipboardCheck className="h-12 w-4 mr-2 text-green-500 transition-transform duration-300" /> : <FaClone className="h-12 w-4 mr-2" />} Copy Text  </button>
        <button className="flex flex-row bg-slate-800 text-white font-bold py-2 px-4 rounded items-center" onClick={handleClearInput} >RESET INPUT</button>
      </div>
      <textarea type='textarea' className="border-2 border-gray-400 px-3 py-2 text-sm rounded-lg font-bold w-full h-96 normal-case" value={msg} onChange={(e) => setMsg(e.target.value)}></textarea>
    </div>
  </div>;
}