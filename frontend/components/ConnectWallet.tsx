import PropTypes from 'prop-types'
import Link from 'next/link'
import Container from './Container'

const ConnectWallet = (props:any) => {
    return (
        <Container className={`flex w-full flex-col mt-4 ${
            props.align === "left" ? "" : "items-center justify-center text-center"
        }`}>
           {/** show the connect wallet button just if is not connect **/}
           {!props.address &&
            <Link href="/" className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5"
                onClick={props.handleClick}
            >
              Connect Wallet
            </Link>
           } 

            <div className="ml-2 flex flex-col">
                <div className="leading-snug text-xs text-gray-600">{props.address}</div>
                <div className="leading-snug text-sm text-gray-600">{props.balance}</div>
            </div>
        </Container>
    );
}

ConnectWallet.propTypes = {
    /** The handle to connect a wallet**/
    handleClick : PropTypes.func.isRequired,
};


export default ConnectWallet;

