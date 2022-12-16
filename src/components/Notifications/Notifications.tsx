import {toast} from "react-toastify";

export const reviewNotification_ = (_reviewNotification:any) => {

        switch (_reviewNotification.message) {
            case true:
                return toast.success("Review Saved", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            case false:
                return toast.error("Review Error", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
        }

}

export const deleteAgentNotification_ = (_deleteAgentNotification:any) => {

    switch (_deleteAgentNotification.message) {
        case true:
            return toast.success("Agent Deleted", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        case false:
            return toast.error("Delete Error", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })

    }

}



export const sizeFileNotification_ = (_sizeFileNotification:any) => {

    switch (_sizeFileNotification) {
        case true:
            return toast.error("Very big image, Please search another image", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
    }


}


export const updateAgentNotification_ = (_updateAgentNotification:any) => {

    switch (_updateAgentNotification.message) {
        case true:
            return toast.success("Agent Updated", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        case false:
            return toast.error("Update Error", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })

    }


}


export const newAgentNotification_ = (_newAgentNotification:any) => {

    switch (_newAgentNotification.message) {
        case true:
            return toast.success("New Agent Saved", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        case false:
            return toast.error("New Agent Error", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })

    }

}


export const sizeFileNotificationUndefined_ = (_sizeFileNotificationUndefined:any) => {

    switch (_sizeFileNotificationUndefined) {
        case true:
            return toast.error("Please choose an image", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
    }

}
