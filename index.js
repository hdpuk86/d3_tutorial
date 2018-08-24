// https://scrimba.com/p/pb4WsX/c4WLes8 -- tutorials

// // Selecting and Manipulation
// d3.select('h1')
//   .style('color', 'red')
//   .attr('class', 'heading')
//   .text('Test Header')
//
// d3.select('body')
//   .append('p')
//   .text('New Paragraph 1')
//
// d3.select('body')
//   .append('p')
//   .text('New Paragraph 2')
//
// d3.select('body')
//   .append('p')
//   .text('New Paragraph 3')
//
// d3.selectAll('p')
//   .style('color', 'blue')

// // data loading and binding
// var dataset = [1, 2, 3, 4, 5]

// d3.select('body')
//   .selectAll('p')
//   .data(dataset)
//   .enter()
//   .append('p')
//   .text(function (d) { return d })

// // simple bar chart
// // adding labels
// // var dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160]
//
// var svgWidth = 500
// var svgHeight = 300
//
// var barPadding = 5
// var barWidth = (svgWidth / dataset.length)
//
// var svg = d3.select('svg')
//   .attr('width', svgWidth)
//   .attr('height', svgHeight)
//
//
// svg.selectAll('rect')
//   .data(dataset)
//   .enter() // call the following methods for each data point
//   .append('rect')
//   .attr('y', function (d) {
//     return svgHeight - d - 25
//   })
//   .attr('height', function (d) {
//     return d
//   })
//   .attr('width', barWidth - barPadding)
//   .attr('transform', function (d, i) {
//     var translate = [barWidth * i, 0]
//     return 'translate(' + translate + ')'
//   })
//   .attr('fill', '#3c99b3')
//
// svg.selectAll('text')
//   .data(dataset)
//   .enter()
//   .append('text')
//   .text(function (d) {
//     return d
//   })
//   .attr('y', function (d, i) {
//     return svgHeight - 5
//   })
//   .attr('x', function (d, i) {
//     return barWidth * i + barWidth / 4
//   })
//   .attr('fill', '#000')

// // scale
// var dataset = [1, 2, 3, 4, 5]
//
// var svgWidth = 500
// var svgHeight = 300
// var barPadding = 5
// var barWidth = (svgWidth / dataset.length)
//
// var svg = d3.select('svg')
//   .attr('width', svgWidth)
//   .attr('height', svgHeight)
//
// var yScale = d3.scaleLinear()
//   .domain([0, d3.max(dataset)])
//   .range([0, svgHeight])
//
// var barChart = svg.selectAll('rect')
//   .data(dataset)
//   .enter()
//   .append('rect')
//   .attr('y', function (d) {
//     return svgHeight - yScale(d)
//   })
//   .attr('height', function (d) {
//     return yScale(d)
//   })
//   .attr('width', barWidth - barPadding)
//   .attr('transform', function (d, i) {
//     var translate = [barWidth * i, 0]
//     return 'translate(' + translate + ')'
//   })

// // Axes
// // d3.axisTop()
// // d3.axisRight()
// // d3.axisBottom()
// // d3.axisLeft()
//
// var data = [80, 100, 56, 120, 180, 30, 40, 120, 160]
//
// var svgWidth = 500
// var svgHeight = 300
//
// var svg = d3.select('svg')
//   .attr('width', svgWidth)
//   .attr('height', svgHeight)
//
// var xScale = d3.scaleLinear()
//   .domain([0, d3.max(data)])
//   .range([0, svgWidth])
//
// var yScale = d3.scaleLinear()
//   .domain([0, d3.max(data)])
//   .range([svgHeight, 0])
//
// var xAxis = d3.axisBottom()
//   .scale(xScale)
//
// var yAxis = d3.axisLeft()
//   .scale(yScale)
//
// svg.append('g')
//   .attr('transform', 'translate(50, 10)')
//   .call(yAxis)
//
// var xAxisTranslate = svgHeight - 20
//
// svg.append('g')
//   .attr('transform', 'translate(50, ' + xAxisTranslate + ')')
//   .call(xAxis)

// // creating svg elements
// var svgWidth = 600
// var svgHeight = 500
//
// var svg = d3.select('svg')
//   .attr('width', svgWidth)
//   .attr('height', svgHeight)
//   .attr('class', 'svg-container')
//
// var line = svg.append('line')
//   .attr('x1', 100)
//   .attr('x2', 500)
//   .attr('y1', 50)
//   .attr('y2', 50)
//   .attr('stroke', 'red')
//   .attr('stroke-width', 5)
//
// var rect = svg.append('rect')
//   .attr('x', 100)
//   .attr('y', 100)
//   .attr('width', 200)
//   .attr('height', 100)
//   .attr('fill', '#9B95FF')
//
// var circle = svg.append('circle')
//   .attr('cx', 200)
//   .attr('cy', 300)
//   .attr('r', 80)
//   .attr('fill', '#7CE8D5')

// // pie chart
// var data = [
//   { 'platform': 'Android', 'percentage': 40.11 },
//   { 'platform': 'Windows', 'percentage': 36.69 },
//   { 'platform': 'iOS', 'percentage': 13.06 }
// ]
//
// var svgWidth = 500
// var svgHeight = 300
// var radius = Math.min(svgWidth, svgHeight) / 2
//
// var svg = d3.select('svg')
//   .attr('width', svgWidth)
//   .attr('height', svgHeight)
//
// // Create group element to hold pie chart
// var g = svg.append('g')
//   .attr('transform', 'translate(' + radius + ',' + radius + ')')
//
// var color = d3.scaleOrdinal(d3.schemeCategory10)
//
// var pie = d3.pie().value(function (d) {
//   return d.percentage
// })
//
// var path = d3.arc()
//   .outerRadius(radius)
//   .innerRadius(0)
//
// var arc = g.selectAll('arc')
//   .data(pie(data))
//   .enter()
//   .append('g')
//
// arc.append('path')
//   .attr('d', path)
//   .attr('fill', function (d) { return color(d.data.percentage) })
//
// var label = d3.arc()
//   .outerRadius(radius)
//   .innerRadius(0)
//
// arc.append('text')
//   .attr('transform', function (d) {
//     return 'translate(' + label.centroid(d) + ')'
//   })
//   .attr('text-anchor', 'middle')
//   .text(function (d) { return d.data.platform + ' : ' + d.data.percentage + '% ' })
