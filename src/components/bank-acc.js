
import { FaClone, FaClipboardCheck } from 'react-icons/fa';
import { useState } from "react";

const BANK_ACC = {
  david_bca: { no: "7155229608", name: "David Khowanto", bank: "BCA" },
  ellen_bca: { no: "0083580833", name: "Eleonora Julianti Mardi", bank: "BCA" }
};

export default function BankAcc(props) {
  const [isBankAccCopied, setIsBankAccCopied] = useState(false);
  const info = BANK_ACC[props.name];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(info.no);
    setIsBankAccCopied(true);
    setTimeout(() => {
      setIsBankAccCopied(false);
    }, 2000);
  };

  return (<div className="grid p-2 grid-flow-col auto-cols-max text-left mt-2 bg-white w-fit mx-auto rounded-lg drop-shadow-md" onClick={copyToClipboard}>
    <div className="w-fit p-2" >
      <div>{info.bank} {info.no}</div>
      <div>{info.name}</div>
    </div>
    {isBankAccCopied ? <FaClipboardCheck className="h-12 w-4 text-green-500 transition-transform duration-300" /> : <FaClone className="h-12 w-4" />}
  </div>
  );
}

