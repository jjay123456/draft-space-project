import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, MapPin } from 'lucide-react';

const regions = [
  { name: 'North America', active: true },
  { name: 'Europe', active: true },
  { name: 'Asia Pacific', active: true },
  { name: 'South America', active: false },
  { name: 'Africa', active: false },
  { name: 'Middle East', active: false }
];

export const GeographicReach = () => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-center text-xl font-semibold flex items-center justify-center gap-2">
          <Globe className="h-5 w-5" />
          Global Reach via Online Sessions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center mb-6">
          <p className="text-sm text-muted-foreground">
            Through Zoom and Google Meet, we connect volunteers worldwide
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {regions.map((region, index) => (
            <div
              key={index}
              className={`flex items-center gap-2 p-3 rounded-lg border transition-all ${
                region.active 
                  ? 'bg-primary/5 border-primary/20 text-foreground' 
                  : 'bg-muted/50 border-border text-muted-foreground'
              }`}
            >
              <MapPin className={`h-4 w-4 ${region.active ? 'text-primary' : 'text-muted-foreground'}`} />
              <span className="text-sm font-medium">{region.name}</span>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <div className="text-2xl font-bold text-primary">3</div>
          <p className="text-sm text-muted-foreground">Active regions</p>
        </div>
      </CardContent>
    </Card>
  );
};