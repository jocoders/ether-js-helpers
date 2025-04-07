const { hexlify } = require("@ethersproject/bytes");
const { encode } = require("@ethersproject/rlp");
const { ethers, keccak256, Signature } = require("ethers");

const verifySignature = (rawHash, signature) => {
  try {
    const signerAddress = ethers.recoverAddress(rawHash, {
      r: signature.r,
      s: signature.s,
      yParity: signature.v === 27 ? 0 : 1, // Compute yParity from v
    });
    console.log("Signer Address:", signerAddress);
  } catch (error) {
    console.error("Error recovering signer address:", error);
  }
}

const tx = {
  chainId: hexlify(137),
  nonce: hexlify(36),
  maxPriorityFeePerGas: hexlify(30000000000n),
  maxFeePerGas: hexlify(274339627046n),
  gasLimit: hexlify(21000n),
  to: "0x0000000cCC7439F4972897cCd70994123e0921bC",
  value: hexlify(1000000000000000000n),
  data: "0x",
  accessList: []
};

const rawTx = [
  tx.chainId,
  tx.nonce,
  tx.maxPriorityFeePerGas,
  tx.maxFeePerGas,
  tx.gasLimit,
  tx.to,
  tx.value,
  tx.data,
  tx.accessList
];

const typeByte = "0x02"; // Tx type
const rawTxEncoded = typeByte + encode(rawTx).substring(2);
const rawHash = keccak256(rawTxEncoded);

const signature = {
  r: "0x9ef4899e556330b0c4e764d90b7a4c864ef03ba9725aa694ac67783bcf004aa0",
  s: "0x0c01b87088c349649c938589f7b9f633f28ada510ee3e57d2d559fb8fc9da10e",
  v: 28 // Расшифровка yParity: 1 = 28
};

verifySignature(rawHash, signature);




