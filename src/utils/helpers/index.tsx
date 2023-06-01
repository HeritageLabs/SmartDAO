import { cloudaryImgUpload } from "../../services/endpoints";

export const removeKeys = (removeItem: Function) => {
    removeItem('dao_group');
    removeItem('dao_logo');
    removeItem('dao_right');
    removeItem('dao_type');
    removeItem('voting_permission');
    removeItem('dao_info');
    removeItem('dao_socials');
};

export const uploadImage = (formData: any, setUrlLink: any, setIsUploading: any, setFileName: any, setResult: any) => {
    cloudaryImgUpload(formData)
    .then((res) => {
        setUrlLink(res.data.url);
        setFileName(`${res.data.original_filename}.${res.data.format}`);
        setResult({ type: 'success', message: 'Successfully uploaded!!!' })
    })
    .catch((error) => setResult({ type: 'error', message: 'Error occured' }))
    .finally(() => setIsUploading(false))
};