const cookieUtils = {};

cookieUtils.setCookie = (name, time) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + time);
    document.cookie = `${name}=true;expires=${expires.toUTCString()};path=/`;
};

cookieUtils.getCookie = (name) => {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(`${name}=`)) {
            return cookie.substring(name.length + 1);
        }
    }
    return null;
};

cookieUtils.deleteCookie = (name) => {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
};

cookieUtils.isCookie = (name) => {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(`${name}=`)) {
            return true;
        }
    }
    return false;
};

cookieUtils.isSigned = () => {
    // get session uuid from php server
    return cookieUtils.getCookie('uuid') === '1234';
};

export { cookieUtils };
