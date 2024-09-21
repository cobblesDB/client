class WebSocketService {
    constructor(url) {
        this.url = url;
        this.socket = null;
    }

    connect() {
        return new Promise((resolve, reject) => {
            this.socket = new WebSocket(this.url);

            this.socket.onopen = () => {
                console.log('connection to ', this.url, ' established');
                resolve();
            }

            this.socket.onerror = (error) => {
                console.error('WebSocket error: ', error);
                reject();
            }

            this.socket.onclose = () => {
                console.log('connection to ', this.url, 'closed');
            }
        })
    }

    sendMessage(message) {
        if (this.socket && this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(JSON.stringify(message));
        }
        else {
            console.log('Connection is disabled');
        }
    }

    onMessage(callback) {
        if (this.socket) {
            this.socket.onmessage = (event) => {
                console.log(event.data);
                const data = JSON.parse(event.data);
                callback(data);
            };
        }
    }

    disconnect() {
        if (this.socket) {
            this.socket.close();
            console.log('Connection closed by client');
        }
    }
}

export default WebSocketService;