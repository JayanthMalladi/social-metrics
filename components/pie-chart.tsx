"use client"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'
import { SocialData, FilterType } from "@/app/dashboard/page"

interface ChartData {
  name: string
  value: number
}

interface PieChartProps {
  data: SocialData[]
  filterBy: FilterType
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8']

export function PieChartComponent({ data, filterBy }: PieChartProps) {
  if (!data || data.length === 0) {
    return <div>No data available</div>
  }

  const chartData = data.reduce((acc: ChartData[], curr) => {
    if (!curr || !curr[filterBy]) return acc
    
    const key = String(curr[filterBy as keyof SocialData])
    const existing = acc.find(item => item.name === key)
    
    if (existing) {
      existing.value++
    } else {
      acc.push({ name: key, value: 1 })
    }
    return acc
  }, [])

  if (chartData.length === 0) {
    return <div>No data available for this filter</div>
  }

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label={(entry) => entry.name}
          >
            {chartData.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
} 