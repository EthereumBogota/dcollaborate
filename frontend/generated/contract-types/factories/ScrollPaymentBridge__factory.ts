/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ScrollPaymentBridge,
  ScrollPaymentBridgeInterface,
} from "../ScrollPaymentBridge";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "scrollBrige",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "gasLimit",
        type: "uint256",
      },
    ],
    name: "depositETHToScroll",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061010d806100206000396000f3fe60806040526004361061001e5760003560e01c8063ca7d00e414610023575b600080fd5b6100366100313660046100c8565b610038565b005b6040517fce0b63ce0000000000000000000000000000000000000000000000000000000081523360048201523460248201526044810182905273ffffffffffffffffffffffffffffffffffffffff83169063ce0b63ce90606401600060405180830381600087803b1580156100ac57600080fd5b505af11580156100c0573d6000803e3d6000fd5b505050505050565b600080604083850312156100db57600080fd5b823573ffffffffffffffffffffffffffffffffffffffff811681146100ff57600080fd5b94602093909301359350505056";

type ScrollPaymentBridgeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ScrollPaymentBridgeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ScrollPaymentBridge__factory extends ContractFactory {
  constructor(...args: ScrollPaymentBridgeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<ScrollPaymentBridge> {
    return super.deploy(overrides || {}) as Promise<ScrollPaymentBridge>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ScrollPaymentBridge {
    return super.attach(address) as ScrollPaymentBridge;
  }
  override connect(signer: Signer): ScrollPaymentBridge__factory {
    return super.connect(signer) as ScrollPaymentBridge__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ScrollPaymentBridgeInterface {
    return new utils.Interface(_abi) as ScrollPaymentBridgeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ScrollPaymentBridge {
    return new Contract(address, _abi, signerOrProvider) as ScrollPaymentBridge;
  }
}
