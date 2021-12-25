import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import { useDispatch } from "react-redux";
import axios from "axios";
import GeoCode from "react-geocode";
import { file_upload, save_results } from "../store/actions/file";
import NavbarUI from "./NavbarUI";
import {Redirect} from "react-router-dom"
import { Marker } from "react-leaflet";

function Navbar() {
  const [file, setFile] = useState([]);
  const [go, setGo] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    setGo(0)
  }, [])

  const fileHandler = (files) => {
    if (!files.length) {
      setFile(null);
      return;
    } else {
      const promise = new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsArrayBuffer(files[0]);

        fileReader.onload = (e) => {
          const bufferArray = e.target.result;

          const wb = XLSX.read(bufferArray, { type: "buffer" });

          const wsname = wb.SheetNames[0];

          const ws = wb.Sheets[wsname];

          const data = XLSX.utils.sheet_to_json(ws);

          resolve(data);
        };

        fileReader.onerror = (error) => {
          reject(error);
        };
      });

      promise.then((data) => {
        console.log(data);
        setFile(data);
      });
    }
  };

  const submitHandler = async () => {
    let arr = [];

    console.log(file);

    // file.map(async (f) => {
    //   try {
    //     let options = {
    //       method: "GET",
    //       url: "",
    //       params: {
    //         q: f.Address,
    //         "accept-language": "en",
    //         polygon_threshold: "0.0",
    //       },
    //       headers: {
    //
    //       },
    //     };
    //     const response = await axios.request(options);

    //     console.log(response);

    //     // console.log(response.data[0].lat + " " + response.data[0].lon);

    //     options = {
    //       method: "GET",
    //       url: "",
    //       params: {
    //         lat: response.data[0].lat,
    //         lon: response.data[0].lon,
    //         "accept-language": "en",
    //         polygon_threshold: "0.0",
    //       },
    //       headers: {
    //
    //       },
    //     };

    //     const res = await axios.request(options);

    //     console.log(res.data.address.postcode);

    //     arr.push({
    //       ...f,
    //       lat: response.data[0].lat,
    //       lng: response.data[0].lon,
    //       postcode: res.data.address.postcode,
    //     });
    //   } catch (err) {
    //     console.log(err);
    //   }
    // });


    console.log(file);
    
    await dispatch(file_upload(file));

    // /*  */ setGo(1);

    axios
      .post("/analyse", {
        data: file,
        cur_loc: {
          lat: "27",
          lng: "72"
        }
      })
      .then((res) => {
        console.log(res);
        dispatch(save_results(res));
      })
      .then(() => {
        setGo(1);
        console.log("this")
      })
      .catch((err) => console.log(err));
  };

  return (<span>
    <NavbarUI fileHandler={fileHandler} submitHandler={submitHandler} />
    {
      go
      ?
        <Redirect push to="/analysis" />
      :
      null
    }
  </span>);
};

export default Navbar;
