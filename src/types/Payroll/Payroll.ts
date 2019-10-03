// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  EthereumCall,
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt,
  CallResult
} from "@graphprotocol/graph-ts";

export class CreateSalary extends EthereumEvent {
  get params(): CreateSalary__Params {
    return new CreateSalary__Params(this);
  }
}

export class CreateSalary__Params {
  _event: CreateSalary;

  constructor(event: CreateSalary) {
    this._event = event;
  }

  get salaryId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get streamId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get company(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class WithdrawFromSalary extends EthereumEvent {
  get params(): WithdrawFromSalary__Params {
    return new WithdrawFromSalary__Params(this);
  }
}

export class WithdrawFromSalary__Params {
  _event: WithdrawFromSalary;

  constructor(event: WithdrawFromSalary) {
    this._event = event;
  }

  get salaryId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get streamId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get company(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class CancelSalary extends EthereumEvent {
  get params(): CancelSalary__Params {
    return new CancelSalary__Params(this);
  }
}

export class CancelSalary__Params {
  _event: CancelSalary;

  constructor(event: CancelSalary) {
    this._event = event;
  }

  get salaryId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get streamId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get company(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class RelayHubChanged extends EthereumEvent {
  get params(): RelayHubChanged__Params {
    return new RelayHubChanged__Params(this);
  }
}

export class RelayHubChanged__Params {
  _event: RelayHubChanged;

  constructor(event: RelayHubChanged) {
    this._event = event;
  }

  get oldRelayHub(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newRelayHub(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class OwnershipTransferred extends EthereumEvent {
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

export class Payroll__acceptRelayedCallResult {
  value0: BigInt;
  value1: Bytes;

  constructor(value0: BigInt, value1: Bytes) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromUnsignedBigInt(this.value0));
    map.set("value1", EthereumValue.fromBytes(this.value1));
    return map;
  }
}

export class Payroll__getSalaryResult {
  value0: Address;
  value1: Address;
  value2: BigInt;
  value3: Address;
  value4: BigInt;
  value5: BigInt;
  value6: BigInt;
  value7: BigInt;

  constructor(
    value0: Address,
    value1: Address,
    value2: BigInt,
    value3: Address,
    value4: BigInt,
    value5: BigInt,
    value6: BigInt,
    value7: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromAddress(this.value0));
    map.set("value1", EthereumValue.fromAddress(this.value1));
    map.set("value2", EthereumValue.fromUnsignedBigInt(this.value2));
    map.set("value3", EthereumValue.fromAddress(this.value3));
    map.set("value4", EthereumValue.fromUnsignedBigInt(this.value4));
    map.set("value5", EthereumValue.fromUnsignedBigInt(this.value5));
    map.set("value6", EthereumValue.fromUnsignedBigInt(this.value6));
    map.set("value7", EthereumValue.fromUnsignedBigInt(this.value7));
    return map;
  }
}

export class Payroll extends SmartContract {
  static bind(address: Address): Payroll {
    return new Payroll("Payroll", address);
  }

  relayers(param0: Address, param1: BigInt): boolean {
    let result = super.call("relayers", [
      EthereumValue.fromAddress(param0),
      EthereumValue.fromUnsignedBigInt(param1)
    ]);

    return result[0].toBoolean();
  }

  try_relayers(param0: Address, param1: BigInt): CallResult<boolean> {
    let result = super.tryCall("relayers", [
      EthereumValue.fromAddress(param0),
      EthereumValue.fromUnsignedBigInt(param1)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  sablier(): Address {
    let result = super.call("sablier", []);

    return result[0].toAddress();
  }

  try_sablier(): CallResult<Address> {
    let result = super.tryCall("sablier", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  getHubAddr(): Address {
    let result = super.call("getHubAddr", []);

    return result[0].toAddress();
  }

  try_getHubAddr(): CallResult<Address> {
    let result = super.tryCall("getHubAddr", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  preRelayedCall(context: Bytes): Bytes {
    let result = super.call("preRelayedCall", [
      EthereumValue.fromBytes(context)
    ]);

    return result[0].toBytes();
  }

  try_preRelayedCall(context: Bytes): CallResult<Bytes> {
    let result = super.tryCall("preRelayedCall", [
      EthereumValue.fromBytes(context)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBytes());
  }

  owner(): Address {
    let result = super.call("owner", []);

    return result[0].toAddress();
  }

  try_owner(): CallResult<Address> {
    let result = super.tryCall("owner", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  isOwner(): boolean {
    let result = super.call("isOwner", []);

    return result[0].toBoolean();
  }

  try_isOwner(): CallResult<boolean> {
    let result = super.tryCall("isOwner", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  relayHubVersion(): string {
    let result = super.call("relayHubVersion", []);

    return result[0].toString();
  }

  try_relayHubVersion(): CallResult<string> {
    let result = super.tryCall("relayHubVersion", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toString());
  }

  nextSalaryId(): BigInt {
    let result = super.call("nextSalaryId", []);

    return result[0].toBigInt();
  }

  try_nextSalaryId(): CallResult<BigInt> {
    let result = super.tryCall("nextSalaryId", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  acceptRelayedCall(
    relay: Address,
    from: Address,
    encodedFunction: Bytes,
    transactionFee: BigInt,
    gasPrice: BigInt,
    gasLimit: BigInt,
    nonce: BigInt,
    approvalData: Bytes,
    param8: BigInt
  ): Payroll__acceptRelayedCallResult {
    let result = super.call("acceptRelayedCall", [
      EthereumValue.fromAddress(relay),
      EthereumValue.fromAddress(from),
      EthereumValue.fromBytes(encodedFunction),
      EthereumValue.fromUnsignedBigInt(transactionFee),
      EthereumValue.fromUnsignedBigInt(gasPrice),
      EthereumValue.fromUnsignedBigInt(gasLimit),
      EthereumValue.fromUnsignedBigInt(nonce),
      EthereumValue.fromBytes(approvalData),
      EthereumValue.fromUnsignedBigInt(param8)
    ]);

    return new Payroll__acceptRelayedCallResult(
      result[0].toBigInt(),
      result[1].toBytes()
    );
  }

  try_acceptRelayedCall(
    relay: Address,
    from: Address,
    encodedFunction: Bytes,
    transactionFee: BigInt,
    gasPrice: BigInt,
    gasLimit: BigInt,
    nonce: BigInt,
    approvalData: Bytes,
    param8: BigInt
  ): CallResult<Payroll__acceptRelayedCallResult> {
    let result = super.tryCall("acceptRelayedCall", [
      EthereumValue.fromAddress(relay),
      EthereumValue.fromAddress(from),
      EthereumValue.fromBytes(encodedFunction),
      EthereumValue.fromUnsignedBigInt(transactionFee),
      EthereumValue.fromUnsignedBigInt(gasPrice),
      EthereumValue.fromUnsignedBigInt(gasLimit),
      EthereumValue.fromUnsignedBigInt(nonce),
      EthereumValue.fromBytes(approvalData),
      EthereumValue.fromUnsignedBigInt(param8)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(
      new Payroll__acceptRelayedCallResult(
        value[0].toBigInt(),
        value[1].toBytes()
      )
    );
  }

  getSalary(salaryId: BigInt): Payroll__getSalaryResult {
    let result = super.call("getSalary", [
      EthereumValue.fromUnsignedBigInt(salaryId)
    ]);

    return new Payroll__getSalaryResult(
      result[0].toAddress(),
      result[1].toAddress(),
      result[2].toBigInt(),
      result[3].toAddress(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBigInt(),
      result[7].toBigInt()
    );
  }

  try_getSalary(salaryId: BigInt): CallResult<Payroll__getSalaryResult> {
    let result = super.tryCall("getSalary", [
      EthereumValue.fromUnsignedBigInt(salaryId)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(
      new Payroll__getSalaryResult(
        value[0].toAddress(),
        value[1].toAddress(),
        value[2].toBigInt(),
        value[3].toAddress(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toBigInt(),
        value[7].toBigInt()
      )
    );
  }

  createSalary(
    employee: Address,
    salary: BigInt,
    tokenAddress: Address,
    startTime: BigInt,
    stopTime: BigInt
  ): BigInt {
    let result = super.call("createSalary", [
      EthereumValue.fromAddress(employee),
      EthereumValue.fromUnsignedBigInt(salary),
      EthereumValue.fromAddress(tokenAddress),
      EthereumValue.fromUnsignedBigInt(startTime),
      EthereumValue.fromUnsignedBigInt(stopTime)
    ]);

    return result[0].toBigInt();
  }

  try_createSalary(
    employee: Address,
    salary: BigInt,
    tokenAddress: Address,
    startTime: BigInt,
    stopTime: BigInt
  ): CallResult<BigInt> {
    let result = super.tryCall("createSalary", [
      EthereumValue.fromAddress(employee),
      EthereumValue.fromUnsignedBigInt(salary),
      EthereumValue.fromAddress(tokenAddress),
      EthereumValue.fromUnsignedBigInt(startTime),
      EthereumValue.fromUnsignedBigInt(stopTime)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  createCompoundingSalary(
    employee: Address,
    salary: BigInt,
    tokenAddress: Address,
    startTime: BigInt,
    stopTime: BigInt,
    senderSharePercentage: BigInt,
    recipientSharePercentage: BigInt
  ): BigInt {
    let result = super.call("createCompoundingSalary", [
      EthereumValue.fromAddress(employee),
      EthereumValue.fromUnsignedBigInt(salary),
      EthereumValue.fromAddress(tokenAddress),
      EthereumValue.fromUnsignedBigInt(startTime),
      EthereumValue.fromUnsignedBigInt(stopTime),
      EthereumValue.fromUnsignedBigInt(senderSharePercentage),
      EthereumValue.fromUnsignedBigInt(recipientSharePercentage)
    ]);

    return result[0].toBigInt();
  }

  try_createCompoundingSalary(
    employee: Address,
    salary: BigInt,
    tokenAddress: Address,
    startTime: BigInt,
    stopTime: BigInt,
    senderSharePercentage: BigInt,
    recipientSharePercentage: BigInt
  ): CallResult<BigInt> {
    let result = super.tryCall("createCompoundingSalary", [
      EthereumValue.fromAddress(employee),
      EthereumValue.fromUnsignedBigInt(salary),
      EthereumValue.fromAddress(tokenAddress),
      EthereumValue.fromUnsignedBigInt(startTime),
      EthereumValue.fromUnsignedBigInt(stopTime),
      EthereumValue.fromUnsignedBigInt(senderSharePercentage),
      EthereumValue.fromUnsignedBigInt(recipientSharePercentage)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  withdrawFromSalary(salaryId: BigInt, amount: BigInt): boolean {
    let result = super.call("withdrawFromSalary", [
      EthereumValue.fromUnsignedBigInt(salaryId),
      EthereumValue.fromUnsignedBigInt(amount)
    ]);

    return result[0].toBoolean();
  }

  try_withdrawFromSalary(
    salaryId: BigInt,
    amount: BigInt
  ): CallResult<boolean> {
    let result = super.tryCall("withdrawFromSalary", [
      EthereumValue.fromUnsignedBigInt(salaryId),
      EthereumValue.fromUnsignedBigInt(amount)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  cancelSalary(salaryId: BigInt): boolean {
    let result = super.call("cancelSalary", [
      EthereumValue.fromUnsignedBigInt(salaryId)
    ]);

    return result[0].toBoolean();
  }

  try_cancelSalary(salaryId: BigInt): CallResult<boolean> {
    let result = super.tryCall("cancelSalary", [
      EthereumValue.fromUnsignedBigInt(salaryId)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }
}

export class PreRelayedCallCall extends EthereumCall {
  get inputs(): PreRelayedCallCall__Inputs {
    return new PreRelayedCallCall__Inputs(this);
  }

  get outputs(): PreRelayedCallCall__Outputs {
    return new PreRelayedCallCall__Outputs(this);
  }
}

export class PreRelayedCallCall__Inputs {
  _call: PreRelayedCallCall;

  constructor(call: PreRelayedCallCall) {
    this._call = call;
  }

  get context(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class PreRelayedCallCall__Outputs {
  _call: PreRelayedCallCall;

  constructor(call: PreRelayedCallCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class PostRelayedCallCall extends EthereumCall {
  get inputs(): PostRelayedCallCall__Inputs {
    return new PostRelayedCallCall__Inputs(this);
  }

  get outputs(): PostRelayedCallCall__Outputs {
    return new PostRelayedCallCall__Outputs(this);
  }
}

export class PostRelayedCallCall__Inputs {
  _call: PostRelayedCallCall;

  constructor(call: PostRelayedCallCall) {
    this._call = call;
  }

  get context(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get success(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }

  get actualCharge(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get preRetVal(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class PostRelayedCallCall__Outputs {
  _call: PostRelayedCallCall;

  constructor(call: PostRelayedCallCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends EthereumCall {
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

export class InitializeCall extends EthereumCall {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get trustedSigner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class Initialize1Call extends EthereumCall {
  get inputs(): Initialize1Call__Inputs {
    return new Initialize1Call__Inputs(this);
  }

  get outputs(): Initialize1Call__Outputs {
    return new Initialize1Call__Outputs(this);
  }
}

export class Initialize1Call__Inputs {
  _call: Initialize1Call;

  constructor(call: Initialize1Call) {
    this._call = call;
  }

  get ownerAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get signerAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get sablierAddress(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class Initialize1Call__Outputs {
  _call: Initialize1Call;

  constructor(call: Initialize1Call) {
    this._call = call;
  }
}

export class Initialize2Call extends EthereumCall {
  get inputs(): Initialize2Call__Inputs {
    return new Initialize2Call__Inputs(this);
  }

  get outputs(): Initialize2Call__Outputs {
    return new Initialize2Call__Outputs(this);
  }
}

export class Initialize2Call__Inputs {
  _call: Initialize2Call;

  constructor(call: Initialize2Call) {
    this._call = call;
  }
}

export class Initialize2Call__Outputs {
  _call: Initialize2Call;

  constructor(call: Initialize2Call) {
    this._call = call;
  }
}

export class WhitelistRelayerCall extends EthereumCall {
  get inputs(): WhitelistRelayerCall__Inputs {
    return new WhitelistRelayerCall__Inputs(this);
  }

  get outputs(): WhitelistRelayerCall__Outputs {
    return new WhitelistRelayerCall__Outputs(this);
  }
}

export class WhitelistRelayerCall__Inputs {
  _call: WhitelistRelayerCall;

  constructor(call: WhitelistRelayerCall) {
    this._call = call;
  }

  get relayer(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get salaryId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class WhitelistRelayerCall__Outputs {
  _call: WhitelistRelayerCall;

  constructor(call: WhitelistRelayerCall) {
    this._call = call;
  }
}

export class DiscardRelayerCall extends EthereumCall {
  get inputs(): DiscardRelayerCall__Inputs {
    return new DiscardRelayerCall__Inputs(this);
  }

  get outputs(): DiscardRelayerCall__Outputs {
    return new DiscardRelayerCall__Outputs(this);
  }
}

export class DiscardRelayerCall__Inputs {
  _call: DiscardRelayerCall;

  constructor(call: DiscardRelayerCall) {
    this._call = call;
  }

  get relayer(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get salaryId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DiscardRelayerCall__Outputs {
  _call: DiscardRelayerCall;

  constructor(call: DiscardRelayerCall) {
    this._call = call;
  }
}

export class CreateSalaryCall extends EthereumCall {
  get inputs(): CreateSalaryCall__Inputs {
    return new CreateSalaryCall__Inputs(this);
  }

  get outputs(): CreateSalaryCall__Outputs {
    return new CreateSalaryCall__Outputs(this);
  }
}

export class CreateSalaryCall__Inputs {
  _call: CreateSalaryCall;

  constructor(call: CreateSalaryCall) {
    this._call = call;
  }

  get employee(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get salary(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get tokenAddress(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get startTime(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get stopTime(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class CreateSalaryCall__Outputs {
  _call: CreateSalaryCall;

  constructor(call: CreateSalaryCall) {
    this._call = call;
  }

  get salaryId(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class CreateCompoundingSalaryCall extends EthereumCall {
  get inputs(): CreateCompoundingSalaryCall__Inputs {
    return new CreateCompoundingSalaryCall__Inputs(this);
  }

  get outputs(): CreateCompoundingSalaryCall__Outputs {
    return new CreateCompoundingSalaryCall__Outputs(this);
  }
}

export class CreateCompoundingSalaryCall__Inputs {
  _call: CreateCompoundingSalaryCall;

  constructor(call: CreateCompoundingSalaryCall) {
    this._call = call;
  }

  get employee(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get salary(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get tokenAddress(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get startTime(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get stopTime(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get senderSharePercentage(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get recipientSharePercentage(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }
}

export class CreateCompoundingSalaryCall__Outputs {
  _call: CreateCompoundingSalaryCall;

  constructor(call: CreateCompoundingSalaryCall) {
    this._call = call;
  }

  get salaryId(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class WithdrawFromSalaryCall extends EthereumCall {
  get inputs(): WithdrawFromSalaryCall__Inputs {
    return new WithdrawFromSalaryCall__Inputs(this);
  }

  get outputs(): WithdrawFromSalaryCall__Outputs {
    return new WithdrawFromSalaryCall__Outputs(this);
  }
}

export class WithdrawFromSalaryCall__Inputs {
  _call: WithdrawFromSalaryCall;

  constructor(call: WithdrawFromSalaryCall) {
    this._call = call;
  }

  get salaryId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class WithdrawFromSalaryCall__Outputs {
  _call: WithdrawFromSalaryCall;

  constructor(call: WithdrawFromSalaryCall) {
    this._call = call;
  }

  get success(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class CancelSalaryCall extends EthereumCall {
  get inputs(): CancelSalaryCall__Inputs {
    return new CancelSalaryCall__Inputs(this);
  }

  get outputs(): CancelSalaryCall__Outputs {
    return new CancelSalaryCall__Outputs(this);
  }
}

export class CancelSalaryCall__Inputs {
  _call: CancelSalaryCall;

  constructor(call: CancelSalaryCall) {
    this._call = call;
  }

  get salaryId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class CancelSalaryCall__Outputs {
  _call: CancelSalaryCall;

  constructor(call: CancelSalaryCall) {
    this._call = call;
  }

  get success(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}
