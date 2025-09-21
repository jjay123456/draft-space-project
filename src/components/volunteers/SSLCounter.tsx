import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const SSLCounter = () => {
  const [count, setCount] = useState(0);
  const targetCount = 2847; // Total SSL hours earned by volunteers

  useEffect(() => {
    const increment = targetCount / 100; // Animate over 100 steps
    const timer = setInterval(() => {
      setCount(prev => {
        const next = prev + increment;
        if (next >= targetCount) {
          clearInterval(timer);
          return targetCount;
        }
        return next;
      });
    }, 30); // 30ms intervals for smooth animation

    return () => clearInterval(timer);
  }, [targetCount]);

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-center text-xl font-semibold">Total SSL Hours Earned</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl md:text-6xl font-bold text-primary mb-2">
            {Math.floor(count).toLocaleString()}+
          </div>
          <p className="text-sm text-muted-foreground">
            Student Service Learning Hours by our volunteers
          </p>
        </div>
      </CardContent>
    </Card>
  );
};