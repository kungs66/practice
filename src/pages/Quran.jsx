import { useEffect, useState } from "react";

const axios = require("axios");

const Quran = () => {
  const [dataQ, setDataQ] = useState([]);
  const [inputSurah, setInputSurah] = useState("");
  const quran_api = `https://api.npoint.io/99c279bb173a6e28359c/surat/`;
  console.log(inputSurah);

  useEffect(() => {
    // allAyat();
  }, []);

  function getAyat() {
    axios
      .get(quran_api + inputSurah)
      .then(function (response) {
        setDataQ(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function allAyat() {
    axios
      .get("https://api.npoint.io/99c279bb173a6e28359c/")
      .then(function (response) {
        if (!response) {
          console.log("loading");
        } else {
          console.log(response.data.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="max-w-full py-16">
      <div className="mx-auto justify-center flex">
        <input
          type="number"
          maxLength="2"
          min="0"
          name="surah"
          id="surah"
          onChange={(e) => setInputSurah(e.target.value)}
          value={inputSurah}
          className="input-value bg-slate-700 p-2 rounded-l-md outline-none text-slate-100"
          placeholder="Nomor Urut Surat"
        />
        <input
          onClick={() => getAyat()}
          type="button"
          value="search"
          className="search-btn text-base font-medium cursor-pointer text-slate-100 bg-slate-500 p-2 px-4 items-center rounded-r-md"
        />
      </div>
      <div className="mx-12 my-12 sm:mx-4 sm:my-6 space-y-2">
        {dataQ.map((elm, index) => {
          return (
            <div
              key={index}
              className="border border-solid border-gray-400 py-2 px-2 flex justify-between items-center"
            >
              <div className="w-2/5">
                <h1 className="font-semibold">{elm.nomor}</h1>
                <span>{elm.id}</span>
              </div>
              <div>
                <span>{elm.ar}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Quran;
