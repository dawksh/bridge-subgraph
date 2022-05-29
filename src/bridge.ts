
import { Bridge, BridgeToken, Received } from "../generated/Bridge/Bridge"
import { BridgeRequest } from "../generated/schema"

export function handleBridgeToken(event: BridgeToken): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = BridgeRequest.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new BridgeRequest(event.transaction.from.toString() + "-" + event.transaction.nonce.toString());
  }

  entity.address = event.params.param0.toString();
  entity.amount = event.params.param1;
  entity.signature = event.params.param2;

  entity.save()

}

export function handleReceived(event: Received): void { }
