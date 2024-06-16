import {Web3} from 'web3';
const Testing = () => {
    const web3 = new Web3('https://eth.llamarpc.com');
    web3.eth.getBlockNumber().then(console.log);
    //console.log(web3.eth.getBlockNumber());
    return(
        <div>hello world</div>
    )
}

export default Testing