'use client'

import { BarChart } from '@tremor/react'

const chartdata = [
  {
    name: '1AN',
    'Nota média': 9,
  },
  {
    name: '2AN',
    'Nota média': 5,
  },
  {
    name: '3AN',
    'Nota média': 7,
  },
  {
    name: '4AN',
    'Nota média': 6,
  },
  {
    name: '5AN',
    'Nota média': 9,
  },
]

export default function BarChartS() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-medium text-primary">Notas por turma</h1>
      <BarChart
        className="mt-6 w-full"
        data={chartdata}
        index="name"
        categories={['Nota média']}
        colors={['blue']}
        yAxisWidth={48}
      />
    </div>
  )
}
