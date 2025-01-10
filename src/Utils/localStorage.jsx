
const employees = [
  {
        "id": "1",
        "firstName": "Shweta",
        "email": "shweta@example.com",
        "password": "123",
        "taskCounts": {
          "active": 2,
          "newTask": 2,
          "completed": 1,
          "failed": 0
        },
        "tasks": [
          {
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false,
            "title": "Complete report",
            "description": "Prepare the financial report for Q4",
            "taskDate": "2024-12-15",
            "category": "Work"
          },
          {
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false,
            "title": "Attend meeting",
            "description": "Participate in the team meeting regarding project updates",
            "taskDate": "2024-12-10",
            "category": "Meeting"
          },
          {
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false,
            "title": "Update website",
            "description": "Update the company website with new product listings",
            "taskDate": "2024-12-17",
            "category": "Development"
          }
        ]
      },
      {
        "id": "2",
        "firstName": "Arjun",
        "email": "employee2@example.com",
        "password": "123",
        "taskCounts": {
          "active": 2,
          "newTask": 2,
          "completed": 1,
          "failed": 0
        },
        "tasks": [
          {
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false,
            "title": "Review code",
            "description": "Review the code for bugs and optimize performance",
            "taskDate": "2024-12-16",
            "category": "Development"
          },
          {
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false,
            "title": "Client feedback analysis",
            "description": "Analyze client feedback and prepare a response",
            "taskDate": "2024-12-18",
            "category": "Customer Service"
          },
          {
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false,
            "title": "Complete training",
            "description": "Complete the online training for new software",
            "taskDate": "2024-12-12",
            "category": "Training"
          }
        ]
      },
      {
        "id": "3",
        "firstName": "Aashish",
        "email": "employee3@example.com",
        "password": "123",
        "taskCounts": {
          "active": 2,
          "newTask": 2,
          "completed": 1,
          "failed": 1
        },
        "tasks": [
          {
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": true,
            "title": "Organize files",
            "description": "Sort and organize project files for the new quarter",
            "taskDate": "2024-12-14",
            "category": "Administrative"
          },
          {
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false,
            "title": "Market research",
            "description": "Conduct market research for the upcoming product launch",
            "taskDate": "2024-12-20",
            "category": "Marketing"
          },
          {
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false,
            "title": "Team collaboration",
            "description": "Collaborate with the marketing team for an event",
            "taskDate": "2024-12-08",
            "category": "Collaboration"
          }
        ]
      },
      {
        "id": "4",
        "firstName": "Kabir",
        "email": "employee4@example.com",
        "password": "123",
        "taskCounts": {
          "active": 1,
          "newTask": 1,
          "completed": 2,
          "failed": 1
        },
        "tasks": [
          {
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": true,
            "title": "Inventory check",
            "description": "Complete an inventory check for end-of-year stock",
            "taskDate": "2024-12-18",
            "category": "Operations"
          },
          {
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false,
            "title": "Team collaboration",
            "description": "Collaborate with the marketing team for an event",
            "taskDate": "2024-12-08",
            "category": "Collaboration"
          },
          {
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false,
            "title": "Customer support",
            "description": "Provide customer support for billing inquiries",
            "taskDate": "2024-12-10",
            "category": "Customer Service"
          }
        ]
      },
      {
        "id": "5",
        "firstName": "Abhishek",
        "email": "employee5@example.com",
        "password": "123",
        "taskCounts": {
          "active": 2,
          "newTask": 1,
          "completed": 1,
          "failed": 1
        },
        "tasks": [
          {
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false,
            "title": "Product testing",
            "description": "Test new features in the latest software release",
            "taskDate": "2024-12-17",
            "category": "Quality Assurance"
          },
          {
            "active": true,
            "newTask": false,
            "completed": true,
            "failed": false,
            "title": "Write documentation",
            "description": "Write user documentation for the new product",
            "taskDate": "2024-12-13",
            "category": "Documentation"
          },
          {
            "active": false,
            "newTask": false,
            "completed": false,
            "failed": true,
            "title": "Complete survey",
            "description": "Complete the customer satisfaction survey",
            "taskDate": "2024-12-09",
            "category": "Survey"
          }
        ]
      }
]

const admin = [

    {
      "id": "A001",
      "email": "admin@example.com",
      "password": "123"
    }
  
]

export const setLocalStorage = () => {
  localStorage.setItem('employees',JSON.stringify(employees));
  localStorage.setItem('admin',JSON.stringify(admin));

};

export const getLocalStorage = () => {
const employees = JSON.parse(localStorage.getItem('employees') || "[]")
const admin = JSON.parse(localStorage.getItem('admin') || "[]")
return {employees, admin}
}

