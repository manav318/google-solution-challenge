import * as React from "react"
import { cva } from "class-variance-authority"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const ChartConfig = {
  defaultColors: {
    primary: "var(--primary)",
    secondary: "var(--secondary)",
  }
}

const ChartContainer = ({ 
  children, 
  config,
  className 
}) => {
  const chartConfig = React.useMemo(() => {
    return {
      ...ChartConfig,
      ...config
    }
  }, [config])

  return (
    <div 
      className={cn("w-full aspect-[2/1] min-h-[180px]", className)}
      style={
        Object.entries(chartConfig).reduce((vars, [key, value]) => {
          if (typeof value === 'object') {
            Object.entries(value).forEach(([subKey, color]) => {
              vars[`--color-${subKey}`] = color
            })
          }
          return vars
        }, {})
      }
    >
      {children}
    </div>
  )
}

const tooltipStyles = cva(
  "flex flex-col gap-1 rounded-lg border bg-background p-2 text-sm shadow-md",
  {
    variants: {
      position: {
        top: "-translate-y-full",
        bottom: "translate-y-2",
      },
    },
    defaultVariants: {
      position: "top",
    },
  }
)

const ChartTooltip = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(tooltipStyles({ className }))}
      {...props}
    >
      {children}
    </div>
  )
}

const ChartTooltipContent = ({ active, payload, label, indicator = "line" }) => {
  if (!active || !payload?.length) return null

  return (
    <div className="flex flex-col gap-1">
      <div className="text-xs font-medium text-muted-foreground">{label}</div>
      <div className="flex flex-col gap-0.5">
        {payload.map((item, i) => (
          <div key={i} className="flex items-center gap-1">
            {indicator === "line" ? (
              <div
                className="h-0.5 w-3"
                style={{ backgroundColor: item.color }}
              />
            ) : (
              <div
                className="size-2 rounded-full"
                style={{ backgroundColor: item.color }}
              />
            )}
            <span className="font-medium">{item.value}</span>
            <span className="text-muted-foreground">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent }
