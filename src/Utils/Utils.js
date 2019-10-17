export const isValidURL = url => {
    const a = document.createElement('a');

    a.href = url;

    return (a.host && a.host != window.location.host);
}