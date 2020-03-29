import { ApiService } from "./api.services";

const userService = {
    //Signup start
    SignupStart: ({ username, email, phone }) => {
        return new Promise(function (resolve, reject) {
            ApiService.post("/users", {
                username,
                email,
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
    SignupEnd: ({ email, school, department, country, region, name }) => {
        return new Promise(function (resolve, reject) {
            ApiService.put(`/users/update/profile/${email}`, {
                name,
                school,
                department,
                country,
                region,
            })
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(error => {
                    reject(error.response.data);
                });
        });
    },

    //Login Start
    LoginStart: (username) => {
        return new Promise(function (resolve, reject) {
            ApiService.post("/auth/login", {
                username
            })
                .then(({ data }) => {
                    resolve(data);

                })
                .catch(error => {
                    reject(error.response.data);
                });
        });
    },

    //Login End
    LoginEnd: (code) => {
        return new Promise(function (resolve, reject) {
            ApiService.post(`/auth/login/verify/${code}`)
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(error => {
                    reject(error.response.data);
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
    },

    //Update Profile
    UpdateProfile: ({ email, username, school, department, country, phone, region, about }) => {
        return new Promise(function (resolve, reject) {
            ApiService.put(`/users/update`, {
                about,
                email,
                username,
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
};

export { userService };
