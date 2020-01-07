export default {
    updateConnectionStatus: app => {
        app.isOnline = window.navigator.onLine; 
    }
};