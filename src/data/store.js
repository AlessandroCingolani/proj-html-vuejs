import { reactive } from 'vue';

export const store = reactive({
  courses: [
    {
      name:'The Acrylic Painting Academy',
      price:'$18.00',
      numberLessons: 4,
      students:50,
      views:null,
      date:null,
      location:null
    },
    {
      name:'Drawing and Shading: Complete Course',
      price:'$21.00',
      numberLessons: 14,
      students:50,
      views:null,
      date:null,
      location:null
    },
    {
      name:'The Color Theory for Digital Artist',
      price:'$19.00',
      numberLessons: 7,
      students:50,
      views:null,
      date:null,
      location:null
    },
    {
      name:'Ultimate Guide to Digital Sketching fo Beginner',
      price:'$35.00',
      numberLessons: 14,
      students:50,
      views:null,
      date:null,
      location:null
    },
    {
      name:'Portrait Drawing The Smart Way',
      price:'$19.00',
      numberLessons: 2,
      students:50,
      views:null,
      date:null,
      location:null
    },
    {
      name:'Mastering Watercolor Painting from Beginner',
      price:'$19.00',
      numberLessons: 9,
      students:50,
      views:null,
      date:null,
      location:null
    },
    {
      name:'The Art & Science of Drawing',
      price:'$25.00',
      numberLessons: 4,
      students:50,
      views:null,
      date:null,
      location:null
    },
    {
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
      title:'Artist',
      name:'Brush Strokes Energize Trees in Paintings',
      views:688,
      date:'May 15,2020'
    },
    {
      title:'Artist',
      name:'Connection Between Self-Portraits Identity',
      views:397,
      date:'May 15,2020'
    },
    {
      title:'Artist',
      name:'Pocket-Sized Notebooks Hold Miniature Paintings',
      views:603,
      date:'May 15,2020'
    },
  ],
  workTogheter:[
    {
      date:'NOV 22,2020',
      name:'Storytelling Workshop',
      location:'Texas,US'
    },
    {
      date:'OCT 10,2020',
      name:'Painting Art Contest 2020',
      location:'New York,US'
    },
    {
      date:'NOV 23,2020',
      name:'International Art Fair 2020',
      location:'Hamburg,Germany'
    },
    {
      date:'DEC 15,2020',
      name:'Street Performance: Call for Artist',
      location:'illinois,US'
    },
  ],
  testimonials: [
    {
      name:'Mina Hollace',
      role:'/Freelancer',
      imgProfile:'artist-testimonial-avatar-04.jpg',
      title:'High level of eficiency and scientific teaching methods',
      description:'I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.',
    },
    {
      name:'Madley Pondor',
      role:'/IT Specialist',
      imgProfile:'artist-testimonial-avatar-01.jpg',
      title:'Professional team of specialists and passionate mentors at reach',
      description:'I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.',
    },
    {
      name:'Florence Themes',
      role:'/Multimedia Admin',
      imgProfile:'artist-testimonial-avatar-02.jpg',
      title:'lt s a choice of quality for people with special needs',
      description:'l m a very strict person so I require everything to be organized and neat. Then, l Il be able to make things right and shina MaxCoach guys just got me.',
    }
  ]
})