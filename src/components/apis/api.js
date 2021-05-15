import axios from 'axios';

const allProfiles = [
    {
        name:"kris sabonis",
        title: "UI/UX Eng",
        image: ""
    },
    {
        name:"Tyline Omar",
        title: "UI",
        image: "Software Engineer"
    }
]
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
            roles: ["Create and maintain database designs",
                    "Created API for the user app using Nodejs",
                    "Created user app for the same app",
            ],
            stack: [
                "python",
                "JS",
                "Ruby"
            ],
        },
        {
            company: "Atomic Idiot",
            title: "Fullstack",
            start: "1-9-2020",
            end: "1-1-2021",
            roles: ["Worked with a team of 3 to create the backend using Ruby on rails",
                    "Created the CI pipeline for deployment",
                    "Wrote tests for the Node JS app",
                    "Created the data pipeline for analytics using Apache storm"
            ],
            stack: [
                "python",
                "JS",
                "Ruby"
            ],
        }
    ]
}
const allBlog = [
    {
        title:"introduction to Py",
        content:" A lot of junk information that nobody wants to know about",
        tags: ["python", "programming"],
        dateUpdated: "1-3-2021",
        author: "kris sabonis"

    },
    {
        title:"Python for signal processing",
        content:" this is a blog about how I became a python programmer. The journey began when in the field of gnu radio when I needed to process some sounds from  a system we were working on.",
        tags: ["python", "programming"],
        dateUpdated: "1-3-2021",
        author:"Kung Lao"

    }
]
let ENV = "UIDEV"
export const getProfile = (username) => {
    if(ENV === "UIDEV"){
        return {
            status: 200,
            profileData
        }
    } else {
        axios({
            method: "POST",
            url: `angry-panda/v1/profiles/${username}`,
            data: { username },
        }).then(response => {
            return {
                status: 200,
                profileData: response.data
            }
        })
    }
}
export const getAllBlog = () => {
    if(ENV === "UIDEV") {
        return {
            status:200,
            allBlog
        }
    } else{
        axios({
            method: "GET",
            url:"angry-panda/v1/blogs",
        }).then(response=> {
            return {
                status:  200,
                allBlog:response.data

            }
        })
    }
}

export const getAllProfiles = () => {
    if(ENV === "UIDEV") {
        return {
            status:200,
            allProfiles
        }
    } else{
        axios({
            method: "GET",
            url:"angry-panda/v1/profiles",
        }).then(response=> {
            return {
                status:  200,
                allBlog:response.data

            }
        })
    }
}