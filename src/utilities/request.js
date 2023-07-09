import axios from "axios";

const BLOGURl='http://localhost:4000/posts';

export const postBlogToDb= (data) =>{

    return axios.post(BLOGURl,data);

}

export const getBlogFromDb= () =>{

    return axios.get(BLOGURl);

}

export const deleteBlogFromDb= (id) =>{

    return axios.delete(`${BLOGURl}/${id}`);

}
