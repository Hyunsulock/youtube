class Youtube {
    constructor(key) {
        this.key = key;
        this.requestOptions = {
            method: "GET",
            redirect: "follow",
        };
    }

    mostPopular() {
        return fetch(
            `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDij5uthJaDftvlHUTuNPS6DKBARn9IbY0`,
            this.getRequestOptions
        )
            .then((response) => response.json())
            .then((result) => result.items)
            .catch((error) => console.log("error", error));
    }

    search(query) {
        return fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyDij5uthJaDftvlHUTuNPS6DKBARn9IbY0`,
            this.getRequestOptions
        )
            .then((response) => response.json())
            .then((result) =>
                result.items.map((item) => ({ ...item, id: item.id.videoId }))
            )
            .catch((error) => console.log("error", error));
    }
}

export default Youtube;
