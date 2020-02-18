export function toast(message: string, duration = 2000) {
  const toast = document.createElement("ion-toast");
  toast.message = message;
  toast.duration = duration;

  document.body.appendChild(toast);
  return toast.present();
}

/*
import { Plugins } from "@capacitor/core";
import { toast } from "../../components/toast";

-----------------------------------------------
  const { Network } = Plugins;
  const status = Network.getStatus();
  function connection() {
    status
      .then(res => (res.connected ? res : false))
      .then(res => {
        if (!res) {
          toast("Internet Offline");
          console.log(res);
        } else {
          console.log("ta conectado bruxo");
        }
        console.log(res);
      });
  }
*/
