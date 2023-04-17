interface AllDaoProps {
    type: string;
    proposer: string;
    wallet_addr: string;
    desc: string;
    likes: number;
    dislikes: number;
    appr_date: string;
    id: number;
    name: string;
}

export const AllActiveProposal: AllDaoProps[] = [
    {
        name: 'Validator',
        type: 'Function Call',
        proposer: 'relayer.function.near',
        wallet_addr: '0xA344d9ssc90d',
        desc: 'This is the new Proposal for you',
        likes: 10,
        dislikes: 0,
        appr_date: '16 April 2023',
        id: 123,
    },
    {
        name: 'Validator',
        type: 'Function Call',
        proposer: 'relayer.function.near',
        wallet_addr: '0xA344d9ssc90d',
        desc: 'This is the new Proposal for you',
        likes: 10,
        dislikes: 0,
        appr_date: '16 April 2023',
        id: 124,
    },
    {
        name: 'Validator',
        type: 'Function Call',
        proposer: 'relayer.function.near',
        wallet_addr: '0xA344d9ssc90d',
        desc: 'This is the new Proposal for you',
        likes: 10,
        dislikes: 0,
        appr_date: '16 April 2023',
        id: 125,
    },
    {
        name: 'Validator',
        type: 'Function Call',
        proposer: 'relayer.function.near',
        wallet_addr: '0xA344d9ssc90d',
        desc: 'This is the new Proposal for you',
        likes: 10,
        dislikes: 0,
        appr_date: '16 April 2023',
        id: 126,
    },
]