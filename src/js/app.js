import requestDialogInit from "./modules/dialog-window"
import authInit from "./modules/hidden-btn"
import menuInit from "./modules/toggle-menu"
import authWindowInit from "./modules/dialog-auth"
import swiper from "./modules/slider"

const init = () => {
    requestDialogInit()
    authInit()
    menuInit()
    authWindowInit()
    swiper()
}

init()