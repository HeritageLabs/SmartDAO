import axios from "axios";

export const cloudaryImgUpload = async (avatar: any) => axios({
    method: 'POST',
    url: 'https://api.cloudinary.com/v1_1/dboqyj4bp/image/upload',
    data: avatar,
  });