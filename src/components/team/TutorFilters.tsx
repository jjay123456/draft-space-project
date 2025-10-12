import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search } from 'lucide-react';

interface TutorFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  ageFilter: string;
  onAgeFilterChange: (filter: string) => void;
}

const TutorFilters = ({ 
  searchQuery, 
  onSearchChange, 
  ageFilter, 
  onAgeFilterChange 
}: TutorFiltersProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-2xl mx-auto">
      {/* Search Bar */}
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          type="text"
          placeholder="Search tutors by name..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 bg-background border-border/20 focus:border-primary/50 transition-colors"
        />
      </div>

      {/* Grade Filter */}
      <Select value={ageFilter} onValueChange={onAgeFilterChange}>
        <SelectTrigger className="w-full sm:w-48 bg-background border-border/20 focus:border-primary/50">
          <SelectValue placeholder="Filter by grade" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Grades</SelectItem>
          <SelectItem value="8th">8th Grade</SelectItem>
          <SelectItem value="9th">9th Grade</SelectItem>
          <SelectItem value="10th">10th Grade</SelectItem>
          <SelectItem value="11th">11th Grade</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default TutorFilters;