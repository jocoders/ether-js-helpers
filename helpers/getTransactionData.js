const { ethers, keccak256, Signature } = require("ethers"); // Import Signature

const DATA = {
  main: {
    title: 'Mainnet',
    provider: new ethers.JsonRpcProvider('https://mainnet.infura.io/v3/YOUR_PRIVATE_KEY'),
    txHash: '0x480df4e08d527bd9c351a3ec2de4ff3e873c3e7d2e80b518fe276c41a7558ce8',
  },
  polygon: {
    title: 'Polygon',
    provider: new ethers.JsonRpcProvider('https://polygon-mainnet.infura.io/v3/YOUR_PRIVATE_KEY'),
    txHash: '0x09281ab72c20092dc9b414745ef2673116e36dfe069b61d2e37ecb8815b140bf',
  },
  optimism: {
    title: 'Optimism',
    provider: new ethers.JsonRpcProvider('https://optimism-mainnet.infura.io/v3/YOUR_PRIVATE_KEY'),
    txHash: '0x6b89b81fe59c34ece8221c02d6125812e07935d33f781170d52233b3aedf2b01',
  }
}

const getTransactionData = async (data) => {
  const tx = await data.provider.getTransaction(data.txHash)
  console.log(`Transaction from ${data.title}:\n`, tx)
  return tx;
}

// const mainTx = getTransactionData(DATA.main)
const polygonTx = getTransactionData(DATA.polygon)
// const optimismTx = getTransactionData(DATA.optimism)


