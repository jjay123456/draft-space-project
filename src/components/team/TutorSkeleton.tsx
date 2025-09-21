import { Skeleton } from '@/components/ui/skeleton';
import { Card } from '@/components/ui/card';

const TutorSkeleton = () => {
  return (
    <Card className="rounded-2xl border border-border/20 bg-card shadow-sm p-6 flex flex-col items-center justify-center h-64">
      <Skeleton className="w-20 h-20 rounded-full mb-4" />
      <Skeleton className="h-5 w-32 mb-2" />
      <Skeleton className="h-4 w-16" />
    </Card>
  );
};

export default TutorSkeleton;