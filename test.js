var dataset = [
  {
    'name': 'Total Income',
    'value': 1908.00
  },
  {
    'name': 'Total Spending',
    'value': 3433.00
  },
  {
    'name': 'Overspend',
    'value': -1525.00
  }
]

var sortedData = dataset.sort(function (a, b) {
  return b.value - a.value
})
var maxValue = sortedData[0].value
var minValue = sortedData[sortedData.length - 1].value

var margin = { top: 20, right: 30, bottom: 40, left: 30 }
var width = 500 - margin.left - margin.right
var height = 250 - margin.top - margin.bottom

var barPadding = 5
var barHeight = (height / sortedData.length)

var xScale = d3.scaleLinear()
  .domain([minValue, maxValue])
  .range([0, width])

var yScale = d3.scaleBand()
  .range([0, height])
  .domain(sortedData.map(function (d) {
    return d.name
  }))

var xAxis = d3.axisBottom()
  .scale(xScale)
  .tickFormat(function (d) { return '£' + d })

var yAxis = d3.axisLeft()
  .scale(yScale)

var svg = d3.select('#averages_bar_chart')
  .append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)
  .append('g')
  .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

var div = d3.select('#averages_bar_chart')
  .append('div')
  .attr('class', 'tooltip')
  .style('opacity', 0)

svg.selectAll('.bar')
  .data(sortedData)
  .enter()
  .append('rect')
  .attr('class', function (d) { return 'bar bar--' + (d.value < 0 ? 'negative' : 'positive') })
  .attr('x', function (d) { return xScale(Math.min(0, d.value)) })
  .attr('y', function (d, i) { return 0 + (i * barHeight) })
  .attr('width', function (d) { return Math.abs(xScale(d.value) - xScale(0)) })
  .attr('height', barHeight - barPadding)
  .on('mousover', function (d) {
    div.transition()
      .duration(200)
      .style('opacity', 1.0)
    div.html(d.name + ': ' + d.value)
      .style('left', (d3.event.pageX) + 'px')
      .style('top', (d3.event.pageY - 28) + 'px')
  })
  .on('mouseout', function (d) {
    div.transition()
      .duration(500)
      .style('opacity', 0)
  })

svg.append('g')
  .attr('transform', 'translate(0,' + height + ')')
  .call(xAxis)
  .append('text')
  .attr('x', width / 2)
  .attr('y', margin.bottom)
  .attr('class', 'graph-title')
  .text('Average Income and Spend Over the Last 6 Months')

svg.append('g')
  .attr('transform', 'translate(' + xScale(0) + ',0)')
  .call(yAxis)
