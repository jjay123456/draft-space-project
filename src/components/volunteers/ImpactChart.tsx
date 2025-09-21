import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

const data = [
  { name: 'Tutoring', value: 50, color: 'hsl(var(--primary))' },
  { name: 'Leadership & Organization', value: 20, color: 'hsl(var(--accent))' },
  { name: 'Training', value: 15, color: 'hsl(var(--secondary))' },
  { name: 'Outreach & Support', value: 15, color: 'hsl(var(--success))' }
];

const chartConfig = {
  tutoring: {
    label: "Tutoring",
    color: "hsl(var(--primary))",
  },
  leadership: {
    label: "Leadership & Organization",
    color: "hsl(var(--accent))",
  },
  training: {
    label: "Training",
    color: "hsl(var(--secondary))",
  },
  outreach: {
    label: "Outreach & Support",
    color: "hsl(var(--success))",
  },
};

export const ImpactChart = () => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-center text-xl font-semibold">Where Volunteers Contribute</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[300px]">
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, value }) => `${name}: ${value}%`}
              labelLine={false}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};