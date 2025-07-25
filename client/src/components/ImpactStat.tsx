import { Card, CardContent } from "@/components/ui/card";

interface ImpactStatProps {
  icon: React.ReactNode;
  number: string;
  label: string;
  trend?: string;
  color?: "primary" | "volunteer" | "impact" | "celebration";
}

const ImpactStat = ({ icon, number, label, trend, color = "primary" }: ImpactStatProps) => {
  const colorClasses = {
    primary: "text-primary",
    volunteer: "text-volunteer", 
    impact: "text-impact",
    celebration: "text-celebration"
  };

  return (
    <Card className="group hover:scale-105 transition-all duration-300 overflow-hidden animate-scale-in">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className={`text-3xl md:text-4xl font-bold ${colorClasses[color]} mb-1`}>
              {number}
            </div>
            <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              {label}
            </div>
            {trend && (
              <div className="text-xs text-volunteer font-medium mt-1">
                ↗ {trend}
              </div>
            )}
          </div>
          <div className={`${colorClasses[color]} transition-transform group-hover:scale-110 duration-300`}>
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ImpactStat;