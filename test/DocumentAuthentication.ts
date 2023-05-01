import { ethers } from "hardhat";

describe("Document Authentication", function () {
  describe("Document Authentication", function () {
    it("should be able to create a new document authenticated", async function () {
      const Document = await ethers.getContractFactory("DocumentAuthentication")
      const document = await Document.deploy();
      await document.deployed();
      
      const hash = 'f2d81a260dea8a100dd517984e53c56a7523d96942a834b9cdc249bd4e8c7aa9';
      const encodedHash = Buffer.from(hash, 'hex');

      await document.storeHash(`0x${hash.toString()}`);

      console.log('passei')


      const isHashStored = await document.verifyHash(encodedHash);

      console.log(isHashStored, 'Documento autenticado com sucesso, e validado na blockchain')
    })
  });
})