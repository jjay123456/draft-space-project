import { useState } from 'react';
import PublicNavbar from "@/components/layout/PublicNavbar";
import GridBackground from "@/components/layout/GridBackground";
import TutorCard from '@/components/team/TutorCard';
import TutorFilters from '@/components/team/TutorFilters';
import TutorSkeleton from '@/components/team/TutorSkeleton';

// Simplified tutor data
const tutorsData = [
  {
    id: "1",
    name: "Dr. Sarah Chen", 
    age: 34,
    avatar: "/placeholder.svg"
  },
  {
    id: "2",
    name: "Prof. Michael Torres",
    age: 28,
    avatar: "/placeholder.svg"
  },
  {
    id: "3", 
    name: "Dr. Emily Watson",
    age: 42,
    avatar: "/placeholder.svg"
  },
  {
    id: "4",
    name: "Dr. Alex Rivera", 
    age: 31,
    avatar: "/placeholder.svg"
  },
  {
    id: "5",
    name: "Dr. Jamie Foster",
    age: 45,
    avatar: "/placeholder.svg"
  },
  {
    id: "6",
    name: "Dr. Taylor Brooks",
    age: 29,
    avatar: "/placeholder.svg"
  },
  {
    id: "7",
    name: "Dr. Maria Gonzalez",
    age: 38,
    avatar: "/placeholder.svg"
  },
  {
    id: "8",
    name: "Prof. David Kim",
    age: 52,
    avatar: "/placeholder.svg"
  },
  {
    id: "9",
    name: "Dr. Lisa Park",
    age: 27,
    avatar: "/placeholder.svg"
  },
  {
    id: "10",
    name: "Dr. James Miller",
    age: 41,
    avatar: "/placeholder.svg"
  },
  {
    id: "11",
    name: "Prof. Anna Thompson",
    age: 35,
    avatar: "/placeholder.svg"
  },
  {
    id: "12",
    name: "Dr. Robert Lee",
    age: 49,
    avatar: "/placeholder.svg"
  }
];

const Team = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [ageFilter, setAgeFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(false);

  const filteredTutors = tutorsData.filter(tutor => {
    const matchesSearch = tutor.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    let matchesAge = true;
    if (ageFilter !== 'all') {
      const age = tutor.age;
      switch (ageFilter) {
        case '20-30':
          matchesAge = age >= 20 && age <= 30;
          break;
        case '31-40':
          matchesAge = age >= 31 && age <= 40;
          break;
        case '41-50':
          matchesAge = age >= 41 && age <= 50;
          break;
        case '51+':
          matchesAge = age >= 51;
          break;
      }
    }
    
    return matchesSearch && matchesAge;
  });

  return (
    <GridBackground className="min-h-screen bg-gradient-to-br from-primary/5 via-accent/5 to-background">
      <PublicNavbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-transparent to-secondary/20 py-16 sm:py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
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