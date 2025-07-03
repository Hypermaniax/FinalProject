import {
  Wifi,
  Snowflake,
  Flame,
  Coffee,
  Wind,
  Bath,
  Droplet,
  ClipboardEdit,
  ShowerHead,
  Utensils,
  Soup,
  Wine,
  ConciergeBell,
  Microwave,
  CookingPot,
  Dumbbell,
  WavesLadder,
  Thermometer,

  HandHeart,
  StretchHorizontal,
  UserCheck,
  Building,
  ParkingCircle,
  GripVertical,
  PanelTopClose,
  Mountain,
  Trees,
  Salad,
  Landmark,
  Sun,
  Car,
  ParkingSquare,
  ParkingMeter,
  Plane,
  CarFront,
  Bike,
  BatteryCharging,
  Tv,
  Play,
  Gamepad2,
  Dice5,
  Mic2,
  Film,
  Bell,
  Camera,
  FireExtinguisher,
  AlarmSmoke,
  ShieldCheck,
  BriefcaseMedical,
  Baby,
  UserCog,
  Shirt,
  WashingMachine,
  Brush,
  Briefcase,
  BellRing,
  PawPrint,
  Dog,
  Recycle,
  SunMedium,
  Droplets,
  PlaySquare,
  Refrigerator,
  Anvil,
  Accessibility,
  HeartHandshake
} from "lucide-react";

const facilityOptions = [
  // 🛏️ Essentials
  { value: "Wifi", label: "Wifi", icon: Wifi },
  { value: "Air Conditioning", label: "Air Conditioning", icon: Snowflake },
  { value: "Heating", label: "Heating", icon: Flame },
  { value: "Electric Kettle", label: "Electric Kettle", icon: Coffee },
  { value: "Hair Dryer", label: "Hair Dryer", icon: Wind },
  { value: "Iron", label: "Iron", icon: Anvil },
  { value: "Towels Provided", label: "Towels Provided", icon: Bath },
  { value: "Toiletries", label: "Toiletries", icon: Droplet },
  { value: "Work Desk", label: "Work Desk", icon: ClipboardEdit },
  { value: "Private Bathroom", label: "Private Bathroom", icon: ShowerHead },

  // 🍽️ Food & Drink
  { value: "Breakfast Included", label: "Breakfast Included", icon: Utensils },
  { value: "Restaurant", label: "Restaurant", icon: Soup },
  { value: "Bar", label: "Bar", icon: Wine },
  { value: "Mini Fridge", laGrillHotbel: "Mini Fridge", icon: Refrigerator },
  { value: "Room Service", label: "Room Service", icon: ConciergeBell },
  { value: "Coffee Maker", label: "Coffee Maker", icon: Coffee },
  { value: "Microwave", label: "Microwave", icon: Microwave },
  {
    value: "Fully Equipped Kitchen",
    label: "Fully Equipped Kitchen",
    icon: CookingPot,
  },

  // 💪 Wellness & Recreation
  { value: "Gym", label: "Gym", icon: Dumbbell },
  { value: "Pool", label: "Pool", icon: WavesLadder },
  { value: "Spa", label: "Spa", icon: HeartHandshake },
  { value: "Sauna", label: "Sauna", icon: Thermometer },
  { value: "Hot Tub", label: "Hot Tub", icon: Bath },
  { value: "Massage Service", label: "Massage Service", icon: HandHeart },
  { value: "Yoga Studio", label: "Yoga Studio", icon: StretchHorizontal },
  { value: "Personal Trainer", label: "Personal Trainer", icon: UserCheck },

  // ♿ Accessibility
  { value: "Elevator", label: "Elevator", icon: Building }, // closest to Elevator
  {
    value: "Wheelchair Accessible",
    label: "Wheelchair Accessible",
    icon: Accessibility
  },
  {
    value: "Accessible Parking",
    label: "Accessible Parking",
    icon: ParkingCircle,
  },
  {
    value: "Bathroom Grab Bars",
    label: "Bathroom Grab Bars",
    icon: GripVertical,
  },

  // 🌿 Outdoor
  { value: "Balcony", label: "Balcony", icon: PanelTopClose },
  { value: "Terrace", label: "Terrace", icon: Mountain },
  { value: "Garden", label: "Garden", icon: Trees },
  { value: "BBQ Facilities", label: "BBQ Facilities", icon: Microwave },
  { value: "Outdoor Dining Area", label: "Outdoor Dining Area", icon: Salad },
  { value: "Rooftop Lounge", label: "Rooftop Lounge", icon: Landmark },
  { value: "Sun Loungers", label: "Sun Loungers", icon: Sun },

  // 🚗 Transport
  { value: "Parking", label: "Parking", icon: ParkingSquare },
  { value: "Free Parking", label: "Free Parking", icon: ParkingMeter },
  { value: "Valet Parking", label: "Valet Parking", icon: Car },
  { value: "Airport Shuttle", label: "Airport Shuttle", icon: Plane },
  { value: "Car Rental", label: "Car Rental", icon: CarFront },
  { value: "Bicycle Rental", label: "Bicycle Rental", icon: Bike },
  {
    value: "Electric Vehicle Charging",
    label: "Electric Vehicle Charging",
    icon: BatteryCharging,
  },

  // 📺 Entertainment
  { value: "TV", label: "TV", icon: Tv },
  { value: "Streaming Service", label: "Streaming Service", icon: Play },
  { value: "Game Console", label: "Game Console", icon: Gamepad2 },
  { value: "Board Games", label: "Board Games", icon: Dice5 },
  { value: "Karaoke", label: "Karaoke", icon: Mic2 },
  { value: "Theater Room", label: "Theater Room", icon: Film },

  // 🔒 Safety
  { value: "24h Reception", label: "24h Reception", icon: Bell },
  { value: "Security Cameras", label: "Security Cameras", icon: Camera },
  {
    value: "Fire Extinguisher",
    label: "Fire Extinguisher",
    icon: FireExtinguisher,
  },
  { value: "Smoke Detector", label: "Smoke Detector", icon: AlarmSmoke },
  { value: "Safe Deposit Box", label: "Safe Deposit Box", icon: ShieldCheck },
  { value: "First Aid Kit", label: "First Aid Kit", icon: BriefcaseMedical },

  // 👨‍👩‍👧 Family-friendly
  { value: "Crib", label: "Crib", icon: Baby },
  { value: "High Chair", label: "High Chair", icon: Baby }, // replaced Chair
  { value: "Kids Playground", label: "Kids Playground", icon: PlaySquare },
  {
    value: "Babysitting Service",
    label: "Babysitting Service",
    icon: Baby, // replaced BabyCarriage
  },
  { value: "Children's Pool", label: "Children's Pool", icon: UserCog },

  // 🧺 Services
  { value: "Laundry Service", label: "Laundry Service", icon: Shirt },
  { value: "Dry Cleaning", label: "Dry Cleaning", icon: WashingMachine },
  { value: "Daily Housekeeping", label: "Daily Housekeeping", icon: Brush }, // replaced Broom
  { value: "Concierge", label: "Concierge", icon: ConciergeBell },
  { value: "Luggage Storage", label: "Luggage Storage", icon: Briefcase },
  { value: "Wake-up Call", label: "Wake-up Call", icon: BellRing },

  // 🐾 Pet & Eco
  { value: "Pet Friendly", label: "Pet Friendly", icon: PawPrint },
  { value: "Pet Bowls", label: "Pet Bowls", icon: Dog },
  { value: "Recycling Bins", label: "Recycling Bins", icon: Recycle },
  { value: "Solar Power", label: "Solar Power", icon: SunMedium },
  {
    value: "Water Conservation System",
    label: "Water Conservation System",
    icon: Droplets,
  },
];

export default facilityOptions;
