import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search } from 'lucide-react';

interface TutorFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  ageFilter: string;
  onAgeFilterChange: (age: string) => void;
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

      {/* Age Filter */}
      <Select value={ageFilter} onValueChange={onAgeFilterChange}>
        <SelectTrigger className="w-full sm:w-48 bg-background border-border/20 focus:border-primary/50">
          <SelectValue placeholder="Filter by age" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Ages</SelectItem>
          <SelectItem value="20-30">20-30 years</SelectItem>
          <SelectItem value="31-40">31-40 years</SelectItem>
          <SelectItem value="41-50">41-50 years</SelectItem>
          <SelectItem value="51+">51+ years</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default TutorFilters;