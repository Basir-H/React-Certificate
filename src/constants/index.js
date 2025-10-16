
//Images
import {
    certification06, 
    certification08, 
    certification10,
    certification12,
    certification13,
    certification14,
    filePen
} from '../assets'

// Icons
import { BsFillFileTextFill } from "react-icons/bs";
import { HiMiniCodeBracketSquare } from "react-icons/hi2";
import { IoBagSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaCampground } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaPen } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { FaRegFileCode } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";


// Navbar data
export const Navlinks = [
    {
        id:1,
        title:'Steps to Certfication'
    },
    {
        id:2,
        title:'Certficates'
    },
    {
        id:3,
        title:'pricing'
    },
    {
        id:4,
        title:'Blog'
    },
    {
        id:5,
        title:'Log In'
    },
    
];

// Benifits of certification data
export const benifits = [
    {
        id:1,
        title1:'Demonstrate your', 
        title2:'React competency',
        color:'text-[rgba(0,255,255,0.6)]',
        text:'A React certification validates your expertise in building robust, scalable applications with React. Employers and clients seek certified developers who stay ahead of the curve and deliver top-quality work. Showcase your commitment to excellence with a React credential built by recognized international experts.',
        img:certification06,
        reverse:false
    },
    {
        id:2,
        title1:'Enhanced', 
        title2:'Career Opportunities',
        color:'text-[rgba(0,255,255,0.6)]',
        text:'React skills are in high demand, and certification sets you apart. Stand out from the competition and unlock new job opportunities at leading companies. Certified developers can command higher salaries and faster advancement to senior roles. Invest in your future today.',
        img:certification08,
        reverse:true
    },
    {
        id:3,
        title1:'How Certification can',
        title2:' benefit your team',
        color:'text-[rgba(0,255,255,0.6)]',
        text:'Certifying your team cultivates a culture of continuous learning and improvement. Certified developers can enjoy boosted morale, improved productivity, and better efficiency through deepened skills and confidence. With a broader range of expertise, your team can tackle any challenge and ship better products faster.',
        img:certification10,
        reverse:false
    }
]

// Instructor Data
export const instructors = [
    {
        id:1,
        img:certification12,
        fName:'Aurora', 
        lName:'Scharff',
        job:'React Expert and Microsoft MVP in Web Technologies',
        text:'Aurora Scharff is a recognized React expert, Microsoft MVP in Web Technologies, and international conference speaker based in Norway. With extensive experience in React, Next.js, and React Server Components, she played a key role in shaping the React Certification program. The program is both comprehensive and practical-focused on real-world skills and aligned with industry best practices to deliver top-tier training. Her strong technical background and hands-on expertise make her a trusted voice in the React community and a core contributor to the React Certification.'
    },
    
];

// Steps Data
export const steps = [
    {
        id:1,
        stepNum:'STEP 1',
        icon:BsFillFileTextFill ,
        title:'Exam Preparation',
        text:'Review the exam preparation guide to ensure that you are familiar with the requirements of the exam and clear on what is expected'
    },
    {
        id:2,
        stepNum:'STEP 2',
        icon:HiMiniCodeBracketSquare,
        title:'Optional Training',
        text:'If you need additional training, there is additional self-study training available, or alternatively you can elect to attend the live, intensive bootcamp training sessions'
    },
    {
        id:3,
        stepNum:'STEP 3',
        img:filePen,
        title:'Take Examination',
        text:'Take the certification online proctored exam, which will consist of both multiple-choice questions and practical coding exercises',
        images:[certification13, certification14]
    }
]

// Research Data
export const researchs = [
    {
        id:1,
        title:'90%',
        icon:BsFillFileTextFill,
        text:'of developers would read the docs before taking the exam'
    },
    {
        id:2,
        title:'88%',
        img:filePen,
        text:'aim to achieve advanced or both certification levels'
    },
    {
        id:3,
        title:'82%',
        icon:IoBagSharp,
        text:'look to Certification to validate their skills and knowledge in React'
    },
    {
        id:4,
        title:'96%',
        icon:FaStar,
        text:'believe that having a React certification will enhance their professional credibility'
    }
]


export const levels = [
  {
    id: 1,
    title: "Junior React Developer",
    icon: FaReact,
    duration: "40 min",
    questions: "50 Questions",
    description:
      "Validate your React fundamentals with this certification. Demonstrate your ability to work with core concepts and basic implementations, enhancing your credibility with employers and clients. This certification confirms your readiness for junior React developer roles and provides a solid foundation for your career growth.",
    buttonText: "View Pricing",
    color: "text-cyan-400",
  },
  {
    id: 2,
    title: "Mid-Level React Developer",
    icon: FaReact,
    duration: "135 min",
    questions: "40 Questions and 105 minutes of Coding Challenges",
    description:
      "Prove your proficiency in intermediate React concepts and real-world applications. This certification showcases your ability to tackle complex projects, making you stand out in the job market. Ideal for developers looking to take on more challenging React roles and projects.",
    buttonText: "View Pricing",
    color: "text-orange-400",
  },
  {
    id: 3,
    title: "Senior React Developer",
    icon: FaReact,
    duration: "135 min",
    questions: "40 Questions and 105 minutes of Coding Challenges",
    description:
      "Demonstrate your expertise in React architecture and large-scale application development. This certification verifies your ability to lead React projects, solve advanced challenges, and architect enterprise-level applications. Position yourself as a top-tier React professional capable of driving complex, high-stakes projects.",
    buttonText: "View Pricing",
    color: "text-green-400",
  },
];


// Training Data
export const training = [
    {
        id:1,
        title1:'Self-Study', 
        title2:'Training',
        icon:HiMiniCodeBracketSquare,
        text:'Prepare at your own pace with our comprehensive self-study materials. Get on-demand access to interactive lessons, coding exercises, and quizzes tailored for:',
        list: [
            {
                id:1,
                list:'Junior React Developer Certification',
                icon:IoIosCheckmarkCircle
            },
            {
                id:2,
                list:'Mid-Level React Developer Certification',
                icon:IoIosCheckmarkCircle
            },
            {
                id:3,
                list:'Senior React Developer Certification',
                icon:IoIosCheckmarkCircle
            }
        ]
    },
    {
        id:2,
        title1:'Live ',
        title2:'Bootcamps',
        icon:FaCampground,
        text:'Prefer an immersive, instructor-led experience? Level up with our intensive live bootcamps conducted by React experts. Choose from:',
        list:[
            {
                id:1,
                list:'3-Day Mid-Level React Developer Bootcamp',
                icon:IoIosCheckmarkCircle
            },
            {
                id:2,
                list:'3-Day Senior React Developer Bootcamp',
                icon:IoIosCheckmarkCircle
            }
        ]
    }
]

// Pricing data
export const pricing = [
    {
        id:1,
        logo:FaPen,
        title:'Early access to the self-study training',
        text:'Get a head strat on your eaxm preparation with early access to the study material should you purchase this option.',
        icon:CiCirclePlus,
        
    },
    {
        id:2,
        logo:HiMiniCodeBracketSquare,
        title:'Priority delivery for certification voucher',
        text:'Use any after the examinations launch. Become one of the first to get your Certified React Developer Certificate!',
        icon:CiCirclePlus
    },
    {
        id:3,
        logo:BsFillFileTextFill,
        title:'Early access to the preparation guide',
        text:'Dive into detaile in this finalize guide and familarize yourself with the content of the exam. know what prepare before anyone else.',
        icon:CiCirclePlus
    },
    {
        id:4,
        logo:FaRegFileCode,
        title:'Launch Price Discounts',
        text:'Get your react Certification at a great launch discount. Limited time only.',
        icon:CiCirclePlus
    },
    {
        id:5,
        logo:FaHeart,
        title:'Be First to be Certified',
        text:'Get immediate access to junior and mid-level examinitaions.',
        icon:CiCirclePlus
    }


    
]



