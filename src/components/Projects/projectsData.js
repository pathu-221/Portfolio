import funiro from '../../assets/projects/funiro.png';
import clayshop from '../../assets/projects/clay-shop.png';
import chatapp from '../../assets/projects/chatapp.png'
import netflixclone from '../../assets/projects/netflixclone.png';
import dummymedia from '../../assets/projects/dummymedia.png';
export const projects = {
    mini: [
        {
            name: 'Funiro Website', 
            description: 'A simple website design I implemented from figma, using HTML and css',
            live: 'https://funiro-figma.netlify.app',
            github: 'https://github.com/pathu-221/funiro-figma-design',
            image: funiro
        }, 
    ],
    frontend: [
        {
            name: 'Clay shop', 
            description: 'An e commerce application, with user authentication and cool design with variety of products',
            live: 'https://clay-shopsss.netlify.app',
            github: 'https://github.com/pathu-221/clay-shop',
            image: clayshop
        },
        {
            name: 'Real time chat app', 
            description: 'An open discussion app using React js for the front-end, which allowed users to send and receive messages in real-time, similar to a group chat',
            live: 'https://realtime-chat-app-two.vercel.app',
            github: 'https://github.com/pathu-221/react-chat-app',
            image: chatapp
        },
        {
            name: 'Netflix clone', 
            description: 'A copy of homepage of netflix, utilized TMDB api to retrieve data of movies and react js for front end',
            live: 'https://netflix-clone-2661d.web.app',
            github: 'https://github.com/pathu-221/my-netflix-clone',
            image: netflixclone
        },
    ],
    fullstack: [
        {
            name: 'Dummy social media application', 
            description: 'Implemented a social media application with unique username creation, post creation, and like functionality, providing users with a platform to share their interests',
            live: 'https://next-js-blog-site-three.vercel.app',
            github: 'https://github.com/pathu-221/next-js-blog-site',
            image: dummymedia
        },
    ]
}