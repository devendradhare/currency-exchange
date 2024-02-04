import React from "react";
import Styles from "./structure.module.css";
import getSymbolFromCurrency from "currency-symbol-map";

// components
import SvgWorldMap from "./worldMap/WorldMap";
import TopCurrencyCard from "./topCurrencyCard/TopCurrencyCard";

const Structure = () => {
  const [selectedOption, setSelectedOption] = React.useState("USD");
  const [currency, setCurrency] = React.useState({
    success: true,
    base: "USD",
    timestamp: 1706983143,
    rates: {
      USD: 1.0,
      AED: 3.672504,
      AFN: 74.730575,
      ALL: 96.4046374335,
      AMD: 404.598018,
      ANG: 1.814943,
      AOA: 832.503981,
      ARS: 825.933842,
      AUD: 1.53325,
      AZN: 1.70397,
      BAM: 1.797362,
      BBD: 2.019501,
      BDT: 109.773469,
      BGN: 1.811403,
      BHD: 0.379644,
      BIF: 2873.745084,
      BND: 1.344714,
      BOB: 6.911731,
      BRL: 4.968904,
      BSD: 1.000239,
      BTC: 0.0000231088,
      BTN: 82.909709,
      BYN: 3.273292,
      BZD: 2.016101,
      CAD: 1.34745,
      CDF: 2743.000362,
      CHF: 0.867015,
      CLF: 0.034356,
      CLP: 938.774,
      CNY: 7.122604,
      COP: 3933.5,
      CRC: 519.824196,
      CVE: 102.450394,
      CZK: 23.119204,
      DJF: 177.720697,
      DKK: 6.909504,
      DOP: 58.940551,
      DZD: 134.51804,
      EGP: 30.847097,
      ERN: 15,
      ETB: 57.008466,
      ETH: 0.0004313622,
      EUR: 0.92535,
      FJD: 2.24975,
      FKP: 0.792083,
      GBP: 0.791578,
      GEL: 2.66504,
      GHS: 12.403858,
      GIP: 0.792083,
      GMD: 67.42502,
      GNF: 8657.876475,
      GTQ: 7.814273742,
      GYD: 209.254239,
      HKD: 7.82145,
      HNL: 24.842933,
      HRK: 6.88032,
      HTG: 132.435808,
      HUF: 356.010388,
      IDR: 15731.2,
      ILS: 3.65509,
      INR: 82.99955,
      IQD: 1310,
      IRR: 42050.000352,
      ISK: 137.480386,
      JMD: 157.103863,
      JOD: 0.709204,
      JPY: 148.37504,
      KES: 160.503804,
      KGS: 89.3201925,
      KHR: 4114.735138,
      KMF: 456.503796,
      KRW: 1338.930384,
      KWD: 0.3076008311,
      KYD: 0.833529,
      KZT: 452.193652,
      LAK: 20745.000349,
      LBP: 15140.484217,
      LKR: 312.083004,
      LRD: 190.103775,
      LSL: 18.603772,
      LYD: 4.825039,
      MAD: 10.041504,
      MDL: 17.803612,
      MGA: 4551.468887,
      MKD: 57.001612,
      MMK: 2100.455362,
      MNT: 3424.780963,
      MOP: 8.055144,
      MRO: 356.999828,
      MUR: 46.104221,
      MVR: 15.403741,
      MWK: 1695.211659,
      MXN: 17.131504,
      MYR: 4.717504,
      MZN: 63.503732,
      NAD: 18.603729,
      NGN: 1194.503727,
      NIO: 36.909554,
      NOK: 10.54355,
      NPR: 133.563729,
      NZD: 1.649349,
      OMR: 0.387786,
      PAB: 1.000239,
      PEN: 3.806039,
      PHP: 56.164504,
      PKR: 279.650375,
      PLN: 3.999445,
      PYG: 7280.279742,
      QAR: 3.641038,
      RON: 4.607104,
      RSD: 108.611038,
      RUB: 91.005038,
      RWF: 1279.759426,
      SAR: 3.75011,
      SCR: 13.512468,
      SDG: 600.503678,
      SEK: 10.57593,
      SGD: 1.344104,
      SLL: 19750.000338,
      SOS: 571.000169,
      SRD: 36.623504,
      STN: 22.6988991034,
      SVC: 8.75,
      SZL: 18.603655,
      THB: 35.44022,
      TJS: 10.927312,
      TMT: 3.51,
      TND: 3.127038,
      TOP: 2.363704,
      TRY: 30.501304,
      TTD: 6.784941,
      TWD: 31.390804,
      TZS: 2542.771224,
      UAH: 37.77969,
      UGX: 3818.44248,
      UYU: 39.185774,
      UZS: 12450.0001675,
      VES: 36.189934,
      VND: 24350,
      VUV: 120.011869,
      XAF: 606.946102,
      XCD: 2.70255,
      XOF: 602.000332,
      XPF: 111.050364,
      XRP: 1.9162262607,
      YER: 250.350364,
      ZAR: 18.90139,
      ZMK: 9001.203591,
      ZMW: 27.180995,
    },
  });
  const [data, setData] = React.useState([
    { country: "us", currencyCode: "USD", value: 1.0 },
    { country: "ae", currencyCode: "AED", value: 3.672504 },
    { country: "af", currencyCode: "AFN", value: 74.730575 },
    { country: "al", currencyCode: "ALL", value: 96.4046374335 },
    { country: "am", currencyCode: "AMD", value: 404.598018 },
    { country: "an", currencyCode: "ANG", value: 1.814943 },
    { country: "ao", currencyCode: "AOA", value: 832.503981 },
    { country: "ar", currencyCode: "ARS", value: 825.933842 },
    { country: "au", currencyCode: "AUD", value: 1.53325 },
    { country: "az", currencyCode: "AZN", value: 1.70397 },
    { country: "ba", currencyCode: "BAM", value: 1.797362 },
    { country: "bb", currencyCode: "BBD", value: 2.019501 },
    { country: "bd", currencyCode: "BDT", value: 109.773469 },
    { country: "bg", currencyCode: "BGN", value: 1.811403 },
    { country: "bh", currencyCode: "BHD", value: 0.379644 },
    { country: "bi", currencyCode: "BIF", value: 2873.745084 },
    { country: "bn", currencyCode: "BND", value: 1.344714 },
    { country: "bo", currencyCode: "BOB", value: 6.911731 },
    { country: "br", currencyCode: "BRL", value: 4.968904 },
    { country: "bs", currencyCode: "BSD", value: 1.000239 },
    { country: "bt", currencyCode: "BTC", value: 0.0000231088 },
    { country: "bt", currencyCode: "BTN", value: 82.909709 },
    { country: "by", currencyCode: "BYN", value: 3.273292 },
    { country: "bz", currencyCode: "BZD", value: 2.016101 },
    { country: "ca", currencyCode: "CAD", value: 1.34745 },
    { country: "cd", currencyCode: "CDF", value: 2743.000362 },
    { country: "ch", currencyCode: "CHF", value: 0.867015 },
    { country: "cl", currencyCode: "CLF", value: 0.034356 },
    { country: "cl", currencyCode: "CLP", value: 938.774 },
    { country: "cn", currencyCode: "CNY", value: 7.122604 },
    { country: "co", currencyCode: "COP", value: 3933.5 },
    { country: "cr", currencyCode: "CRC", value: 519.824196 },
    { country: "cv", currencyCode: "CVE", value: 102.450394 },
    { country: "cz", currencyCode: "CZK", value: 23.119204 },
    { country: "dj", currencyCode: "DJF", value: 177.720697 },
    { country: "dk", currencyCode: "DKK", value: 6.909504 },
    { country: "do", currencyCode: "DOP", value: 58.940551 },
    { country: "dz", currencyCode: "DZD", value: 134.51804 },
    { country: "eg", currencyCode: "EGP", value: 30.847097 },
    { country: "er", currencyCode: "ERN", value: 15 },
    { country: "et", currencyCode: "ETB", value: 57.008466 },
    { country: "et", currencyCode: "ETH", value: 0.0004313622 },
    { country: "eu", currencyCode: "EUR", value: 0.92535 },
    { country: "fj", currencyCode: "FJD", value: 2.24975 },
    { country: "fk", currencyCode: "FKP", value: 0.792083 },
    { country: "gb", currencyCode: "GBP", value: 0.791578 },
    { country: "ge", currencyCode: "GEL", value: 2.66504 },
    { country: "gh", currencyCode: "GHS", value: 12.403858 },
    { country: "gi", currencyCode: "GIP", value: 0.792083 },
    { country: "gm", currencyCode: "GMD", value: 67.42502 },
    { country: "gn", currencyCode: "GNF", value: 8657.876475 },
    { country: "gt", currencyCode: "GTQ", value: 7.814273742 },
    { country: "gy", currencyCode: "GYD", value: 209.254239 },
    { country: "hk", currencyCode: "HKD", value: 7.82145 },
    { country: "hn", currencyCode: "HNL", value: 24.842933 },
    { country: "hr", currencyCode: "HRK", value: 6.88032 },
    { country: "ht", currencyCode: "HTG", value: 132.435808 },
    { country: "hu", currencyCode: "HUF", value: 356.010388 },
    { country: "id", currencyCode: "IDR", value: 15731.2 },
    { country: "il", currencyCode: "ILS", value: 3.65509 },
    { country: "in", currencyCode: "INR", value: 82.99955 },
    { country: "iq", currencyCode: "IQD", value: 1310 },
    { country: "ir", currencyCode: "IRR", value: 42050.000352 },
    { country: "is", currencyCode: "ISK", value: 137.480386 },
    { country: "jm", currencyCode: "JMD", value: 157.103863 },
    { country: "jo", currencyCode: "JOD", value: 0.709204 },
    { country: "jp", currencyCode: "JPY", value: 148.37504 },
    { country: "ke", currencyCode: "KES", value: 160.503804 },
    { country: "kg", currencyCode: "KGS", value: 89.3201925 },
    { country: "kh", currencyCode: "KHR", value: 4114.735138 },
    { country: "km", currencyCode: "KMF", value: 456.503796 },
    { country: "kr", currencyCode: "KRW", value: 1338.930384 },
    { country: "kw", currencyCode: "KWD", value: 0.3076008311 },
    { country: "ky", currencyCode: "KYD", value: 0.833529 },
    { country: "kz", currencyCode: "KZT", value: 452.193652 },
    { country: "la", currencyCode: "LAK", value: 20745.000349 },
    { country: "lb", currencyCode: "LBP", value: 15140.484217 },
    { country: "lk", currencyCode: "LKR", value: 312.083004 },
    { country: "lr", currencyCode: "LRD", value: 190.103775 },
    { country: "ls", currencyCode: "LSL", value: 18.603772 },
    { country: "ly", currencyCode: "LYD", value: 4.825039 },
    { country: "ma", currencyCode: "MAD", value: 10.041504 },
    { country: "md", currencyCode: "MDL", value: 17.803612 },
    { country: "mg", currencyCode: "MGA", value: 4551.468887 },
    { country: "mk", currencyCode: "MKD", value: 57.001612 },
    { country: "mm", currencyCode: "MMK", value: 2100.455362 },
    { country: "mn", currencyCode: "MNT", value: 3424.780963 },
    { country: "mo", currencyCode: "MOP", value: 8.055144 },
    { country: "mr", currencyCode: "MRO", value: 356.999828 },
    { country: "mu", currencyCode: "MUR", value: 46.104221 },
    { country: "mv", currencyCode: "MVR", value: 15.403741 },
    { country: "mw", currencyCode: "MWK", value: 1695.211659 },
    { country: "mx", currencyCode: "MXN", value: 17.131504 },
    { country: "my", currencyCode: "MYR", value: 4.717504 },
    { country: "mz", currencyCode: "MZN", value: 63.503732 },
    { country: "na", currencyCode: "NAD", value: 18.603729 },
    { country: "ng", currencyCode: "NGN", value: 1194.503727 },
    { country: "ni", currencyCode: "NIO", value: 36.909554 },
    { country: "no", currencyCode: "NOK", value: 10.54355 },
    { country: "np", currencyCode: "NPR", value: 133.563729 },
    { country: "nz", currencyCode: "NZD", value: 1.649349 },
    { country: "om", currencyCode: "OMR", value: 0.387786 },
    { country: "pa", currencyCode: "PAB", value: 1.000239 },
    { country: "pe", currencyCode: "PEN", value: 3.806039 },
    { country: "ph", currencyCode: "PHP", value: 56.164504 },
    { country: "pk", currencyCode: "PKR", value: 279.650375 },
    { country: "pl", currencyCode: "PLN", value: 3.999445 },
    { country: "py", currencyCode: "PYG", value: 7280.279742 },
    { country: "qa", currencyCode: "QAR", value: 3.641038 },
    { country: "ro", currencyCode: "RON", value: 4.607104 },
    { country: "rs", currencyCode: "RSD", value: 108.611038 },
    { country: "ru", currencyCode: "RUB", value: 91.005038 },
    { country: "rw", currencyCode: "RWF", value: 1279.759426 },
    { country: "sa", currencyCode: "SAR", value: 3.75011 },
    { country: "sc", currencyCode: "SCR", value: 13.512468 },
    { country: "sd", currencyCode: "SDG", value: 600.503678 },
    { country: "se", currencyCode: "SEK", value: 10.57593 },
    { country: "sg", currencyCode: "SGD", value: 1.344104 },
    { country: "sl", currencyCode: "SLL", value: 19750.000338 },
    { country: "so", currencyCode: "SOS", value: 571.000169 },
    { country: "sr", currencyCode: "SRD", value: 36.623504 },
    { country: "st", currencyCode: "STN", value: 22.6988991034 },
    { country: "sv", currencyCode: "SVC", value: 8.75 },
    { country: "sz", currencyCode: "SZL", value: 18.603655 },
    { country: "th", currencyCode: "THB", value: 35.44022 },
    { country: "tj", currencyCode: "TJS", value: 10.927312 },
    { country: "tm", currencyCode: "TMT", value: 3.51 },
    { country: "tn", currencyCode: "TND", value: 3.127038 },
    { country: "to", currencyCode: "TOP", value: 2.363704 },
    { country: "tr", currencyCode: "TRY", value: 30.501304 },
    { country: "tt", currencyCode: "TTD", value: 6.784941 },
    { country: "tw", currencyCode: "TWD", value: 31.390804 },
    { country: "tz", currencyCode: "TZS", value: 2542.771224 },
    { country: "ua", currencyCode: "UAH", value: 37.77969 },
    { country: "ug", currencyCode: "UGX", value: 3818.44248 },
    { country: "uy", currencyCode: "UYU", value: 39.185774 },
    { country: "uz", currencyCode: "UZS", value: 12450.0001675 },
    { country: "ve", currencyCode: "VES", value: 36.189934 },
    { country: "vn", currencyCode: "VND", value: 24350 },
    { country: "vu", currencyCode: "VUV", value: 120.011869 },
    { country: "cf", currencyCode: "XAF", value: 606.946102 },
    { country: "lc", currencyCode: "XCD", value: 2.70255 },
    { country: "bj", currencyCode: "XOF", value: 602.000332 },
    { country: "pf", currencyCode: "XPF", value: 111.050364 },
    { country: "rp", currencyCode: "XRP", value: 1.9162262607 },
    { country: "ye", currencyCode: "YER", value: 250.350364 },
    { country: "za", currencyCode: "ZAR", value: 18.90139 },
    { country: "zm", currencyCode: "ZMK", value: 9001.203591 },
    { country: "zm", currencyCode: "ZMW", value: 27.180995 },
  ]);

  React.useEffect(() => {
    fetch(
      `https://api.forexrateapi.com/v1/latest?api_key=06f2d61bdefdfcae6fe23458ea9bead3&base=${selectedOption}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setCurrency(data);
      })
      .catch((err) => console.error("Error during data fetching:", err));
  }, [selectedOption]);

  React.useEffect(() => {
    setData((prev) => {
      return prev.map((obj) => {
        return {
          ...obj, // Copy existing properties
          value: currency.rates[obj.currencyCode], // Update the 'value' property
        };
      });
    });
  }, [currency]);

  return (
    <section className={Styles.appbody}>
      <nav className={Styles.navbar}>currency exchange rate</nav>
      <section className={Styles.content}>
        <SvgWorldMap data={data} />
        <div className={Styles.currencyData}>
          <TopCurrencyCard
            // base={currency.base}
            currency={currency}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
          <div className={Styles.othersList}>
            <div className={Styles.listHead}>
              <span>symbols</span>
              <span>code</span>
              <span>value</span>
            </div>
            <div>
              {Object.keys(currency.rates).map((item, i) => {
                return (
                  <li className={Styles.otherCurrencySpan} key={i}>
                    <span>{getSymbolFromCurrency(item)}</span>
                    <span>{item}</span>
                    <span
                      style={{ textAlign: "right", color: "rgb(20,220, 0)" }}
                    >
                      {currency.rates[item].toFixed(5)}
                    </span>
                  </li>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Structure;

{
  /* <div style={{ width: "50", height: "50" }}>
        <VectorMap
          ref={mapRef}
          // zoomOnScroll={false}
          // zoomButtons={false}
          map={"world_mill"}
          backgroundColor="white"
          containerStyle={{
            width: "100%",
            height: "100%",
          }}
        //   markerStyle={{
        //     initial: {
        //       fill: "#5E32CA",
        //       stroke: "#383f47",
        //     },
        //   }}
        //   containerClassName="map"
        //   series={{
        //     regions: [
        //       {
        //         scale: ["#E2AEFF", "#5E32CA"],
        //         attribute: "fill",
        //         values: { SG: 100, IN: 100 },
        //         normalizeFunction: "polynomial",
        //         min: 0,
        //         max: 100,
        //       },
        //     ],
        //   }}
          // seri/
        //   markers={[
        //     {
        //       latLng: [1.3521, 103.8198],
        //       name: "Singapore",
        //     },
        //   ]}
          regionStyle={{
            initial: {
              fill: "#D1D5DB",
              "fill-opacity": 1,
              stroke: "#265cff",
              "stroke-width": 0,
              "stroke-opacity": 0,
            },
            hover: {
              "fill-opacity": 0.8,
              fill: "",
              stroke: "#2b2b2b",
            },
            selected: {
              fill: "#FFFB00",
            },
          }}
          // onMarkerTipShow={function (event, label, index) {
          //   label.html(
          //     '<div style="background-color: white; border: 1px solid; min-height: 100px; max-width: 250px">' +
          //       "<b style='color: red;'>" +
          //       "Rsc" +
          //       "</b><br/>" +
          //       "<b>Population:</b>" +
          //       "test" +
          //       "</br>" +
          //       "<b>Unemployment rate: </b>" +
          //       "kay" +
          //       "%" +
          //       "</div>"
          //   );
          // }}
          onRegionTipShow={function (event, label, code, ...props) {
            console.log("-----> ", label.html(), event, label, code, props);
            label.html(
              '<div style="background-color: white; border: 1px solid white; outline: 10px solid white; border-radius: 5px; min-height: 70px; width: 150px; color: black"; padding-left: 10px>' +
                "<p>" +
                "<b>" +
                label.html() +
                "</b>" +
                "</p>" +
                "<p>" +
                "Count: " +
                "<b> Count</b>" +
                "</p>" +
                "</div>"
            );
          }}
          regions={[
            {
              scale: {
                red: "#ff0000",
                green: "#00ff00"
              },
              attribute: "fill",
              values: {
                "US-KS": "red",
                "US-MO": "red",
                "US-IA": "green",
                "US-NE": "green"
              },
              legend: {
                horizontal: true,
                title: "Color"
              }
            }
          ]}
        />
      </div> */
}