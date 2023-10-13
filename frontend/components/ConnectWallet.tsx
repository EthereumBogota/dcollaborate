import PropTypes from 'prop-types';
import Link from "next/link";
import Container from "./Container";

const ConnectWallet = (props) => {
    return (
        <Container className={`flex w-full flex-col mt-4 ${
            props.align === "left" ? "" : "items-center justify-center text-center"
        }`}>
            <Link href="/" className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5"
                onClick={props.handleClick}
            >
              Connect Wallet
            </Link>
        </Container>
    );
}

ConnectWallet.propTypes = {
    /** The handle to connect a wallet**/
    handleClick : PropTypes.func.isRequired,
};


export default ConnectWallet;
