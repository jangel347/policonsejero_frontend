class ApiController {
    static async search(situation) {
        const apiResponse = await fetch(
            'http://localhost:3900/api/search/list', {
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
}

export default ApiController;