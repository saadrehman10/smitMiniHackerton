const { default: axios } = require("axios")

export const fetchBlogs = async () => {
    await axios.get('http://localhost:5000/blogs').then((res) => {
        console.log(res.data)
        return res.data
    }).catch((error) => {
        console.log(error)
        return error
    })
}
