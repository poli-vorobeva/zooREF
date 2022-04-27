export const animalsData = [
    {
        animal: 'panda',
        link: '#toPanda',
        imgSrc: './public/assets/map-slider/1.png',
        population: 'About 1,590 individuals',
        habitat: 'emperate forests high in the mountains of southwest China',
        diet: `A panda's daily diet consists almost entirely of the leaves,
                    stems and shoots of various bamboo species. Bamboo contains
                    very little nutritional value so pandas
                    must eat 12-38kg every day to meet their energy needs.`,
    },
    {
        animal: 'gorilla',
        link: '#toGorilla',
        imgSrc: './public/assets/map-slider/2.png',
        population: '',
        habitat: '',
        diet: ''
    },
    {animal: 'elephant', link: '', imgSrc: './public/assets/map-slider/3.png', population: '', habitat: '', diet: ''},
    {animal: 'eagle', link: '', imgSrc: './public/assets/map-slider/4.png', population: '', habitat: '', diet: ''},
    {animal: 'lion', link: '', imgSrc: './public/assets/map-slider/5.png', population: '', habitat: '', diet: ''},
    {animal: 'tiger', link: '', imgSrc: './public/assets/map-slider/6.png', population: '', habitat: '', diet: ''},
    {animal: 'alligator', link: '', imgSrc: './public/assets/map-slider/7.png', population: '', habitat: '', diet: ''},
    {animal: 'zebra', link: '', imgSrc: './public/assets/map-slider/8.png', population: '', habitat: '', diet: ''}
]

export type videoDataType={
    animal: string,
    activeVideo: {videoLink: string,videoScreen: string},
    videos: {videoLink: string,videoScreen: string}[]

}
export const videoAnimalsData = [
    {
        animal: 'panda',
        activeVideo: {
            videoLink: "https://www.youtube.com/watch?v=OObOQ2GElhA",
            videoScreen: 'https://i.ytimg.com/vi/OObOQ2GElhA/default.jpg'
        },
        videos: [
            {
                videoLink: 'https://www.youtube.com/watch?v=ogpqmb1j5Jw',
                videoScreen: 'https://i.ytimg.com/vi/ogpqmb1j5Jw/default.jpg'
            },
            {
                videoLink: 'https://www.youtube.com/watch?v=pOyQluexkRw',
                videoScreen: 'https://i.ytimg.com/vi/pOyQluexkRw/default.jpg'
            },
            {
                videoLink: 'https://www.youtube.com/watch?v=I-ovzUNno7g',
                videoScreen: 'https://i.ytimg.com/vi/I-ovzUNno7g/default.jpg'
            },
            {
                videoLink: 'https://www.youtube.com/watch?v=kPiZyt4zdGc',
                videoScreen: 'https://i.ytimg.com/vi/kPiZyt4zdGc/default.jpg'
            },
            {
                videoLink: 'https://www.youtube.com/watch?v=5DzTwbyBhEc',
                videoScreen: 'https://i.ytimg.com/vi/5DzTwbyBhEc/default.jpg'
            },
        ]
    }
]
