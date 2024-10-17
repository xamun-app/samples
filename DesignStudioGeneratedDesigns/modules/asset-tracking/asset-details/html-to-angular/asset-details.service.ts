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

class AssetDetailsService {
  private actionElementsUrl: string;

  constructor() {
    this.actionElementsUrl = 'action-elements.json';
  }

  getAssetDetails(): Promise<AssetDetails> {
    return new Promise((resolve) => {
      // Simulating an API call
      setTimeout(() => {
        resolve({
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
        });
      }, 100);
    });
  }

  getActionElements(): Promise<ActionElement[]> {
    return fetch(this.actionElementsUrl)
      .then(response => response.json())
      .then(data => data.elements);
  }
}
