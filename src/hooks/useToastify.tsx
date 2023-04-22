import { toast } from "react-toastify";
import { Slide} from 'react-toastify';

export const useToastify = () => {
    const alertToast = (type: string | undefined, message: string) => toast(message, { icon: '🥳', toastId: type, transition: Slide, type: type === 'success' ? 'success' : 'error' }); 

    return { alertToast }
};
