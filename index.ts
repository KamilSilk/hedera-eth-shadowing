import {ethers} from 'ethers';

const token = '0xb9d4ad5408f53eac8627f9ccd840ba8fb3469d55cd9cc2a11c6e049f1eef4edd';
const provider = new ethers.providers.JsonRpcProvider('https://eth-mainnet.g.alchemy.com/v2/oumTrDBCEuziGeR4oH3_owM04I6qTMKd');

const serializeTransaction = async (transactionToken: string) => {
    const transaction = await provider.getTransaction(transactionToken);

    console.log({transaction})

    if (!transaction) {
        throw new Error('Transaction not found');
    }

    const unsignedTx = {
        to: transaction.to,
        nonce: transaction.nonce,
        gasLimit: transaction.gasLimit,
        gasPrice: transaction.gasPrice,
        data: transaction.data,
        value: transaction.value,
        chainId: transaction.chainId,
    };

    const signature = {
        v: transaction.v,
        r: transaction.r,
        s: transaction.s,
    }

    console.log(signature);

    return ethers.utils.serializeTransaction(unsignedTx);
};

serializeTransaction(token)
    .then((serialized) => console.log('Transaction serialized:', serialized))
    .catch((error) => console.error('Error serializing transaction:', error));
