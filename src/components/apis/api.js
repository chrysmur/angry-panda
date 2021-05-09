import axios from 'axios';

const profileData = {
    name: "kris sabonis",
    image: "https://lh3.googleusercontent.com/ogw/ADGmqu_O51d_kfpwwyinw7rb3kYYYAL7mmb1N82IZIvkmQ=s83-c-mo",
    title: "UI/UX Eng",
    summary: "I am some dude, who does some stuff",
    history: [
        {
            company: "C and C coorp",
            title: "Software engineer",
            start: "1-8-2017",
            end: "7-8-2020",
            Role: ["Create and maintain database designs",
                    "Created API for the user app using Nodejs",
                    "Created user app for the same app",
            ],
            stack: [
                "python",
                "JS",
                "Ruby"
            ]
        }
    ]
}

let ENV = "UIDEV"
const getProfile = (username) => {
    if(ENV === "UIDEV"){
        return {
            status: 200,
            profileData
        }
    } else {
        axios({
            method: "POST",
            url: "angry-panda/v1/profiles",
            data: { username },
        }).then(response => {
            return {
                status: 200,
                response
            }
        })
    }
}

export {getProfile}