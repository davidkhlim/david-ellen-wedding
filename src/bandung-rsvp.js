import { createClient } from "@supabase/supabase-js";
import { useState } from "react";


function BandungRSVP() {
  const [name, setName] = useState("");
  const [pax, setPax] = useState("");

  async function SubmitForm() {
    const supabase = createClient("https://udwruewtbwimrrlfekig.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkd3J1ZXd0YndpbXJybGZla2lnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY0NjY4ODQsImV4cCI6MjAyMjA0Mjg4NH0.bd5izwVQucwICbx5cj_we0MnKQYvCR4fB8Ypts-_2JI");

    const { data } = await supabase.from("wedding-dinner-rsvp").insert({ name: name, pax: pax });
    console.log(data);
    setName("");
    setPax("");
  };

  return (
    <div className="content-font text-lg font-medium tracking-wider leading-9">
      <div className="font-extrabold">reception rsvp</div>
      <div>please let us know if you'll join us</div>

      <div className="bg-white mx-auto sm:w-max w-full flex flex-col gap-8 p-8 rounded-lg shadow">
        <input placeholder="full name" type="text" className="border-2 border-gray-400 px-3 py-2 text-sm rounded-lg" value={name} onChange={(e) => setName(e.target.value)}></input>

        <div className="flex space-x-2 items-center">
          <input type="number" min='1' max='10' className="border-2 border-gray-400 rounded-lg p-2 text-sm text-right" placeholder="1" value={pax} onChange={(e) => setPax(e.target.value)}></input>
          <label>number of guests</label>
        </div>
        <button className="bg-[#999090] p-2 rounded-full text-white" onClick={SubmitForm}>I'll be there</button>
      </div>


      {/* <div className="pb-2 drop-shadow-lg">
        <iframe className="w-[350px] mx-auto h-[350px] rounded-lg" src="https://tally.so/r/woGZWe" title="" /> */}
      {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfZ5fXBMmFDF6qHHX7szGJFwRC5XqZAwc9Yq3X8U1DGYQqV9A/viewform?embedded=true" width="640" height="1116" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
      {/* </div> */}
    </div>
  );
}

export default BandungRSVP;