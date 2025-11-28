import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface TileProps {
  number: string;
  label: string;
  span: string;
  delay?: number;
}

interface TieredTileGridProps {
  tiles: TileProps[];
}

export const TieredTileGrid = ({ tiles }: TieredTileGridProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[120px] md:auto-rows-[160px]">
      {tiles.map((tile, index) => (
        <motion.div
          key={tile.label}
          className={cn(tile.span)}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: (tile.delay || index) * 0.1, duration: 0.5 }}
        >
          <Card className="h-full flex flex-col items-center justify-center p-4 md:p-6 bg-card/30 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2 md:mb-3">
              {tile.number}
            </div>
            <div className="text-xs md:text-sm text-muted-foreground text-center">
              {tile.label}
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};
