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
