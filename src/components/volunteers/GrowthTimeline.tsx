import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Circle } from 'lucide-react';

const steps = [
  'Learn about hearing and inclusivity',
  'Start tutoring online',
  'Earn SSL hours and develop leadership',
  'Create long-term impact in education'
];

export const GrowthTimeline = () => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-center text-xl font-semibold">How Volunteers Grow With Us</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center text-center md:text-left">
              <div className="flex flex-col items-center mb-2 md:mb-0 md:mr-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-semibold mb-2">
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block w-full h-px bg-border mx-4" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium leading-tight">{step}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="md:hidden w-px h-8 bg-border my-2" />
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};