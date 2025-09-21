import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

const data = [
  { name: 'High School', value: 60, fill: 'hsl(var(--primary))' },
  { name: 'College', value: 25, fill: 'hsl(var(--accent))' },
  { name: 'Adult', value: 15, fill: 'hsl(var(--secondary))' }
];

const chartConfig = {
  value: {
    label: "Percentage",
    color: "hsl(var(--primary))",
  },
};

export const DemographicsChart = () => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-center text-xl font-semibold">Who Volunteers with iHEAR</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px]">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="name" 
              stroke="hsl(var(--foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              stroke="hsl(var(--foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}%`}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Bar 
              dataKey="value" 
              radius={[4, 4, 0, 0]}
              fill="hsl(var(--primary))"
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};