interface AssetDetails {
  assetId: string;
  assetName: string;
  category: string;
  purchaseDate: string;
  purchasePrice: number;
  currentLocation: string;
  assignedTo: string;
  warranty: {
    provider: string;
    type: string;
    startDate: string;
    endDate: string;
    coverageDetails: string;
  };
  maintenanceRecords: Array<{
    date: string;
    type: string;
    description: string;
    cost: number;
  }>;
}

interface ActionElement {
  text: string;
  class: string;
  action: string;
}

class AssetDetailsComponent {
  private assetDetails: AssetDetails | null;
  private actionElements: ActionElement[];

  constructor() {
    this.assetDetails = null;
    this.actionElements = [];
  }

  init(): void {
    this.getAssetDetails();
    this.getActionElements();
  }

  getAssetDetails(): void {
    // Simulating an API call
    setTimeout(() => {
      this.assetDetails = {
        assetId: 'AMS-001',
        assetName: 'Laptop - Dell XPS 15',
        category: 'Electronics - Laptop',
        purchaseDate: '2023-01-15',
        purchasePrice: 1999.99,
        currentLocation: 'IT Department - Room 302',
        assignedTo: 'John Doe (Employee ID: EMP-1234)',
        warranty: {
          provider: 'Dell Inc.',
          type: 'Extended Hardware Warranty',
          startDate: '2023-01-15',
          endDate: '2026-01-14',
          coverageDetails: '24/7 technical support, on-site service, accidental damage protection'
        },
        maintenanceRecords: [
          {
            date: '2023-06-15',
            type: 'Routine Check',
            description: 'Software updates and system optimization',
            cost: 0
          },
          {
            date: '2023-09-22',
            type: 'Repair',
            description: 'Replaced faulty keyboard',
            cost: 150
          }
        ]
      };
      this.updateUI();
    }, 100);
  }

  getActionElements(): void {
    fetch('action-elements.json')
      .then(response => response.json())
      .then(data => {
        this.actionElements = data.elements;
        this.updateActionButtons();
      })
      .catch(error => console.error('Error fetching action elements:', error));
  }

  updateUI(): void {
    if (this.assetDetails) {
      this.updateElement('[data-asset-id]', `Asset ID: ${this.assetDetails.assetId}`);
      this.updateElement('[data-asset-name]', this.assetDetails.assetName);
      
      const generalInfoTable = document.querySelector('#general table, .general-info-table');
      if (generalInfoTable) {
        generalInfoTable.innerHTML = `
          <tr><th>Asset Name:</th><td>${this.assetDetails.assetName}</td></tr>
          <tr><th>Category:</th><td>${this.assetDetails.category}</td></tr>
          <tr><th>Purchase Date:</th><td>${this.assetDetails.purchaseDate}</td></tr>
          <tr><th>Purchase Price:</th><td>$${this.assetDetails.purchasePrice.toFixed(2)}</td></tr>
          <tr><th>Current Location:</th><td>${this.assetDetails.currentLocation}</td></tr>
          <tr><th>Assigned To:</th><td>${this.assetDetails.assignedTo}</td></tr>
        `;
      }

      this.updateWarrantyInfo();
      this.updateMaintenanceRecords();
      // Add more update methods for other sections as needed
    }
  }

  updateElement(selector: string, content: string): void {
    const element = document.querySelector(selector);
    if (element) {
      element.textContent = content;
    }
  }

  updateWarrantyInfo(): void {
    if (this.assetDetails && this.assetDetails.warranty) {
      const warrantyTable = document.querySelector('#warranty table, .warranty-table');
      if (warrantyTable) {
        warrantyTable.innerHTML = `
          <tr><th>Provider:</th><td>${this.assetDetails.warranty.provider}</td></tr>
          <tr><th>Type:</th><td>${this.assetDetails.warranty.type}</td></tr>
          <tr><th>Start Date:</th><td>${this.assetDetails.warranty.startDate}</td></tr>
          <tr><th>End Date:</th><td>${this.assetDetails.warranty.endDate}</td></tr>
          <tr><th>Coverage Details:</th><td>${this.assetDetails.warranty.coverageDetails}</td></tr>
        `;
      }
    }
  }

  updateMaintenanceRecords(): void {
    if (this.assetDetails && this.assetDetails.maintenanceRecords) {
      const maintenanceTable = document.querySelector('#maintenance table tbody, .maintenance-table tbody');
      if (maintenanceTable) {
        maintenanceTable.innerHTML = this.assetDetails.maintenanceRecords.map(record => `
          <tr>
            <td>${record.date}</td>
            <td>${record.type}</td>
            <td>${record.description}</td>
            <td>$${record.cost.toFixed(2)}</td>
          </tr>
        `).join('');
      }
    }
  }

  updateActionButtons(): void {
    const buttonContainer = document.querySelector('.action-buttons, .mt-4');
    if (buttonContainer) {
      buttonContainer.innerHTML = '';
      this.actionElements.forEach(element => {
        const button = document.createElement('button');
        button.textContent = element.text;
        button.className = `btn ${element.class}`;
        button.addEventListener('click', () => this.onActionClick(element.action));
        buttonContainer.appendChild(button);
      });
    }
  }

  onActionClick(action: string): void {
    console.log(`Action clicked: ${action}`);
    // Implement action logic here
  }
}

// Initialize the component
document.addEventListener('DOMContentLoaded', () => {
  const component = new AssetDetailsComponent();
  component.init();
});
