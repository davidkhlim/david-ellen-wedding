import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";


function BandungRSVP(props) {
  const [name, setName] = useState(props.name);
  const [pax, setPax] = useState(0);
  const [nameError, setNameError] = useState("");
  const [paxError, setPaxError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (isSuccess) {
      setName("");
      setPax("");
      setPaxError("");
      setNameError("");
      setMsg("We're thrilled you'll be joining us to share in this special day!");
      if (pax == 0) {
        setMsg("It's unfortunate you won't be able to join us—we were really hoping to share this special day with you.");
      }
    }
  }, [isSuccess]);

  async function SubmitForm() {
    const supabase = createClient("https://udwruewtbwimrrlfekig.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkd3J1ZXd0YndpbXJybGZla2lnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY0NjY4ODQsImV4cCI6MjAyMjA0Mjg4NH0.bd5izwVQucwICbx5cj_we0MnKQYvCR4fB8Ypts-_2JI");
    let isValid = HandleNameChange(name) && HandlePaxChange(pax);
    if (!isValid) {
      return;
    }
    const { data } = await supabase.from("wedding-dinner-rsvp").insert({ name: name, pax: pax });
    console.log(data);

    setIsSuccess(true);
  };

  function HandleNameChange(name) {
    if (!name) {
      setNameError("Please enter your name");
      return false;
    }
    setName(name);
    return true;
  };

  function HandlePaxChange(pax) {
    if (pax < 0) {
      setPaxError("Please enter a valid number");
      return false;
    }
    setPax(pax);
    return true;
  }

  return (
    <div className="content-font text-lg font-medium tracking-wider leading-9">
      <div className="font-extrabold">reception rsvp</div>
      <div>please let us know if you'll join us</div>

      <div className="bg-white mx-auto sm:w-max w-full flex flex-col gap-8 p-8 rounded-lg shadow">
        {isSuccess ? <button className="bg-[#999090] p-2 rounded-full text-white text-sm" onClick={() => window.location.reload()} >Submit another response</button> : <>
          <input placeholder="full name" type="text" className="border-2 border-gray-400 px-3 py-2 text-sm rounded-lg font-bold" value={name} onChange={(e) => HandleNameChange(e.target.value)}></input>
          <div className="flex space-x-2 items-center text-sm">
            <label className="w-4/6">number of guests</label>
            <select name="cars" id="cars" className="font-bold  border-2 border-gray-400 px-3 py-2 rounded-lg w-2/6" onChange={(e) => HandlePaxChange(e.target.value)} value={pax}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <button className="bg-[#999090] p-2 rounded-full text-white text-sm" onClick={SubmitForm} >I'll be there</button>
        </>

        }
        {nameError || paxError ? <div className="text-red-500 text-sm font-sans h-fit">
          <div>{nameError}</div>
          <div>{paxError}</div>
        </div> : <></>}

        {msg ?
          <div className="text-green-500 text-sm font-sans h-fit">{msg}</div> : <></>}
      </div>


      {/* <div className="pb-2 drop-shadow-lg">
        <iframe className="w-[350px] mx-auto h-[350px] rounded-lg" src="https://tally.so/r/woGZWe" title="" /> */}
      {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfZ5fXBMmFDF6qHHX7szGJFwRC5XqZAwc9Yq3X8U1DGYQqV9A/viewform?embedded=true" width="640" height="1116" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
      {/* </div> */}
    </div>
  );
}

export default BandungRSVP;;