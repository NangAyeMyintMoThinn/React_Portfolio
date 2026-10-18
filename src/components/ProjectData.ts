export type ProjectData = {
    projectName: string
    descriptions: string[]
    images?: string[]
}

export const ProjectData: ProjectData[] = [
    {
        projectName: "Frontend Cinema Project",
        descriptions: [
            "Designed and developed responsive cinema website interfaces.",
            "Created movie listing UI pages.",
            "Implemented interactive navigation and responsive layouts.",
            "Focused on user experience and modern web design practices."
        ],
        images: [
            "/images/nateHome.png",
            "/images/Trending.png",
            "/images/Popular.png"
        ]
    },

    {
        projectName: "Pizza Ordering System",
        descriptions: [
            "Designed and developed a responsive pizza ordering website.",
            "Implemented customer registration and authentication features.",
            "Developed shopping cart and order management functionality.",
            "Integrated MySQL database operations for products and orders.",
            "Built both frontend and backend components of the application."
        ],
        images: [
            "/images/login.png",
            "/images/ProductList.png",
            "/images/categoryList.png",
            "/images/SignUp.png",
            "/images/CusMenu.png",
            "/images/CusOrder.png",
            "/images/OrderSt.png",
            "/images/OrderList.png",
            "/images/CusList.png"
        ]
    },

    {
        projectName: "Restaurant Ordering & Management System",
        descriptions: [
        "Developed reservation management features for future and current reservations.",
        "Implemented reservation cancellation functionality.",
        "Built kitchen order status tracking modules.",
        "Developed customer order status and billing features.",
        "Created customer login and registration interfaces."
        ],
        images: [
            "/images/12signup.png",
            "/images/13login.png",
            "/images/14dashboard.png",
            "/images/15current.png",
            "/images/16future.png",
            "/images/17futureTb.png",
            "/images/18reservation.png",
            "/images/19menu.png",
            "/images/20order.png",
            "/images/21total.png",
            "/images/22cusOrder.png",
            "/images/23Kitchen.png",
            "/images/24profile.png",
            "/images/1staffLogin.png",
            "/images/2lowStock.png",
            "/images/3inventory.png",
            "/images/4inventory.png",
            "/images/5cat.png",
            "/images/6cat.png",
            "/images/7menu.png",
            "/images/8menu.png",
            "/images/9table.png",
            "/images/10table.png",
            "/images/11record.png",    
        ]
    },

    {
        projectName: "Disaster Preparedness & Weather Forecasting System",
        descriptions: [
        "Developed responsive user interfaces.",
        "Integrated OpenWeatherMap API to provide real-time weather information and 24-hour weather forecasts.",
        "Implemented an interactive Leaflet map for location-based weather information.",
        "Researched and developed a Myanmar Disaster History page.",
        "Collaborated with team members to promote disaster awareness and preparedness."
        ],
        images: [
            "/images/Map.png",
            "/images/History1.png",
            "/images/History2.png",
            "/images/AboutUs1.png",
            "/images/Mission.png",
            "/images/Vision.png",    
        ]
    },

    {
        projectName: "Smart Home Automation Prototype",
        descriptions:[
        "Developed the Windows Forms dashboard for device monitoring and control.",
        "Designed and managed the SQLite database structure."
        ]
        // images:[]
    }
]