import ky from "ky";

export const api = ky.create({
    headers: {
        "Content-Type": "application/json",
    },
    hooks: {
        beforeRequest: [
            (options) => {
                let token = localStorage.getItem("token");
                if (token) {
                    options.headers.set("Authorization", "Bearer " + token);
                }
            }
        ]
    },
    prefixUrl: "http://45.151.31.101:8080",
});

export const authApi = api.extend((options) => ({
    prefixUrl: `${options.prefixUrl}/auth`,
}));
