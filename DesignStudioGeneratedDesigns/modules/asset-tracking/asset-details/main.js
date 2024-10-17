$(document).ready(function() {
    // Utilization chart
    var trace = {
        x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        y: [75, 80, 85, 70, 90, 95],
        type: 'scatter'
    };

    var layout = {
        title: 'Monthly Utilization (%)',
        xaxis: { title: 'Month' },
        yaxis: { title: 'Utilization %' }
    };

    Plotly.newPlot('utilizationChart', [trace], layout);

    // Event listeners for buttons
    $('.btn-edit-asset').on('click', function() {
        // Logic for editing asset
        console.log('Edit asset clicked');
    });

    $('.btn-print-details').on('click', function() {
        // Logic for printing details
        console.log('Print details clicked');
    });
});
