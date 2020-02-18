import { Plugins } from "@capacitor/core";
import { toast } from "./components/toast";

const { Network } = Plugins;
const status = Network.getStatus();
export function connection() {
  status
    .then(res => (res.connected ? res : false))
    .then(res => {
      if (!res) {
        toast("Internet Offline");
      } else {
        console.log("Internet connected.");
      }
      console.log(res);
    });
}
