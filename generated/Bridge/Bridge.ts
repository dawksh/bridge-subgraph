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

export class BridgeToken extends ethereum.Event {
  get params(): BridgeToken__Params {
    return new BridgeToken__Params(this);
  }
}

export class BridgeToken__Params {
  _event: BridgeToken;

  constructor(event: BridgeToken) {
    this._event = event;
  }

  get param0(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get param1(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get param2(): string {
    return this._event.parameters[2].value.toString();
  }
}

export class Received extends ethereum.Event {
  get params(): Received__Params {
    return new Received__Params(this);
  }
}

export class Received__Params {
  _event: Received;

  constructor(event: Received) {
    this._event = event;
  }

  get param0(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get param1(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Bridge extends ethereum.SmartContract {
  static bind(address: Address): Bridge {
    return new Bridge("Bridge", address);
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

  get _auth(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AuthorityTransferCall extends ethereum.Call {
  get inputs(): AuthorityTransferCall__Inputs {
    return new AuthorityTransferCall__Inputs(this);
  }

  get outputs(): AuthorityTransferCall__Outputs {
    return new AuthorityTransferCall__Outputs(this);
  }
}

export class AuthorityTransferCall__Inputs {
  _call: AuthorityTransferCall;

  constructor(call: AuthorityTransferCall) {
    this._call = call;
  }

  get _payee(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class AuthorityTransferCall__Outputs {
  _call: AuthorityTransferCall;

  constructor(call: AuthorityTransferCall) {
    this._call = call;
  }
}

export class BridgeNativeCall extends ethereum.Call {
  get inputs(): BridgeNativeCall__Inputs {
    return new BridgeNativeCall__Inputs(this);
  }

  get outputs(): BridgeNativeCall__Outputs {
    return new BridgeNativeCall__Outputs(this);
  }
}

export class BridgeNativeCall__Inputs {
  _call: BridgeNativeCall;

  constructor(call: BridgeNativeCall) {
    this._call = call;
  }

  get signature(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class BridgeNativeCall__Outputs {
  _call: BridgeNativeCall;

  constructor(call: BridgeNativeCall) {
    this._call = call;
  }
}

export class UpdateAuthorityCall extends ethereum.Call {
  get inputs(): UpdateAuthorityCall__Inputs {
    return new UpdateAuthorityCall__Inputs(this);
  }

  get outputs(): UpdateAuthorityCall__Outputs {
    return new UpdateAuthorityCall__Outputs(this);
  }
}

export class UpdateAuthorityCall__Inputs {
  _call: UpdateAuthorityCall;

  constructor(call: UpdateAuthorityCall) {
    this._call = call;
  }

  get newAuthority(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpdateAuthorityCall__Outputs {
  _call: UpdateAuthorityCall;

  constructor(call: UpdateAuthorityCall) {
    this._call = call;
  }
}
