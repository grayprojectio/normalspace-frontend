export const attributeList = [
    {
        id: 1,
        name: 'Conservator',
        value: 23
    },
    {
        id: 2,
        name: 'Peer',
        value: 11
    },
    {
        id: 3,
        name: 'Mind',
        value: 43
    },
    {
        id: 4,
        name: 'Feeling',
        value: 65
    },
    {
        id: 5,
        name: 'Order',
        value: 5
    },
    {
        id: 6,
        name: 'Disorder',
        value: 6
    },
    {
        id: 7,
        name: 'Altruistic',
        value: 14
    },
    {
        id: 8,
        name: 'Separate',
        value: 99
    },
    {
        id: 9,
        name: 'Extravert',
        value: 0
    },
    {
        id: 10,
        name: 'Introvert',
        value: 54
    }
];

export const profile = {
    id: 1,
    username: 'rick',
    description: 'A change strategy is characterised by a willingness to take risks, a need to show mastery, a need for recognition and to achieve results. Ambitious ambitions and a thirst for influence sometimes lead to revolutionary developments. If this path ends in victory, the winners are not judged.'
}

// загружаются в профиль
export const taskResults = [
    {
        id: 1,
        passed: false,
        profileId: 1,
        taskId: 1,
        thing: null
    },
    {
        id: 2,
        passed: false,
        profileId: 1,
        taskId: 2,
        thing: {
            id: 543,
            photoUrl: 'https://165dc6ae-1b27-4856-8ca7-b1edf208847c.selcdn.net/images/thumbs/materials/sections/137911/user1000x0_137911.webp?1669787444',
            description: 'телебуба',
            archived: false,
            createAt: '2002-02-01'
        }
    }
]

export const tasks = [
    {
        id: 1,
        number: 1,
        description: 'The thing you spend the most time with every day',
        questions: [
            {
                id: 2,
                taskId: 1,
                number: 31,
                answerOptions: [
                    {
                        id: 4,
                        questionId: 2,
                        text: 'ел бурдики'
                    },
                    {
                        id: 5,
                        questionId: 2,
                        text: 'понимал клевщю'
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        number: 69,
        description: 'The thing you spend the most time with every day',
        questions: [
            {
                id: 3,
                taskId: 2,
                number: 32,
                answerOptions: [
                    {
                        id: 6,
                        questionId: 3,
                        text: 'волк добрый'
                    },
                    {
                        id: 7,
                        questionId: 3,
                        text: 'волк волосатый'
                    }
                ]
            }
        ]
    }
]



























