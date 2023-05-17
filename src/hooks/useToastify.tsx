import { toast } from "react-toastify";
import { Slide} from 'react-toastify';

export const useToastify = () => {
    const alertToast = (type: string | undefined, message: any) => toast(message, { icon: type === 'success' ? '🥳' : '😔', toastId: type, transition: Slide, type: type === 'success' ? 'success' : 'error' }); 

    return { alertToast }
};
