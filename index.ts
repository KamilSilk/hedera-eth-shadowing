import {ethers} from 'ethers';

const token = '0xb9d4ad5408f53eac8627f9ccd840ba8fb3469d55cd9cc2a11c6e049f1eef4edd'


const provider = new ethers.providers.JsonRpcProvider('https://eth-mainnet.g.alchemy.com/v2/oumTrDBCEuziGeR4oH3_owM04I6qTMKd');

const serializeTransaction = async (transactionToken: string) => {
    return await provider.getTransaction(transactionToken)
}

try {
    serializeTransaction(token).then((data) => {
        console.log('data', data);
    }).catch(error => {
        console.log(error)
    })
} finally {
    console.log('success')
}
