export const useCookieConsent = () => {
    
    let value = false

    const confirm = () => {
        value = true
    }

    const cancel = () => {
        value = false
    }

    return {
        value,
        confirm,
        cancel
    }

}