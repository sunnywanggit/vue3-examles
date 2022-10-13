import screenShort from "vue-web-screen-shot";
import {App} from "vue";

export const installScreenShot = (app: App) => {
  app.use(screenShort, { enableWebRtc:  true })
}
