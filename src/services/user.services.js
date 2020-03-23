import { ApiService } from "./api.services";

const userService = {
    //Signup
    SignupStart: ({username, email}) => {
        return new Promise(function (resolve, reject) {
            ApiService.post("/users", {
                username,
                email
            })
            .then(({ data }) => {
                resolve(data);
            })
            .catch(error => {
                reject(error.response.data);
             });
        });
    },

    //Verify email
    VerifyEmail: (code) => {
        return new Promise(function (resolve, reject) {
            ApiService.get(`/users/verify/${code}`)
            .then(({ data }) => {
                resolve(data);
            })
            .catch(error => {
                reject(error.response.data);
             });
        });
    },

    //Signup End
    SignupEnd: ({password, email,  school, department, country, phone, region, name}) => {
        return new Promise(function (resolve, reject) {
            ApiService.put(`/users/update/profile/${email}`, {
                name,
                password,
                school,
                department,
                country,
                region,
                phone
            })
            .then(({ data }) => {
                resolve(data);
            })
            .catch(error => {
                reject(error.response.data);
             });
        });
    },

    //Login 
    Login: (username, password) => {
        return new Promise(function (resolve, reject) {
            ApiService.post("/auth/login", {
                username,
                password
            })
                .then(({ data }) => {
                    resolve(data);

                })
                .catch(error => {
                    reject(error.response.data);
                });
        });
    },

    //Logout 
    Logout: () => {
        return new Promise(function (resolve, reject) {
            ApiService.customRequest({
                method: "post",
                url: ApiService.getBaseUrl() + "/auth/logout"
            })
                .then(res => {
                    resolve(res.data.message);
                })
                .catch(err => {
                    reject(err.response.data);
                });
        });
    },

    //Get Current User Details
    Authorize: async () => {
        return await ApiService.get("/users/me")
            .then(res => {
                return Promise.resolve(res.data);
            })
            .catch(error => {
                return Promise.reject(error.response.data);
            });
    }
};

export { userService };
