import React from 'react';
import { getMessages } from '../firebase';

function useMessages(proposalId: string) {
    const [comments, setComments] = React.useState([]);

    React.useEffect(() => {
        const unsubscribe = getMessages(proposalId, setComments);
        return unsubscribe;
    }, [proposalId]);

    return comments;
}

export { useMessages };