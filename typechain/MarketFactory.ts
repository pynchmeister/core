/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Market } from "./Market";

export class MarketFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<Market> {
    return super.deploy(overrides || {}) as Promise<Market>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Market {
    return super.attach(address) as Market;
  }
  connect(signer: Signer): MarketFactory {
    return super.connect(signer) as MarketFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Market {
    return new Contract(address, _abi, signerOrProvider) as Market;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "currency",
            type: "address",
          },
        ],
        indexed: false,
        internalType: "struct IMarket.Ask",
        name: "ask",
        type: "tuple",
      },
    ],
    name: "AskCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "currency",
            type: "address",
          },
        ],
        indexed: false,
        internalType: "struct IMarket.Ask",
        name: "ask",
        type: "tuple",
      },
    ],
    name: "AskRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "currency",
            type: "address",
          },
          {
            internalType: "address",
            name: "bidder",
            type: "address",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct Decimal.D256",
            name: "sellOnShare",
            type: "tuple",
          },
        ],
        indexed: false,
        internalType: "struct IMarket.Bid",
        name: "bid",
        type: "tuple",
      },
    ],
    name: "BidCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "currency",
            type: "address",
          },
          {
            internalType: "address",
            name: "bidder",
            type: "address",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct Decimal.D256",
            name: "sellOnShare",
            type: "tuple",
          },
        ],
        indexed: false,
        internalType: "struct IMarket.Bid",
        name: "bid",
        type: "tuple",
      },
    ],
    name: "BidFinalized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "currency",
            type: "address",
          },
          {
            internalType: "address",
            name: "bidder",
            type: "address",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct Decimal.D256",
            name: "sellOnShare",
            type: "tuple",
          },
        ],
        indexed: false,
        internalType: "struct IMarket.Bid",
        name: "bid",
        type: "tuple",
      },
    ],
    name: "BidRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct Decimal.D256",
            name: "prevOwner",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct Decimal.D256",
            name: "creator",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct Decimal.D256",
            name: "owner",
            type: "tuple",
          },
        ],
        indexed: false,
        internalType: "struct IMarket.BidShares",
        name: "bidShares",
        type: "tuple",
      },
    ],
    name: "BidShareUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "currency",
            type: "address",
          },
          {
            internalType: "address",
            name: "bidder",
            type: "address",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct Decimal.D256",
            name: "sellOnShare",
            type: "tuple",
          },
        ],
        internalType: "struct IMarket.Bid",
        name: "expectedBid",
        type: "tuple",
      },
    ],
    name: "acceptBid",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "bidder",
        type: "address",
      },
    ],
    name: "bidForTokenBidder",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "currency",
            type: "address",
          },
          {
            internalType: "address",
            name: "bidder",
            type: "address",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct Decimal.D256",
            name: "sellOnShare",
            type: "tuple",
          },
        ],
        internalType: "struct IMarket.Bid",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "bidSharesForToken",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct Decimal.D256",
            name: "prevOwner",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct Decimal.D256",
            name: "creator",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct Decimal.D256",
            name: "owner",
            type: "tuple",
          },
        ],
        internalType: "struct IMarket.BidShares",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "mediaContractAddress",
        type: "address",
      },
    ],
    name: "configure",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "currentAskForToken",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "currency",
            type: "address",
          },
        ],
        internalType: "struct IMarket.Ask",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "bidAmount",
        type: "uint256",
      },
    ],
    name: "isValidBid",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct Decimal.D256",
            name: "prevOwner",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct Decimal.D256",
            name: "creator",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct Decimal.D256",
            name: "owner",
            type: "tuple",
          },
        ],
        internalType: "struct IMarket.BidShares",
        name: "bidShares",
        type: "tuple",
      },
    ],
    name: "isValidBidShares",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "mediaContract",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "removeAsk",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "bidder",
        type: "address",
      },
    ],
    name: "removeBid",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "currency",
            type: "address",
          },
        ],
        internalType: "struct IMarket.Ask",
        name: "ask",
        type: "tuple",
      },
    ],
    name: "setAsk",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "currency",
            type: "address",
          },
          {
            internalType: "address",
            name: "bidder",
            type: "address",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct Decimal.D256",
            name: "sellOnShare",
            type: "tuple",
          },
        ],
        internalType: "struct IMarket.Bid",
        name: "bid",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "setBid",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct Decimal.D256",
            name: "prevOwner",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct Decimal.D256",
            name: "creator",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct Decimal.D256",
            name: "owner",
            type: "tuple",
          },
        ],
        internalType: "struct IMarket.BidShares",
        name: "bidShares",
        type: "tuple",
      },
    ],
    name: "setBidShares",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        internalType: "struct Decimal.D256",
        name: "sharePercentage",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "splitShare",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600180546001600160a01b03191633179055612096806100326000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063776a08351161008c578063ba33939911610066578063ba339399146101ee578063bdb5869814610201578063eb55683a14610214578063f9ce058214610227576100ea565b8063776a08351461019b578063ad827dc4146101ae578063b920c123146101ce576100ea565b80634e21f9c0116100c85780634e21f9c014610140578063578064f61461015557806362f24b701461017557806375cb267214610188576100ea565b806302e8fe13146100ef57806328220f3514610118578063360636eb1461012d575b600080fd5b6101026100fd366004611883565b610247565b60405161010f9190611911565b60405180910390f35b61012b6101263660046116c8565b6102dd565b005b61010261013b366004611683565b610375565b6101486103bb565b60405161010f91906118c0565b6101686101633660046116c8565b6103ca565b60405161010f9190611eca565b61012b610183366004611727565b610405565b61012b61019636600461162b565b6104d1565b61012b6101a93660046116f8565b61056c565b6101c16101bc3660046116f8565b610692565b60405161010f9190611f4b565b6101e16101dc36600461169e565b610708565b60405161010f9190611fd5565b61012b6101fc3660046117ab565b61072c565b61012b61020f3660046117e1565b6108d7565b61012b61022236600461177f565b610d29565b61023a6102353660046116c8565b610dd4565b60405161010f9190611f08565b6000610251611511565b61025a84610dd4565b905061026581610375565b61028a5760405162461bcd60e51b815260040161028190611d34565b60405180910390fd5b82158015906102d357506102d06102a5826040015185610708565b6102c46102b6846000015187610708565b6102c4856020015188610708565b9063ffffffff610e2a16565b83145b9150505b92915050565b6000546001600160a01b031633146103075760405162461bcd60e51b815260040161028190611cae565b807fbf58f6d6c7d7c6efc69e7444efa93ed26d7cdc0e82e12a37df96f36a367561df600460008481526020019081526020016000206040516103499190611eea565b60405180910390a2600090815260046020526040812090815560010180546001600160a01b0319169055565b60006103906064670de0b6b3a764000063ffffffff610e4f16565b8251516040840151516020850151516103b492916102c4919063ffffffff610e2a16565b1492915050565b6000546001600160a01b031681565b6103d2611543565b50600090815260046020908152604091829020825180840190935280548352600101546001600160a01b03169082015290565b6000546001600160a01b0316331461042f5760405162461bcd60e51b815260040161028190611cae565b61043d828260000151610247565b6104595760405162461bcd60e51b815260040161028190611a6b565b6000828152600460209081526040918290208351815590830151600190910180546001600160a01b0319166001600160a01b039092169190911790555182907ff7347cb9e91d8cbe995b51920ba5f92cbf84a9e09cbed3cd7a739fef4d1d07cf906104c5908490611eca565b60405180910390a25050565b6001546001600160a01b031633146104fb5760405162461bcd60e51b815260040161028190611c0a565b6000546001600160a01b0316156105245760405162461bcd60e51b815260040161028190611daf565b6001600160a01b03811661054a5760405162461bcd60e51b815260040161028190611e79565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031633146105965760405162461bcd60e51b815260040161028190611cae565b60008281526002602090815260408083206001600160a01b0380861685529252909120805460018201549192909116816105e25760405162461bcd60e51b815260040161028190611ae9565b6000819050857fcbebd567b8a5c57f63ec61dc46746aab28daff6bdd1f4a6a0a305c17fa5465c9856040516106179190611f94565b60405180910390a260008681526002602081815260408084206001600160a01b03808b168652925283208381556001810180546001600160a01b031990811690915592810180548416905560038101805490931690925560049091019190915561068a908216868563ffffffff610e8916565b505050505050565b61069a61155a565b5060009182526002602081815260408085206001600160a01b039485168652825293849020845160a081018652815481526001820154851681840152928101548416838601526003810154909316606083015283519081019093526004909101548252608081019190915290565b600061072560646107198486610edf565b9063ffffffff610ef816565b9392505050565b6000546001600160a01b031633146107565760405162461bcd60e51b815260040161028190611cae565b61075e61155a565b600083815260026020526040808220919061077f906060860190860161162b565b6001600160a01b0390811682526020808301939093526040918201600020825160a08101845281548152600182015483168186015260028201548316818501526003820154909216606083015282519384019092526004909101548252608081019190915280519091506108055760405162461bcd60e51b815260040161028190611bd3565b8051823514801561083a5750610821604083016020840161162b565b6001600160a01b031681602001516001600160a01b0316145b801561084e57506080818101515190830135145b801561087e5750610865608083016060840161162b565b6001600160a01b031681606001516001600160a01b0316145b61089a5760405162461bcd60e51b815260040161028190611c77565b6108a8838260000151610247565b6108c45760405162461bcd60e51b8152600401610281906119e2565b6108d2838260400151610f2a565b505050565b6000546001600160a01b031633146109015760405162461bcd60e51b815260040161028190611cae565b610909611511565b50600083815260036020908152604091829020825160808101845281546060820190815281528351808401855260018301548152818401528351928301845260029091015482529182015261096d6064670de0b6b3a764000063ffffffff610e4f16565b6080840151516020830151516109889163ffffffff610e2a16565b11156109a65760405162461bcd60e51b815260040161028190611ce5565b60408301516001600160a01b03166109d05760405162461bcd60e51b815260040161028190611a29565b82516109ee5760405162461bcd60e51b815260040161028190611b9c565b60208301516001600160a01b0316610a185760405162461bcd60e51b81526004016102819061199a565b60608301516001600160a01b0316610a425760405162461bcd60e51b815260040161028190611de6565b6000848152600260209081526040808320868201516001600160a01b031684529091529020805415610a7c57610a7c85856040015161056c565b60208401516040516370a0823160e01b81526000906001600160a01b038316906370a0823190610ab09030906004016118c0565b60206040518083038186803b158015610ac857600080fd5b505afa158015610adc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b0091906116e0565b8651909150610b23906001600160a01b038416908790309063ffffffff61132c16565b6040516370a0823160e01b81526000906001600160a01b038416906370a0823190610b529030906004016118c0565b60206040518083038186803b158015610b6a57600080fd5b505afa158015610b7e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ba291906116e0565b90506040518060a00160405280610bc2848461135390919063ffffffff16565b81526020898101516001600160a01b03908116828401526040808c0180518316828601526060808e01518416818701526080808f01519681019690965260008f8152600280875284822093518616825292865283902087518155948701516001860180549186166001600160a01b031992831617905587840151928601805493861693821693909317909255860151600385018054919094169116179091559290910151516004909101555188907f327bc9021bfbee403a11b13dd6c819999006aff090cc129f07e9f2840af38dd590610c9d908a90611f4b565b60405180910390a26000888152600460205260409020600101546001600160a01b031615801590610cf15750600088815260046020908152604090912060010154908801516001600160a01b039081169116145b8015610d0c5750600088815260046020526040902054875110155b15610d1f57610d1f888860400151610f2a565b5050505050505050565b6000546001600160a01b03163314610d535760405162461bcd60e51b815260040161028190611cae565b610d5c81610375565b610d785760405162461bcd60e51b81526004016102819061194f565b60008281526003602090815260409182902083515181559083015151600182015581830151516002909101555182907fdb88d4e96cb8697aaee5e575ee5f460817709a1dfcfbf7ba15192e90b5c86f9f906104c5908490611f08565b610ddc611511565b50600090815260036020908152604091829020825160808101845281546060820190815281528351808401855260018301548152818401528351928301845260029091015482529182015290565b6000828201838110156107255760405162461bcd60e51b815260040161028190611ab2565b600082610e5e575060006102d7565b82820282848281610e6b57fe5b04146107255760405162461bcd60e51b815260040161028190611c36565b6108d28363a9059cbb60e01b8484604051602401610ea89291906118f8565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b03199093169290921790915261137b565b8051600090610725908490670de0b6b3a764000061140a565b6000808211610f195760405162461bcd60e51b815260040161028190611b65565b818381610f2257fe5b049392505050565b610f3261155a565b5060008281526002602081815260408084206001600160a01b038087168652908352818520825160a0810184528154815260018201548316818601908152958201548316818501526003808301548416606083015284518087018652600493840154815260808301528988529094528286209451955492516331a9108f60e11b81529395936110569390921691636352211e91610fd1918a9101611fd5565b60206040518083038186803b158015610fe957600080fd5b505afa158015610ffd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110219190611647565b604080516020810190915260028501548152855161103f9190610708565b6001600160a01b038416919063ffffffff610e8916565b60005460405163e0fd045f60e01b81526110f6916001600160a01b03169063e0fd045f90611088908990600401611fd5565b60206040518083038186803b1580156110a057600080fd5b505afa1580156110b4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110d89190611647565b604080516020810190915260018501548152855161103f9190610708565b6000546040516304ec739360e51b8152611193916001600160a01b031690639d8e726090611128908990600401611fd5565b60206040518083038186803b15801561114057600080fd5b505afa158015611154573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111789190611647565b604080516020810190915284548152855161103f9190610708565b6000546060840151604051630f6b630f60e41b81526001600160a01b039092169163f6b630f0916111c991899190600401611fde565b600060405180830381600087803b1580156111e357600080fd5b505af11580156111f7573d6000803e3d6000fd5b5050604080516020808201835260808801515160008b815260039092529290206001015490935083925061124d919061124190816064670de0b6b3a764000063ffffffff610e4f16565b9063ffffffff61135316565b90525160028084019190915560808401515183556000868152602082815260408083206001600160a01b03891684529091528082208281556001810180546001600160a01b03199081169091559381018054851690556003810180549094169093556004909201555185907fdb88d4e96cb8697aaee5e575ee5f460817709a1dfcfbf7ba15192e90b5c86f9f906112e5908590611f2c565b60405180910390a2847fb6ef177c7a6f32b283a49b5e0463a39240cdaa278028dfb219480d050e8ee54c8460405161131d9190611f4b565b60405180910390a25050505050565b61134d846323b872dd60e01b858585604051602401610ea8939291906118d4565b50505050565b6000828211156113755760405162461bcd60e51b815260040161028190611b2e565b50900390565b60606113d0826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166114289092919063ffffffff16565b8051909150156108d257808060200190518101906113ee9190611663565b6108d25760405162461bcd60e51b815260040161028190611e2f565b600061142082610719868663ffffffff610e4f16565b949350505050565b606061142084846000858561143c856114d2565b6114585760405162461bcd60e51b815260040161028190611d78565b60006060866001600160a01b0316858760405161147591906118a4565b60006040518083038185875af1925050503d80600081146114b2576040519150601f19603f3d011682016040523d82523d6000602084013e6114b7565b606091505b50915091506114c78282866114d8565b979650505050505050565b3b151590565b606083156114e7575081610725565b8251156114f75782518084602001fd5b8160405162461bcd60e51b8152600401610281919061191c565b60405180606001604052806115246115a0565b81526020016115316115a0565b815260200161153e6115a0565b905290565b604080518082019091526000808252602082015290565b6040518060a001604052806000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200161153e5b6040518060200160405280600081525090565b6000606082840312156115c4578081fd5b6115ce6060611ff5565b90506115da8383611606565b81526115e98360208401611606565b60208201526115fb8360408401611606565b604082015292915050565b600060208284031215611617578081fd5b6116216020611ff5565b9135825250919050565b60006020828403121561163c578081fd5b813561072581612048565b600060208284031215611658578081fd5b815161072581612048565b600060208284031215611674578081fd5b81518015158114610725578182fd5b600060608284031215611694578081fd5b61072583836115b3565b600080604083850312156116b0578081fd5b6116ba8484611606565b946020939093013593505050565b6000602082840312156116d9578081fd5b5035919050565b6000602082840312156116f1578081fd5b5051919050565b6000806040838503121561170a578182fd5b82359150602083013561171c81612048565b809150509250929050565b600080828403606081121561173a578283fd5b833592506040601f198201121561174f578182fd5b5061175a6040611ff5565b60208401358152604084013561176f81612048565b6020820152919491935090915050565b60008060808385031215611791578182fd5b823591506117a284602085016115b3565b90509250929050565b60008082840360c08112156117be578283fd5b8335925060a0601f19820112156117d3578182fd5b506020830190509250929050565b600080600083850360e08112156117f6578182fd5b8435935060a0601f198201121561180b578182fd5b5061181660a0611ff5565b60208501358152604085013561182b81612048565b6020820152606085013561183e81612048565b6040820152608085013561185181612048565b60608201526118638660a08701611606565b6080820152915060c084013561187881612048565b809150509250925092565b60008060408385031215611895578182fd5b50508035926020909101359150565b600082516118b681846020870161201c565b9190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b600060208252825180602084015261193b81604085016020870161201c565b601f01601f19169190910160400192915050565b6020808252602b908201527f4d61726b65743a20496e76616c696420626964207368617265732c206d75737460408201526a02073756d20746f203130360ac1b606082015260800190565b60208082526028908201527f4d61726b65743a206269642063757272656e63792063616e6e6f742062652030604082015267206164647265737360c01b606082015260800190565b60208082526027908201527f4d61726b65743a2042696420696e76616c696420666f722073686172652073706040820152666c697474696e6760c81b606082015260800190565b60208082526022908201527f4d61726b65743a206269646465722063616e6e6f742062652030206164647265604082015261737360f01b606082015260800190565b60208082526027908201527f4d61726b65743a2041736b20696e76616c696420666f722073686172652073706040820152666c697474696e6760c81b606082015260800190565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b60208082526025908201527f4d61726b65743a2063616e6e6f742072656d6f76652062696420616d6f756e746040820152640206f6620360dc1b606082015260800190565b6020808252601e908201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604082015260600190565b6020808252601a908201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604082015260600190565b6020808252601e908201527f4d61726b65743a2063616e6e6f742062696420616d6f756e74206f6620300000604082015260600190565b6020808252601e908201527f4d61726b65743a2063616e6e6f742061636365707420626964206f6620300000604082015260600190565b60208082526012908201527126b0b935b2ba1d1027b7363c9037bbb732b960711b604082015260600190565b60208082526021908201527f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f6040820152607760f81b606082015260800190565b6020808252601d908201527f4d61726b65743a20556e65787065637465642062696420666f756e642e000000604082015260600190565b6020808252601b908201527f4d61726b65743a204f6e6c79206d6564696120636f6e74726163740000000000604082015260600190565b6020808252602f908201527f4d61726b65743a2053656c6c206f6e2066656520696e76616c696420666f722060408201526e73686172652073706c697474696e6760881b606082015260800190565b60208082526024908201527f4d61726b65743a20496e76616c6964206269642073686172657320666f72207460408201526337b5b2b760e11b606082015260800190565b6020808252601d908201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604082015260600190565b6020808252601a908201527f4d61726b65743a20416c726561647920636f6e66696775726564000000000000604082015260600190565b60208082526029908201527f4d61726b65743a2062696420726563697069656e742063616e6e6f742062652060408201526830206164647265737360b81b606082015260800190565b6020808252602a908201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6040820152691bdd081cdd58d8d9595960b21b606082015260800190565b60208082526031908201527f4d61726b65743a2063616e6e6f7420736574206d6564696120636f6e7472616360408201527074206173207a65726f206164647265737360781b606082015260800190565b815181526020918201516001600160a01b03169181019190915260400190565b815481526001909101546001600160a01b0316602082015260400190565b81515181526020808301515190820152604091820151519181019190915260600190565b8154815260018201546020820152600290910154604082015260600190565b815181526020808301516001600160a01b039081169183019190915260408084015182169083015260608084015190911690820152608091820151519181019190915260a00190565b8154815260018201546001600160a01b0390811660208301526002830154811660408301526003830154166060820152600490910154608082015260a00190565b90815260200190565b9182526001600160a01b0316602082015260400190565b60405181810167ffffffffffffffff8111828210171561201457600080fd5b604052919050565b60005b8381101561203757818101518382015260200161201f565b8381111561134d5750506000910152565b6001600160a01b038116811461205d57600080fd5b5056fea264697066735822122072c81609f8d4746bd1c092cb0e5cb453ebcf49cc630579005cdf756de1fbb97164736f6c63430006080033";
