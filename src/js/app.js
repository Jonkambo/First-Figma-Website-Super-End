import requestDialogInit from "./modules/dialog-window"
import authInit from "./modules/hidden-btn"
import menuInit from "./modules/toggle-menu"

const init = () => {
    requestDialogInit()
    authInit()
    menuInit()
}

init()