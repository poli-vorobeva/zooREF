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

export type videoDataType = {
    animal: string,
    //activeVideo: { videoLink: string, videoScreen: string },
    videos: { videoLink: string, videoScreen: string }[]

}
export const videoAnimalsData = [
    {
        animal: 'panda',
        videos: [
            {
                videoLink: "https://www.youtube.com/watch?v=OObOQ2GElhA",
                videoScreen: 'https://i.ytimg.com/vi/OObOQ2GElhA/default.jpg'
            },
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
    },
    {
        animal: 'alligator',
        videos: [
            {
                videoLink: 'https://www.youtube.com/watch?v=A3Nneq4wCVw',
                videoScreen: 'https://i.ytimg.com/vi/A3Nneq4wCVw/default.jpg'
            },
            {
                videoLink: 'https://www.youtube.com/watch?v=g_673VIf_vA',
                videoScreen: 'https://i.ytimg.com/vi/g_673VIf_vA/default.jpg'
            },
            {
                videoLink: 'https://www.youtube.com/watch?v=U1bN3-FJD7s',
                videoScreen: 'https://i.ytimg.com/vi/U1bN3-FJD7s/default.jpg'
            },
            {
                videoLink: 'https://www.youtube.com/watch?v=X5Im4mMFK4A',
                videoScreen: 'https://i.ytimg.com/vi/X5Im4mMFK4A/default.jpg'
            },
            {
                videoLink: 'https://www.youtube.com/watch?v=Cnu23SpKTiU',
                videoScreen: 'https://i.ytimg.com/vi/Cnu23SpKTiU/default.jpg'
            },
        ]
    },
    {
        animal:'eagle',
        videos:[
            {
                videoLink: 'https://www.youtube.com/watch?v=RB4RCOe-ZEw',
                videoScreen: 'https://i.ytimg.com/vi/RB4RCOe-ZEw/default.jpg',
            },
            {
                videoLink: 'https://www.youtube.com/watch?v=XsB-wC24XGc',
                videoScreen: 'https://i.ytimg.com/vi/XsB-wC24XGc/default.jpg'
            },
            {
                videoLink: 'https://www.youtube.com/watch?v=rLnd4V8Gfq4',
                videoScreen: 'https://i.ytimg.com/vi/rLnd4V8Gfq4/default.jpg'
            },
            {
                videoLink: 'https://www.youtube.com/watch?v=hecXupPpE9o',
                videoScreen: 'https://i.ytimg.com/vi/hecXupPpE9o/default.jpg'
            },
            {
                videoLink: 'https://www.youtube.com/watch?v=VzgJ65pUehQ',
                videoScreen: 'https://i.ytimg.com/vi/VzgJ65pUehQ/default.jpg'
            },
            {
                videoLink: 'https://www.youtube.com/watch?v=zZpVlhehzVE',
                videoScreen: 'https://i.ytimg.com/vi/zZpVlhehzVE/default.jpg'
            }
        ]
    },
    {
        animal:'gorilla',
        videos:[
            {
                videoScreen: 'https://i.ytimg.com/vi/_Gz5AG5O1xQ/default.jpg',
                videoLink: 'https://www.youtube.com/watch?v=_Gz5AG5O1xQ'
            },
            {
                videoScreen: 'https://i.ytimg.com/vi/Y_ksdk27O8s/default.jpg',
                videoLink: 'https://www.youtube.com/watch?v=Y_ksdk27O8s'
            },
            {
                videoScreen: 'https://i.ytimg.com/vi/x2H7zcqjplc/default.jpg',
                videoLink: 'https://www.youtube.com/watch?v=x2H7zcqjplc'
            },
            {
                videoScreen: 'https://i.ytimg.com/vi/iY2T4Tsv5zY/default.jpg',
                videoLink: 'https://www.youtube.com/watch?v=iY2T4Tsv5zY'
            },
            {
                videoScreen: 'https://i.ytimg.com/vi/yRJQjBt7J_8/default.jpg',
                videoLink: 'https://www.youtube.com/watch?v=yRJQjBt7J_8'
            },
            {
                videoScreen: 'https://i.ytimg.com/vi/S1TVgKypBwE/default.jpg',
                videoLink: 'https://www.youtube.com/watch?v=S1TVgKypBwE'
            }
        ]
    }
]
