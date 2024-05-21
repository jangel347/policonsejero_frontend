class ApiController {
    static async search(situation) {
        const apiResponse = await fetch(
            'http://localhost:5000/evaluate', {
            method: 'POST',
            mode: "cors",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "situation": situation
            }),
        });
        const data = await apiResponse.json();
        return data;
    }

    static async getRegulations() {
        const apiResponse = await fetch(
            'http://localhost:5000/regulations', {
            method: 'POST',
            mode: "cors",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            body: {}
        });
        const data = await apiResponse.json();
        return data;
    }

    static async getTags() {
        const apiResponse = await fetch(
            'http://localhost:5000/tags', {
            method: 'POST',
            mode: "cors",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            body: {}
        });
        const data = await apiResponse.json();
        return data;
    }
}

export default ApiController;