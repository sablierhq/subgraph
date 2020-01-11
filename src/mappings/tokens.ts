import { Token } from "../types/schema";

export function addToken(address: string): void {
  let token = Token.load(address);
  if (token != null) {
    return;
  }

  /* Mainnet */
  token = new Token(address);
  if (address == "0x06af07097c9eeb7fd685c692751d5c66db49c215") {
    token.decimals = 18;
    token.name = "Chai";
    token.symbol = "CHAI";
  } else if (address == "0x5d3a536e4d6dbd6114cc1ead35777bab948e3643") {
    token.decimals = 8;
    token.name = "Compound Dai";
    token.symbol = "cDAI";
  } else if (address == "0x39aa39c021dfbae8fac545936693ac917d5e7563") {
    token.decimals = 8;
    token.name = "Compound USD Coin";
    token.symbol = "cUSDC";
  } else if (address == "0x6b175474e89094c44da98b954eedeac495271d0f") {
    token.decimals = 18;
    token.name = "Dai Stablecoin";
    token.symbol = "DAI";
  } else if (address == "0x2f141ce366a2462f02cea3d12cf93e4dca49e4fd") {
    token.decimals = 18;
    token.name = "Free Coin";
    token.symbol = "FREE";
  } else if (address == "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359") {
    token.decimals = 18;
    token.name = "Sai Stablecoin v1.0";
    token.symbol = "SAI";
  } else if (address == "0x67ab11058ef23d0a19178f61a050d3c38f81ae21") {
    token.decimals = 18;
    token.name = "Self Token";
    token.symbol = "SELF";
  } else if (address == "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48") {
    token.decimals = 6;
    token.name = "USD Coin";
    token.symbol = "USDC";
  } else {
    token.decimals = 0;
    token.name = null;
    token.symbol = null;
  }

  // 0x06af07097c9eeb7fd685c692751d5c66db49c215

  /* Testnets */
  if (
    address == "0xf2d1f94310823fe26cfa9c9b6fd152834b8e7849" /* Goerli */ ||
    address == "0x7d669a64deb8a4a51eea755bb0e19fd39ce25ae9" /* Kovan */ ||
    address == "0xc3dbf84abb494ce5199d5d4d815b10ec29529ff8" /* Rinkeby */ ||
    address == "0x2d69ad895797c880abce92437788047ba0eb7ff6" /* Ropsten */
  ) {
    token.decimals = 18;
    token.name = "TestnetDAI";
    token.symbol = "DAI";
  }

  token.save();
}
