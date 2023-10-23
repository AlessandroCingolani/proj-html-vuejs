import { reactive } from 'vue';

export const store = reactive({
  courses: [
    {
      imgCourse:'artist-course-08-480x480.jpg',
      name:'The Acrylic Painting Academy',
      price:'$18.00',
      numberLessons: 4,
      students:50,
      views:null,
      date:null,
      location:null
    },
    {
      imgCourse:'artist-course-07-480x480.jpg',
      name:'Drawing and Shading: Complete Course',
      price:'$21.00',
      numberLessons: 14,
      students:50,
      views:null,
      date:null,
      location:null
    },
    {
      imgCourse:'artist-course-06-480x480.jpg',
      name:'The Color Theory for Digital Artist',
      price:'$19.00',
      numberLessons: 7,
      students:50,
      views:null,
      date:null,
      location:null
    },
    {
      imgCourse:'artist-course-05-480x480.jpg',
      name:'Ultimate Guide to Digital Sketching fo Beginner',
      price:'$35.00',
      numberLessons: 14,
      students:50,
      views:null,
      date:null,
      location:null
    },
    {
      imgCourse:'artist-course-04-480x480.jpg',
      name:'Portrait Drawing The Smart Way',
      price:'$19.00',
      numberLessons: 2,
      students:50,
      views:null,
      date:null,
      location:null
    },
    {
      imgCourse:'artist-course-03-480x480.jpg',
      name:'Mastering Watercolor Painting from Beginner',
      price:'$19.00',
      numberLessons: 9,
      students:50,
      views:null,
      date:null,
      location:null
    },
    {
      imgCourse:'artist-course-02-480x480.jpg',
      name:'The Art & Science of Drawing',
      price:'$25.00',
      numberLessons: 4,
      students:50,
      views:null,
      date:null,
      location:null
    },
    {
      imgCourse:'artist-course-01-480x480.jpg',
      name:'The Colored Pencil Drawing Course',
      price:'$22.00',
      numberLessons: 6,
      students:50,
      views:null,
      date:null,
      location:null
    },
  ],
  latestBlog:[
    {
      imgCourse:'artist-blog-03-480x356.jpeg',
      title:'Artist',
      name:'Brush Strokes Energize Trees in Paintings',
      views:688,
      date:'May 15,2020'
    },
    {
      imgCourse:'artist-blog-02-500x680.jpg',
      title:'Artist',
      name:'Connection Between Self-Portraits Identity',
      views:397,
      date:'May 15,2020'
    },
    {
      imgCourse:'artist-blog-01-480x356.jpg',
      title:'Artist',
      name:'Pocket-Sized Notebooks Hold Miniature Paintings',
      views:603,
      date:'May 15,2020'
    },
  ],
  workTogheter:[
    {
      imgCourse:'artist-event-04-250x300.jpg',
      date:'NOV 22, 2020',
      name:'Storytelling Workshop',
      location:'Texas,US'
    },
    {
      imgCourse:'artist-event-03-250x300.jpg',
      date:'OCT 10, 2020',
      name:'Painting Art Contest 2020',
      location:'New York,US'
    },
    {
      imgCourse:'artist-event-02-250x300.jpg',
      date:'NOV 23, 2020',
      name:'International Art Fair 2020',
      location:'Hamburg,Germany'
    },
    {
      imgCourse:'artist-event-01-250x300.jpg',
      date:'DEC 15, 2020',
      name:'Street Performance: Call for Artist',
      location:'illinois,US'
    },
  ],
  testimonials: [
    {
      visible:true,
      name:'Mina Hollace',
      role:'/Freelancer',
      imgProfile:'artist-testimonial-avatar-04.jpg',
      title:'High level of eficiency and scientific teaching methods',
      description:'I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.',
    },
    {
      visible:true,
      name:'Madley Pondor',
      role:'/IT Specialist',
      imgProfile:'artist-testimonial-avatar-01.jpg',
      title:'Professional team of specialists and passionate mentors at reach',
      description:'I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.',
    },
    {
      visible:true,
      name:'Florence Themes',
      role:'/Multimedia Admin',
      imgProfile:'artist-testimonial-avatar-02.jpg',
      title:'lt s a choice of quality for people with special needs',
      description:'l m a very strict person so I require everything to be organized and neat. Then, l Il be able to make things right and shina MaxCoach guys just got me.',
    },
    {
      visible:false,
      name:'Pinco Jenner',
      role:'/Ipsum Admin',
      imgProfile:'artist-testimonial-avatar-03.jpg',
      title:'Lorem Ipsum',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum',
    }
  ],
  newsletter:[]
})