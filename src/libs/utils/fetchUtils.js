const fetchUtils = {};

fetchUtils.postData = async (url = '', data = {}) => {
    const response = await fetch(
        url,
        {
            method: "POST",
            body: JSON.stringify(data),
        },
    );

    return response.json();
}

export { fetchUtils };