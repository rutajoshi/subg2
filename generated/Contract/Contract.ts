// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ImplementationUpdated extends ethereum.Event {
  get params(): ImplementationUpdated__Params {
    return new ImplementationUpdated__Params(this);
  }
}

export class ImplementationUpdated__Params {
  _event: ImplementationUpdated;

  constructor(event: ImplementationUpdated) {
    this._event = event;
  }

  get tokenImplementation(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class TokenCreated extends ethereum.Event {
  get params(): TokenCreated__Params {
    return new TokenCreated__Params(this);
  }
}

export class TokenCreated__Params {
  _event: TokenCreated;

  constructor(event: TokenCreated) {
    this._event = event;
  }

  get tokenAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get name(): string {
    return this._event.parameters[1].value.toString();
  }

  get symbol(): string {
    return this._event.parameters[2].value.toString();
  }

  get maxTokenSupply(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class Contract extends ethereum.SmartContract {
  static bind(address: Address): Contract {
    return new Contract("Contract", address);
  }

  beneficiary(): Address {
    let result = super.call("beneficiary", "beneficiary():(address)", []);

    return result[0].toAddress();
  }

  try_beneficiary(): ethereum.CallResult<Address> {
    let result = super.tryCall("beneficiary", "beneficiary():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  createToken(
    name: string,
    symbol: string,
    royalty: BigInt,
    reservedSupply: BigInt,
    maxTokenSupply: BigInt,
    slope: BigInt,
    collateralToken: Address
  ): Address {
    let result = super.call(
      "createToken",
      "createToken(string,string,uint256,uint256,uint256,uint256,address):(address)",
      [
        ethereum.Value.fromString(name),
        ethereum.Value.fromString(symbol),
        ethereum.Value.fromUnsignedBigInt(royalty),
        ethereum.Value.fromUnsignedBigInt(reservedSupply),
        ethereum.Value.fromUnsignedBigInt(maxTokenSupply),
        ethereum.Value.fromUnsignedBigInt(slope),
        ethereum.Value.fromAddress(collateralToken)
      ]
    );

    return result[0].toAddress();
  }

  try_createToken(
    name: string,
    symbol: string,
    royalty: BigInt,
    reservedSupply: BigInt,
    maxTokenSupply: BigInt,
    slope: BigInt,
    collateralToken: Address
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "createToken",
      "createToken(string,string,uint256,uint256,uint256,uint256,address):(address)",
      [
        ethereum.Value.fromString(name),
        ethereum.Value.fromString(symbol),
        ethereum.Value.fromUnsignedBigInt(royalty),
        ethereum.Value.fromUnsignedBigInt(reservedSupply),
        ethereum.Value.fromUnsignedBigInt(maxTokenSupply),
        ethereum.Value.fromUnsignedBigInt(slope),
        ethereum.Value.fromAddress(collateralToken)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  exists(tokenAddress: Address): boolean {
    let result = super.call("exists", "exists(address):(bool)", [
      ethereum.Value.fromAddress(tokenAddress)
    ]);

    return result[0].toBoolean();
  }

  try_exists(tokenAddress: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("exists", "exists(address):(bool)", [
      ethereum.Value.fromAddress(tokenAddress)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getMyTokens(): Array<Address> {
    let result = super.call("getMyTokens", "getMyTokens():(address[])", []);

    return result[0].toAddressArray();
  }

  try_getMyTokens(): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall("getMyTokens", "getMyTokens():(address[])", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  maxSupply(param0: Address): BigInt {
    let result = super.call("maxSupply", "maxSupply(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBigInt();
  }

  try_maxSupply(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("maxSupply", "maxSupply(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  protocolReserve(param0: Address): BigInt {
    let result = super.call(
      "protocolReserve",
      "protocolReserve(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBigInt();
  }

  try_protocolReserve(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "protocolReserve",
      "protocolReserve(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenCount(): BigInt {
    let result = super.call("tokenCount", "tokenCount():(uint256)", []);

    return result[0].toBigInt();
  }

  try_tokenCount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("tokenCount", "tokenCount():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenImplementation(): Address {
    let result = super.call(
      "tokenImplementation",
      "tokenImplementation():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_tokenImplementation(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "tokenImplementation",
      "tokenImplementation():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  tokenOwner(param0: Address): Address {
    let result = super.call("tokenOwner", "tokenOwner(address):(address)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toAddress();
  }

  try_tokenOwner(param0: Address): ethereum.CallResult<Address> {
    let result = super.tryCall("tokenOwner", "tokenOwner(address):(address)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  tokens(param0: BigInt): Address {
    let result = super.call("tokens", "tokens(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_tokens(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("tokens", "tokens(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get implementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _beneficiary(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AirdropToCall extends ethereum.Call {
  get inputs(): AirdropToCall__Inputs {
    return new AirdropToCall__Inputs(this);
  }

  get outputs(): AirdropToCall__Outputs {
    return new AirdropToCall__Outputs(this);
  }
}

export class AirdropToCall__Inputs {
  _call: AirdropToCall;

  constructor(call: AirdropToCall) {
    this._call = call;
  }

  get tokenAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get recipients(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }

  get _amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class AirdropToCall__Outputs {
  _call: AirdropToCall;

  constructor(call: AirdropToCall) {
    this._call = call;
  }
}

export class CreateTokenCall extends ethereum.Call {
  get inputs(): CreateTokenCall__Inputs {
    return new CreateTokenCall__Inputs(this);
  }

  get outputs(): CreateTokenCall__Outputs {
    return new CreateTokenCall__Outputs(this);
  }
}

export class CreateTokenCall__Inputs {
  _call: CreateTokenCall;

  constructor(call: CreateTokenCall) {
    this._call = call;
  }

  get name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get symbol(): string {
    return this._call.inputValues[1].value.toString();
  }

  get royalty(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get reservedSupply(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get maxTokenSupply(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get slope(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get collateralToken(): Address {
    return this._call.inputValues[6].value.toAddress();
  }
}

export class CreateTokenCall__Outputs {
  _call: CreateTokenCall;

  constructor(call: CreateTokenCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetDefaultBeneficiaryCall extends ethereum.Call {
  get inputs(): SetDefaultBeneficiaryCall__Inputs {
    return new SetDefaultBeneficiaryCall__Inputs(this);
  }

  get outputs(): SetDefaultBeneficiaryCall__Outputs {
    return new SetDefaultBeneficiaryCall__Outputs(this);
  }
}

export class SetDefaultBeneficiaryCall__Inputs {
  _call: SetDefaultBeneficiaryCall;

  constructor(call: SetDefaultBeneficiaryCall) {
    this._call = call;
  }

  get _beneficiary(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetDefaultBeneficiaryCall__Outputs {
  _call: SetDefaultBeneficiaryCall;

  constructor(call: SetDefaultBeneficiaryCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UpdateTokenImplementationCall extends ethereum.Call {
  get inputs(): UpdateTokenImplementationCall__Inputs {
    return new UpdateTokenImplementationCall__Inputs(this);
  }

  get outputs(): UpdateTokenImplementationCall__Outputs {
    return new UpdateTokenImplementationCall__Outputs(this);
  }
}

export class UpdateTokenImplementationCall__Inputs {
  _call: UpdateTokenImplementationCall;

  constructor(call: UpdateTokenImplementationCall) {
    this._call = call;
  }

  get implementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpdateTokenImplementationCall__Outputs {
  _call: UpdateTokenImplementationCall;

  constructor(call: UpdateTokenImplementationCall) {
    this._call = call;
  }
}

export class WithdrawProtocolReserveCall extends ethereum.Call {
  get inputs(): WithdrawProtocolReserveCall__Inputs {
    return new WithdrawProtocolReserveCall__Inputs(this);
  }

  get outputs(): WithdrawProtocolReserveCall__Outputs {
    return new WithdrawProtocolReserveCall__Outputs(this);
  }
}

export class WithdrawProtocolReserveCall__Inputs {
  _call: WithdrawProtocolReserveCall;

  constructor(call: WithdrawProtocolReserveCall) {
    this._call = call;
  }
}

export class WithdrawProtocolReserveCall__Outputs {
  _call: WithdrawProtocolReserveCall;

  constructor(call: WithdrawProtocolReserveCall) {
    this._call = call;
  }
}
