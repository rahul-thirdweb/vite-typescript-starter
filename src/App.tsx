import { ConnectWallet, Web3Button, darkTheme } from "@thirdweb-dev/react";
import { Analytics } from '@vercel/analytics/react';

import "./styles/Home.css";

export default function Home() {
  return (
    <main className="main">
      <Analytics />
      <div className="connect">
        {/* <p> wide modal </p> */}
        <ConnectWallet
          modalSize="wide"
          dropdownPosition={{
            side: "bottom",
            align: "center",
          }}
        />
        


        {/* {spacer} */}

        {/* <p> compact modal </p>
        <ConnectWallet
          modalSize="compact"
          dropdownPosition={{
            side: "bottom",
            align: "center",
          }}
        /> */}

        {/*

        {spacer}

        <p> custom theme </p>
        <ConnectWallet
          modalSize="wide"
          theme={darkTheme({
            colors: {
              dropdownBg: "black",
              modalBg: "black",
              walletSelectorButtonHoverBg: "#111",
              accentText: "#8a63d2",
              accentButtonBg: "#7928ca",
              accentButtonText: "white",
              danger: "red",
              connectedButtonBg: "black",
              connectedButtonBgHover: "#111",
            },
          })}
          dropdownPosition={{
            side: "bottom",
            align: "center",
          }}
        />

        {spacer}

        <p> custom welcome screen </p>
        <ConnectWallet
          modalSize="wide"
          theme={darkTheme({
            colors: {
              dropdownBg: "black",
              modalBg: "black",
              walletSelectorButtonHoverBg: "#111",
              accentText: "red",
              accentButtonBg: "#e60000",
              accentButtonText: "white",
              danger: "red",
              connectedButtonBg: "black",
              connectedButtonBgHover: "#111",
            },
          })}
          welcomeScreen={() => {
            return (
              <div
                style={{
                  height: "100%",
                  backgroundSize: "cover",
                  backgroundImage: `url("https://mir-s3-cdn-cf.behance.net/project_modules/disp/11924d162633027.63d907d8427ab.jpg")`,
                }}
              ></div>
            );
          }}
          dropdownPosition={{
            side: "bottom",
            align: "center",
          }}
        />

        {spacer}
        <p> web3button with custom ConnectWallet </p>
        <Web3Button
          theme={darkTheme({
            colors: {
              primaryButtonBg: "orange",
              primaryButtonText: "black",
              primaryText: "white",
              modalBg: "black",
              accentText: "orange",
              accentButtonBg: "red",
            },
          })}
          action={async (contract) => {
            await contract.erc1155.claim(0, 1);
          }}
          connectWallet={{
            modalSize: "compact",
            modalTitle: "Login",
            btnTitle: "Claim NFT",
          }}
          contractAddress="0x88f54479F9DB46c2d97823D01CC316aa88B54a33"
          onError={(e) => {
            alert(e.message);
          }}
          onSuccess={() => {
            alert("Success");
          }}
        >
          Claim NFT
        </Web3Button> */}
      </div>
    </main>
  );
}

const spacer = (
  <div
    style={{
      height: "40px",
    }}
  />
);
