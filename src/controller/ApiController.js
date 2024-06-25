class ApiController {
    static async search(situation) {
        const apiResponse = await fetch(
            'http://localhost:5000/api/evaluate', {
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
            'http://localhost:5000/api/regulations', {
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
            'http://localhost:5000/api/tags', {
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

    static async getRulesBy(filter){
        const apiResponse = await fetch(
            'http://localhost:5000/api/rules_by', {
            method: 'POST',
            mode: "cors",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(filter)
        });
        const data = await apiResponse.json();
        return data;
    }

    static async createStadistic(stadistic){
        const apiResponse = await fetch(
            'http://localhost:5000/api/stadistics/create', {
            method: 'POST',
            mode: "cors",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(stadistic)
        });
        const data = await apiResponse.json();
        return data;
    }
}

export default ApiController;