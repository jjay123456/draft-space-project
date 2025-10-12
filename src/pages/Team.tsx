import { useState } from 'react';
import PublicNavbar from "@/components/layout/PublicNavbar";
import GridBackground from "@/components/layout/GridBackground";
import TutorCard from '@/components/team/TutorCard';
import TutorFilters from '@/components/team/TutorFilters';
import TutorSkeleton from '@/components/team/TutorSkeleton';

const tutorsData = [
  {
    id: 1,
    name: "Howard M. Ren",
    grade: "11th",
    languages: "English + Chinese",
    focus: "Specializes in pronunciation and conversation skills for high school students with strong foundations.",
    style: "Breaks down complex concepts and annotates materials for easy understanding.",
    hobbies: "Music lover and enjoys spending time with friends.",
    imageUrl: "/images/tutors/howard-ren.png"
  },
  {
    id: 2,
    name: "Emily Ye",
    grade: "10th",
    languages: "English + Chinese",
    focus: "Passionate about helping students learn and understand new concepts.",
    style: "Uses bilingual approach to communicate thoroughly with students.",
    hobbies: "Enjoys painting and drawing.",
    imageUrl: "/images/tutors/emily-ye.jpg"
  },
  {
    id: 3,
    name: "Zhixing Marcus Ke",
    grade: "9th",
    languages: "English + Mandarin",
    focus: "Committed to making communication accessible for everyone.",
    style: "Patient approach with focus on English pronunciation for Mandarin speakers, using phonetic comparisons.",
    hobbies: "Soccer, math problems, and guitar. Can juggle a tennis ball 600+ times!",
    imageUrl: "/images/tutors/zhixing-marcus-ke.jpg"
  },
  {
    id: 4,
    name: "Bryan Wang",
    grade: "9th",
    languages: "English + Chinese",
    focus: "Helps students who need extra patience. Personal experience with hearing challenges drives motivation.",
    style: "Uses positive reinforcement and checks for understanding after each lesson.",
    hobbies: "Origami and piano.",
    imageUrl: ""
  },
  {
    id: 5,
    name: "Danniel Wang",
    grade: "8th",
    languages: "English + Chinese",
    focus: "Helps students build confidence and improve conversation skills.",
    style: "Very patient with step-by-step explanations for quick learning.",
    hobbies: "Volleyball and ping pong enthusiast.",
    imageUrl: ""
  },
  {
    id: 6,
    name: "Ella Wen",
    grade: "10th",
    languages: "English + Chinese",
    focus: "Helps students express themselves and seize opportunities through better English skills.",
    style: "Patient and clear explanations. Creates supportive environment for questions and growth.",
    hobbies: "Cooking, dancing, and drawing.",
    imageUrl: ""
  },
  {
    id: 7,
    name: "Sadie Wang",
    grade: "8th",
    languages: "English + Chinese",
    focus: "Helps kids learn English and express themselves effectively.",
    style: "Uses visual tools and conversational approach to connect with students.",
    hobbies: "Drawing and violin.",
    imageUrl: "/images/tutors/sadie-wang.jpg"
  },
  {
    id: 8,
    name: "Sophia Wang",
    grade: "10th",
    languages: "English + Chinese",
    focus: "Dedicated to providing equal educational opportunities for all students.",
    style: "Emphasizes clear communication and repetition. Values patience above all.",
    hobbies: "Tennis, F1, JDM cars, and sneaker culture.",
    imageUrl: ""
  },
  {
    id: 9,
    name: "Cali Chan",
    grade: "9th",
    languages: "English + Chinese",
    focus: "Specializes in pronunciation and speaking skills for confident communication.",
    style: "Provides in-depth descriptions and multiple examples to ensure full understanding.",
    hobbies: "Competitive rhythmic gymnastics and traveling.",
    imageUrl: ""
  },
  {
    id: 10,
    name: "Charlene Chen",
    grade: "10th",
    languages: "English + Chinese",
    focus: "Fosters communication inclusivity by developing confident communication skills for all ages.",
    style: "Patient and adaptive. Uses multimedia and real-life scenarios to make learning engaging.",
    hobbies: "Documentaries, reading, piano, and music. Cross-domain explorer.",
    imageUrl: "/images/tutors/charlene-chen.jpeg"
  },
  {
    id: 11,
    name: "Amber Lin",
    grade: "10th",
    languages: "English + Chinese + Spanish",
    focus: "As a cochlear implant user, provides understanding and support to help students build communication confidence.",
    style: "Emphasizes clear communication and individualized support with patience.",
    hobbies: "Rock climbing and sports. Has an unusually long tongue!",
    imageUrl: ""
  }
];

const Team = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [ageFilter, setAgeFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(false);

  const filteredTutors = tutorsData.filter(tutor => {
    const matchesSearch = tutor.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    let matchesGrade = true;
    if (ageFilter !== 'all') {
      const gradeNum = parseInt(tutor.grade);
      switch (ageFilter) {
        case '8th':
          matchesGrade = gradeNum === 8;
          break;
        case '9th':
          matchesGrade = gradeNum === 9;
          break;
        case '10th':
          matchesGrade = gradeNum === 10;
          break;
        case '11th':
          matchesGrade = gradeNum === 11;
          break;
      }
    }
    
    return matchesSearch && matchesGrade;
  });

  return (
    <GridBackground className="min-h-screen bg-gradient-to-br from-primary/5 via-accent/5 to-background">
      <PublicNavbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-transparent to-secondary/20 py-16 sm:py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary/90 via-secondary/85 to-accent/90 bg-clip-text text-transparent mb-6">
            Meet Our Tutors
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with our dedicated educators who are passionate about creating 
            inclusive learning environments for every student.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        {/* Filters */}
        <TutorFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          ageFilter={ageFilter}
          onAgeFilterChange={setAgeFilter}
        />

        {/* Tutors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {isLoading ? (
            Array.from({ length: 8 }).map((_, index) => (
              <TutorSkeleton key={index} />
            ))
          ) : (
            filteredTutors.map((tutor) => (
              <TutorCard key={tutor.id} tutor={tutor} />
            ))
          )}
        </div>

        {/* Empty State */}
        {!isLoading && filteredTutors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No tutors found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </GridBackground>
  );
};

export default Team;