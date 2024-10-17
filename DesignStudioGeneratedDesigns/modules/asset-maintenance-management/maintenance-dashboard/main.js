document.addEventListener('DOMContentLoaded', function() {
    // Maintenance Status Overview Chart
    var maintenanceData = [{
        values: [24, 8, 3, 56],
        labels: ['Scheduled', 'Ongoing', 'Overdue', 'Completed'],
        type: 'pie',
        marker: {
            colors: ['#007bff', '#28a745', '#ffc107', '#17a2b8']
        }
    }];

    var maintenanceLayout = {
        height: 300,
        margin: { t: 0, b: 0, l: 0, r: 0 },
        showlegend: false
    };

    Plotly.newPlot('maintenanceChart', maintenanceData, maintenanceLayout);

    // Asset Type Distribution Chart
    var assetTypeData = [{
        x: ['Vehicle', 'Equipment', 'Facility', 'IT Asset'],
        y: [15, 30, 10, 25],
        type: 'bar',
        marker: {
            color: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0']
        }
    }];

    var assetTypeLayout = {
        height: 300,
        margin: { t: 0, b: 40, l: 40, r: 0 },
        xaxis: { title: 'Asset Type' },
        yaxis: { title: 'Count' }
    };

    Plotly.newPlot('assetTypeChart', assetTypeData, assetTypeLayout);

    // Add event listeners for view details buttons
    document.querySelectorAll('.btn-view-details').forEach(function(btn) {
        btn.addEventListener('click', function() {
            alert('View details clicked. Implement your logic here.');
        });
    });
});
