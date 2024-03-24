'use client'
import 'chart.js/auto'
import { Line } from 'react-chartjs-2'

const revenueData = [12, 20, 17, 29, 8, 20, 17]

const FuelGraph = () => {
  return (
    <>
      <div className='mt-7' />
      <Line
        data={{
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          datasets: [
            {
              label: 'monthly cost',
              data: revenueData,
              //   fill: 'start',
              //   backgroundColor: '#6550eba8',
              tension: 0.4,
              borderColor: '#9b0102'
            }
          ]
        }}
        options={{
          scales: {
            x: {
              grid: {
                display: false
              }
            },
            y: {
              display: false,
              grid: {
                display: false
              }
            }
          },
          plugins: {
            legend: {
              display: false
            }
          }
        }}
        plugins={[
          {
            id: 'hoverLine',
            beforeDatasetDraw: (chart: any, args, options) => {
              const {
                ctx,
                data,
                tooltip,
                chartArea,
                scales: { x, y }
              } = chart
              const { top, bottom, left, right, height, width } = chartArea

              if (tooltip._active.length) {
                // console.log(tooltip.x)
                // console.log(tooltip.y)
                const xCoord = x.getPixelForValue(
                  tooltip.dataPoints[0].dataIndex
                )
                const yCoord = y.getPixelForValue(
                  tooltip.dataPoints[0].parsed.y
                )
                const gradient = ctx.createLinearGradient(0, 0, 0, 500)
                gradient.addColorStop(1, '#9b0102')
                gradient.addColorStop(0, 'rgba(203, 176, 177, 0)')
                ctx.save()
                ctx.beginPath()
                ctx.fillStyle = gradient
                ctx.fillRect(xCoord - 20, yCoord, 40, bottom)
                ctx.closePath()
              }
            }
          }
        ]}
      />
    </>
  )
}

export default FuelGraph
