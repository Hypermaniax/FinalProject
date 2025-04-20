import creditcard from '../assets/icons/creditcard.svg'
import figure from '../assets/icons/figure.svg'
import point from '../assets/icons/point.svg'
import arrow from '../assets/icons/arrow.svg'
import map from '../assets/icons/map.svg'


const steps = [
    {
        title: "Choose Destination",
        icon: map, // Replace with your SVG/icon component
        description:
            "Start by selecting the city or area where you want to find a space, we’ve got listings in multiple locations!"
    },
    {
        title: "Find a Space",
        icon: arrow, // Replace with SVG/icon
        description:
            "Browse available spaces in that city\nfilter by category, date, capacity, and more."
    },
    {
        title: "Make a Booking",
        icon: point, // Replace with SVG/icon
        description:
            "Explore space details, photos, pricing, and reviews.\nFound the right one? Click “Book Now”"
    },
    {
        title: "Secure Payment",
        icon: creditcard, // Replace with SVG/icon
        description:
            "Pay safely using your preferred method. We hold your payment until after the booking is completed."
    },
    {
        title: "Ready to Go",
        icon: figure, // Replace with SVG/icon
        description:
            "Go to the space on the scheduled date, check in with your confirmation, and enjoy!"
    }
];
export default steps;
