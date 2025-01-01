"use client"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'

interface ChartProps {
  data: any[]
  filterBy: string
}

export function AnalyticsChart({ data, filterBy }: ChartProps) {
  const chartData = data.reduce((acc: any[], curr) => {
    const key = curr[filterBy]
    const existingGroup = acc.find(item => item.group === key)
    
    if (existingGroup) {
      existingGroup.engagement_rate = (existingGroup.engagement_rate * existingGroup.count + curr.engagement_rate) / (existingGroup.count + 1)
      existingGroup.count += 1
    } else {
      acc.push({
        group: key,
        engagement_rate: curr.engagement_rate,
        count: 1
      })
    }
    return acc
  }, [])

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="group" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="engagement_rate" fill="#8884d8" name="Engagement Rate" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
} 