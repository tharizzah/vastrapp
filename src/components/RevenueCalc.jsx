import { React, useState, useEffect } from "react";
import { SelectField, Button, Input, SwitchField } from "@aws-amplify/ui-react";
import BarChart from "./BarChart";
import "@aws-amplify/ui-react/styles.css";

const RevenueCalc = () => {
  const [value, setValue] = useState("web");
  const [isChecked, setIsChecked] = useState(false);
  const [streams, setStreams] = useState(1000000);
  const [rate, setRate] = useState("0.02");
  const [rev1, setRev1] = useState(16000);
  const [rev2, setRev2] = useState(4000);
  const [rev3, setRev3] = useState(10000);
  const [rev4, setRev4] = useState(1330);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    if (refresh) {
      setRefresh(false);
    }
  }, [refresh]);

  useEffect(() => {
    calcRevenue();
  }, [value, streams, rate]);

  useEffect(() => {
    if (!isChecked) {
      setRate("0.02");
    } else {
      setRate("0.05");
    }
  }, [isChecked]);

  function calcWeb() {
    let numRate = parseFloat(rate);
    let numStreams = Number(streams);
    const vastrFees = 0.2;
    let mpFee = "0";
    if (value === "web") {
      mpFee = "0";
    }
    if (value === "apple") {
      mpFee = "0.3";
    }
    if (value === "google") {
      mpFee = "0.03";
    }
    let fees = vastrFees + parseFloat(mpFee);
    let feeTotal = numRate * fees;
    let netRev = numRate - feeTotal;
    let revenue = netRev * numStreams;
    setRev1(revenue);
  }

  function isNumber(value) {
    return typeof value === "number" && !isNaN(value);
  }

  function calcAppleMusic() {
    let numRate = 0.01;
    if (rate < 0.01) {
      numRate = 0;
    }
    let numStreams = Number(streams);
    setRev3(numRate * numStreams);
  }

  function calcSpotify() {
    let numRate = 0.004;
    if (rate < 0.004) {
      numRate = 0;
    }
    let numStreams = Number(streams);
    setRev2(numRate * numStreams);
  }

  function calcPandora() {
    let numRate = 0.00133;
    if (rate < 0.00133) {
      numRate = 0;
    }
    let numStreams = Number(streams);
    setRev4(numRate * numStreams);
  }

  function calcRevenue() {
    let streamQty = Number(streams);
    let rateInput = Number(rate);
    if (!isNumber(streamQty)) {
      alert("Streams must be a number.");
      return;
    }
    if (!isNumber(rateInput)) {
      alert("Rate must be a number.");
      return;
    }
    calcWeb();
    calcAppleMusic();
    calcSpotify();
    calcPandora();
    setRefresh(true);
  }

  useEffect(() => {
    if (!isChecked) {
      // non exclusive graph
    } else {
    }
  }, [rate, streams]);

  return (
    <section id="keyfeatures" className="section bg">
      <div
        className="w-layout-blockcontainer container w-container"
        style={{ background: "#ffffff" }}
      >
        <h1 className="heading center">Revenue Calculator</h1>
        <div className="card-rows">
          <div
            data-w-id="4ce1a558-00d1-b404-ba6e-55e4331257d9"
            style={{ opacity: 0 }}
            className="cards"
          >
            <SelectField
              label="Select Marketplace"
              //placeholder="Web based sales (no marketplace fee)"
              value={value}
              onChange={e => setValue(e.target.value)}
            >
              <option value="web">Web based streams</option>
              <option value="google">Google based streams (Android)</option>
              <option value="apple">Apple based streams (iOS)</option>
            </SelectField>
            {/* <div className="card-title">Select Marketplace</div> */}
            <div>Streams</div>
            <Input
              placeholder={streams}
              label="Streams"
              id="streams"
              onChange={e => {
                setStreams(e.currentTarget.value);
              }}
            />
            <div>
              <SwitchField
                className="card-rows"
                label="Exclusive to VASTR"
                isChecked={isChecked}
                onChange={e => {
                  setIsChecked(e.target.checked);
                }}
              />
            </div>
            {isChecked && (
              <div>
                <div>Rate per stream</div>
                <div className="card-rows">
                  <h4>$</h4>
                  <div className="spacer5p"></div>
                  <Input
                    placeholder="0.05"
                    label="Rate"
                    id="rate"
                    onChange={e => {
                      setRate(e.currentTarget.value);
                    }}
                  />
                </div>
              </div>
            )}
            <div className="btn-container">
              * Exclusives have a minimum rate of $0.05
            </div>
            <br />
            <div className="small-text">
              * rates used to calculate artist revenue:
              <br />
              VASTR @ $0.016 for non-exclusive licenses
              <br />
              VASTR @ 80% of exclusive licenses
              <br />
              Apple Music @ $0.01 per stream
              <br />
              Spotify @ $0.004 per stream
              <br />
              Pandora @ $0.00133 per stream
            </div>
          </div>
          <div
            data-w-id="4ce1a558-00d1-b404-ba6e-55e4331257eb"
            style={{ opacity: 0 }}
            className="container"
          >
            <div className="center">
              {!refresh && (
                <BarChart rev1={rev1} rev2={rev2} rev3={rev3} rev4={rev4} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevenueCalc;
