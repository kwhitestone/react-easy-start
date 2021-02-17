var configState = {
    serverUrl: "http://localhost:8889",
}

function config() {
    if (window.Configs && window.Configs.serverUrl) {        
        configState.serverUrl = window.Configs.serverUrl
    } else {
        console.error('can not get serverUrl, use default')
    }
    return configState
}

export default config;