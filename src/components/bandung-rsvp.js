import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { AddToCalendarButton } from 'add-to-calendar-button-react';

function BandungRSVP(props) {
  const [data, setData] = useState(props.lang);
  const [name, setName] = useState(props.name);
  const [pax, setPax] = useState(0);
  const [nameError, setNameError] = useState("");
  const [paxError, setPaxError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [msg, setMsg] = useState("");

  const [holyMatrimonyDate, setHolyMatrimonyDate] = useState(data.holyMatrimonyDate);
  const [getDirection, setGetDirection] = useState(data.getDirection);
  const [title, setTitle] = useState(data.rsvpTitle);
  const [description, setDescription] = useState(data.rsvpDesc);
  const [rsvpResponseDoneButton, setRsvpResponseDoneButton] = useState(data.rsvpResponseDoneButton);
  const [rsvpResponseCome, setRsvpResponseCome] = useState(data.rsvpResponseCome);
  const [rsvpResponseNotCome, setRsvpResponseNotCome] = useState(data.rsvpResponseNotCome);
  const [rsvpNameErr, setRsvpNameErr] = useState(data.rsvpNameErr);
  const [rsvpGuestCountErr, setRsvpGuestCountErr] = useState(data.rsvpGuestCountErr);
  const [rsvpAddToCal, setRsvpAddToCal] = useState(data.addToCalendar);
  const [rsvpFormDeadline, setRsvpFormDeadline] = useState(data.rsvpFormDeadline);
  const [placeholderName, setPlaceholderName] = useState("");
  const [guest, setGuest] = useState("");
  const [submit, setSubmit] = useState("");

  useEffect(() => {
    if (isSuccess) {
      setName("");
      setPax("");
      setPaxError("");
      setNameError("");
      setMsg(rsvpResponseCome);
      if (pax == 0) {
        setMsg(rsvpResponseNotCome);
      }
    }
  }, [isSuccess]);

  useEffect(() => {
    setGetDirection(props.lang.map(d => d.getDirection));
    setHolyMatrimonyDate(props.lang.map(d => d.holyMatrimonyDate));
    setTitle(props.lang.map(d => d.rsvpTitle));
    setGuest(props.lang.map(d => d.rsvpFormGuest));
    setRsvpResponseDoneButton(props.lang.map(d => d.rsvpResponseDoneButton));
    setRsvpResponseCome(props.lang.map(d => d.rsvpResponseCome));
    setRsvpResponseNotCome(props.lang.map(d => d.rsvpResponseNotCome));
    setRsvpNameErr(props.lang.map(d => d.rsvpNameErr));
    setRsvpGuestCountErr(props.lang.map(d => d.rsvpGuestCountErr));
    setDescription(props.lang.map(d => d.rsvpDesc));
    setPlaceholderName(props.lang.map(d => d.rsvpFormName));
    setSubmit(props.lang.map(d => d.rsvpFormSubmit));
    setRsvpAddToCal(props.lang.map(d => d.addToCalendar));
    setRsvpFormDeadline(props.lang.map(d => d.rsvpFormDeadline));
  }, props.lang);

  async function SubmitForm() {
    let isValid = HandleNameChange(name) && HandlePaxChange(pax);
    if (!isValid) {
      return;
    }
    const supabase = createClient("https://udwruewtbwimrrlfekig.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkd3J1ZXd0YndpbXJybGZla2lnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY0NjY4ODQsImV4cCI6MjAyMjA0Mjg4NH0.bd5izwVQucwICbx5cj_we0MnKQYvCR4fB8Ypts-_2JI");
    const { data } = await supabase.from("wedding-dinner-rsvp").insert({ name: name, pax: pax });

    setIsSuccess(true);
  };

  function HandleNameChange(name) {
    if (!name) {
      setNameError(rsvpNameErr);
      return false;
    }
    setName(name);
    return true;
  };

  function HandlePaxChange(pax) {
    if (pax < 0) {
      setPaxError(rsvpGuestCountErr);
      return false;
    }
    setPax(pax);
    return true;
  }

  return (
    <div className="content-font text-lg font-medium tracking-wider leading-9">
      <div className="bg-white mx-auto sm:w-max w-full flex flex-col gap-4 p-8 rounded-lg shadow">

        <div className="font-extrabold">{title}</div>
        <div className=" text-base">{description}</div>

        {/* SCHEDULE */}
        <div className="content-font text-base sm:text-lg font-medium tracking-wider leading-9">
          <div>{holyMatrimonyDate}</div>
          <div>18.00 WIB </div>
          <a className="underline underline-offset-2 text-xl" target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/uPfG9h9JYWWdBb2K9" >Royal Dynasty Restaurant</a>
          <div className="mx-auto">
            Jl. Jend. Sudirman No.232A <br /> Kota Bandung
          </div>
          <a className='bg-[#999090] px-5 py-1 text-sm text-white rounded-sm z-20' target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/uPfG9h9JYWWdBb2K9">{getDirection}</a>
        </div>

        {/* FORM */}
        {isSuccess ? <button className="bg-[#2d2d4b] p-2 rounded-full text-white text-sm sm:w-max self-center" onClick={() => window.location.reload()} >{rsvpResponseDoneButton}</button> : <>
          <input placeholder={placeholderName} type="text" className="border-2 border-gray-400 px-3 py-2 text-sm rounded-lg font-bold" value={name} onChange={(e) => HandleNameChange(e.target.value)}></input>
          <div className="flex space-x-2 items-center text-sm">
            <label className="w-full text-right font-bold">{guest}</label>
            <select name="guests" id="guests" className="font-bold  border-2 border-gray-400 px-3 py-2 rounded-lg w-2/6" onChange={(e) => HandlePaxChange(e.target.value)} value={pax}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <button className="bg-[#2d2d4b] p-2 rounded-full text-white text-sm" onClick={SubmitForm} >{submit}</button>
          <p className="text-xs">*{rsvpFormDeadline}</p>
        </>

        }
        {nameError || paxError ? <div className="text-red-500 text-sm font-sans h-fit">
          <div>{nameError}</div>
          <div>{paxError}</div>
        </div> : <></>}
        {msg ?
          <div className="text-green-500 text-sm font-sans h-fit sm:w-max">
            <p className="mb-2 text-center max-w-[25rem] mx-auto">{msg}</p>
            <AddToCalendarButton
              name="David & Ellen Wedding Banquet"
              description="https://maps.app.goo.gl/uPfG9h9JYWWdBb2K9"
              startDate="2024-05-18"
              startTime="18:00"
              endTime="20:00"
              timeZone="Asia/Jakarta"
              location="Royal Dynasty Restaurant, Gedung Graha Sudirman Lt.1, Jl. Jend. Sudirman No.232A, Kb. Jeruk, Kec. Andir, Kota Bandung, Jawa Barat 40181, Indonesia"
              options="'Apple','Google','Outlook.com','Yahoo','iCal'"
              buttonStyle="date"
              trigger="click"
              hideBackground
              size="3"
              inline
              label={rsvpAddToCal[0]} /></div> : <></>}
      </div>
    </div>
  );
}

export default BandungRSVP;