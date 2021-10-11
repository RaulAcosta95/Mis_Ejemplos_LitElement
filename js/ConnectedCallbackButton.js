
let connectedCallback = document.getElementById('ConnectedCalbackButton');

let ConnectedCalbackComponentContainer = document.getElementById('ConnectedCalbackComponentContainer');

function connectedCallbackFunction () {
    if (ConnectedCalbackComponentContainer.hasChildNodes()) {
        ConnectedCalbackComponentContainer.innerHTML = ``;
        connectedCallback.innerHTML = "Connected Callback"
    } else {
        ConnectedCalbackComponentContainer.innerHTML = `
        <connected-callback></connected-callback>
        `
        connectedCallback.innerHTML = "Disconnected Callback"
    }
}