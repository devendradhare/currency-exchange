import React from "react";
import getSymbolFromCurrency from "currency-symbol-map";

import Select from "react-select";

// CSS
import Styles from "./topCurrencyCard.module.css";

const FavouriteCard = ({ currency, show, country }) => {
  return (
    <div className={`${Styles.favouriteCard}`}>
      <div>
        <span>{show}</span>
        <span className={Styles.currencySymbol2}>
          {getSymbolFromCurrency(show)}
          {currency.rates[show] || 1}
        </span>
      </div>
      <span>{country}</span>
    </div>
  );
};

const TopCurrencyCard = (props) => {
  console.log("selectedOption", props.selectedOption);
  const options = [
    { value: "USD", label: "USD" },
    { value: "AED", label: "AED" },
    { value: "AFN", label: "AFN" },
    { value: "ALL", label: "ALL" },
    { value: "AMD", label: "AMD" },
    { value: "ANG", label: "ANG" },
    { value: "AOA", label: "AOA" },
    { value: "ARS", label: "ARS" },
    { value: "AUD", label: "AUD" },
    { value: "AZN", label: "AZN" },
    { value: "BAM", label: "BAM" },
    { value: "BBD", label: "BBD" },
    { value: "BDT", label: "BDT" },
    { value: "BGN", label: "BGN" },
    { value: "BHD", label: "BHD" },
    { value: "BIF", label: "BIF" },
    { value: "BND", label: "BND" },
    { value: "BOB", label: "BOB" },
    { value: "BRL", label: "BRL" },
    { value: "BSD", label: "BSD" },
    { value: "BTC", label: "BTC" },
    { value: "BTN", label: "BTN" },
    { value: "BYN", label: "BYN" },
    { value: "BZD", label: "BZD" },
    { value: "CAD", label: "CAD" },
    { value: "CDF", label: "CDF" },
    { value: "CHF", label: "CHF" },
    { value: "CLF", label: "CLF" },
    { value: "CLP", label: "CLP" },
    { value: "CNY", label: "CNY" },
    { value: "COP", label: "COP" },
    { value: "CRC", label: "CRC" },
    { value: "CVE", label: "CVE" },
    { value: "CZK", label: "CZK" },
    { value: "DJF", label: "DJF" },
    { value: "DKK", label: "DKK" },
    { value: "DOP", label: "DOP" },
    { value: "DZD", label: "DZD" },
    { value: "EGP", label: "EGP" },
    { value: "ERN", label: "ERN" },
    { value: "ETB", label: "ETB" },
    { value: "ETH", label: "ETH" },
    { value: "EUR", label: "EUR" },
    { value: "FJD", label: "FJD" },
    { value: "FKP", label: "FKP" },
    { value: "GBP", label: "GBP" },
    { value: "GEL", label: "GEL" },
    { value: "GHS", label: "GHS" },
    { value: "GIP", label: "GIP" },
    { value: "GMD", label: "GMD" },
    { value: "GNF", label: "GNF" },
    { value: "GTQ", label: "GTQ" },
    { value: "GYD", label: "GYD" },
    { value: "HKD", label: "HKD" },
    { value: "HNL", label: "HNL" },
    { value: "HRK", label: "HRK" },
    { value: "HTG", label: "HTG" },
    { value: "HUF", label: "HUF" },
    { value: "IDR", label: "IDR" },
    { value: "ILS", label: "ILS" },
    { value: "INR", label: "INR" },
    { value: "IQD", label: "IQD" },
    { value: "IRR", label: "IRR" },
    { value: "ISK", label: "ISK" },
    { value: "JMD", label: "JMD" },
    { value: "JOD", label: "JOD" },
    { value: "JPY", label: "JPY" },
    { value: "KES", label: "KES" },
    { value: "KGS", label: "KGS" },
    { value: "KHR", label: "KHR" },
    { value: "KMF", label: "KMF" },
    { value: "KRW", label: "KRW" },
    { value: "KWD", label: "KWD" },
    { value: "KYD", label: "KYD" },
    { value: "KZT", label: "KZT" },
    { value: "LAK", label: "LAK" },
    { value: "LBP", label: "LBP" },
    { value: "LKR", label: "LKR" },
    { value: "LRD", label: "LRD" },
    { value: "LSL", label: "LSL" },
    { value: "LYD", label: "LYD" },
    { value: "MAD", label: "MAD" },
    { value: "MDL", label: "MDL" },
    { value: "MGA", label: "MGA" },
    { value: "MKD", label: "MKD" },
    { value: "MMK", label: "MMK" },
    { value: "MNT", label: "MNT" },
    { value: "MOP", label: "MOP" },
    { value: "MRO", label: "MRO" },
    { value: "MUR", label: "MUR" },
    { value: "MVR", label: "MVR" },
    { value: "MWK", label: "MWK" },
    { value: "MXN", label: "MXN" },
    { value: "MYR", label: "MYR" },
    { value: "MZN", label: "MZN" },
    { value: "NAD", label: "NAD" },
    { value: "NGN", label: "NGN" },
    { value: "NIO", label: "NIO" },
    { value: "NOK", label: "NOK" },
    { value: "NPR", label: "NPR" },
    { value: "NZD", label: "NZD" },
    { value: "OMR", label: "OMR" },
    { value: "PAB", label: "PAB" },
    { value: "PEN", label: "PEN" },
    { value: "PHP", label: "PHP" },
    { value: "PKR", label: "PKR" },
    { value: "PLN", label: "PLN" },
    { value: "PYG", label: "PYG" },
    { value: "QAR", label: "QAR" },
    { value: "RON", label: "RON" },
    { value: "RSD", label: "RSD" },
    { value: "RUB", label: "RUB" },
    { value: "RWF", label: "RWF" },
    { value: "SAR", label: "SAR" },
    { value: "SCR", label: "SCR" },
    { value: "SDG", label: "SDG" },
    { value: "SEK", label: "SEK" },
    { value: "SGD", label: "SGD" },
    { value: "SLL", label: "SLL" },
    { value: "SOS", label: "SOS" },
    { value: "SRD", label: "SRD" },
    { value: "STN", label: "STN" },
    { value: "SVC", label: "SVC" },
    { value: "SZL", label: "SZL" },
    { value: "THB", label: "THB" },
    { value: "TJS", label: "TJS" },
    { value: "TMT", label: "TMT" },
    { value: "TND", label: "TND" },
    { value: "TOP", label: "TOP" },
    { value: "TRY", label: "TRY" },
    { value: "TTD", label: "TTD" },
    { value: "TWD", label: "TWD" },
    { value: "TZS", label: "TZS" },
    { value: "UAH", label: "UAH" },
    { value: "UGX", label: "UGX" },
    { value: "UYU", label: "UYU" },
    { value: "UZS", label: "UZS" },
    { value: "VES", label: "VES" },
    { value: "VND", label: "VND" },
    { value: "VUV", label: "VUV" },
    { value: "XAF", label: "XAF" },
    { value: "XCD", label: "XCD" },
    { value: "XOF", label: "XOF" },
    { value: "XPF", label: "XPF" },
    { value: "XRP", label: "XRP" },
    { value: "YER", label: "YER" },
    { value: "ZAR", label: "ZAR" },
    { value: "ZMK", label: "ZMK" },
    { value: "ZMW", label: "ZMW" },
  ];

  return (
    <div className={Styles.topCards}>
      <div className={Styles.baseCard}>
        <span>
          <h3>Base currency</h3>
        </span>
        <span style={{ color: "black" }}>
          <Select
            defaultValue={props.selectedOption}
            onChange={(e) => props.setSelectedOption(e.value)}
            options={options}
          />
          <span style={{ color: "white", fontWeight: "bold", margin: "10px" }}>
            {props.selectedOption}
          </span>
        </span>
        <span className={Styles.currencySymbol}>
          {getSymbolFromCurrency(props.currency.base)}1.00
        </span>
      </div>

      <div className={Styles.favouriteCards}>
        <FavouriteCard currency={props.currency} show={"INR"} country={"INDIA"} />
        <FavouriteCard currency={props.currency} show={"JPY"} country={"JAPAN"} />
        <FavouriteCard currency={props.currency} show={"USD"} country={"UNITED STATE"} />
        <FavouriteCard currency={props.currency} show={"RUB"} country={"RUSSIA"} />
        <FavouriteCard currency={props.currency} show={"BTC"} country={"BITCOIN"} />
        <FavouriteCard currency={props.currency} show={"ETH"} country={"ETHEREUM"} />
      </div>
    </div>
  );
};

export default TopCurrencyCard;
