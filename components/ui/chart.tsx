import * as React from "react"

interface ChartConfig {
  value: {
    label: string
    color: string
  }
}

interface ChartContainerProps {
  config: ChartConfig
  children: React.ReactNode
}

export function ChartContainer({ config, children }: ChartContainerProps) {
  return (
    <div style={{ "--color-value": config.value.color } as React.CSSProperties}>
      {children}
    </div>
  )
} 