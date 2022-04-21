const { ethers } = require("hardhat");

async function main() {
   // Grab the contract factory 
  //  const MyNFT = await ethers.getContractFactory("ERC721A");
   const IDEOToken = await ethers.getContractFactory("IDEO");

   // Start deployment, returning a promise that resolves to a contract object
   // first test contract works on ERC721A deployment
  //  const myNFT = await MyNFT.deploy("Founders Pass","IDEO"); // Instance of the contract 
  //  console.log("Contract deployed to address:", myNFT.address);

      // Launch unrevealed IDEOtoken contract
      // constructor(
      //   string memory _tokenName,
      //   string memory _tokenSymbol,
      //   uint256 _cost,
      //   uint256 _maxSupply,
      //   uint256 _maxMintAmountPerTx,
      //   string memory _hiddenMetadataUri
      // ) ERC721A(_tokenName, _tokenSymbol) {
      //   setCost(_cost);
      //   maxSupply = _maxSupply;
      //   setMaxMintAmountPerTx(_maxMintAmountPerTx);
      //   setHiddenMetadataUri(_hiddenMetadataUri);
      // }
      const myIDEO = await IDEOToken.deploy(
        "IDEO",
        "IDEO",
        "todo"
         )


// Instance of the contract 
      console.log("Contract deployed to address:", IDEOToken.merkleRoot);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });