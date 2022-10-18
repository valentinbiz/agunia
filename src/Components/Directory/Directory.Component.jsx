import DirectoryItem from "../DirectoryItem/DirectoryItem.Component";
import Kitchen from "../../Pictures/kitchen.png";
import Bathroom from "../../Pictures/bathroom.png";
import Bedrooom from "../../Pictures/bedroom.png"
import Dining from "../../Pictures/dining.png";
import Decorations from "../../Pictures/decorations.png";
import Windows from "../../Pictures/windows.png";
import Kids from "../../Pictures/kids.png";
import Lights from "../../Pictures/light.png";
import Livingroom from "../../Pictures/livingroom.png";
import Office from "../../Pictures/office.png";
import Outside from "../../Pictures/outside.png";

import './Directory.Styles.scss'
const categories = [
    {
      id: 1,
      title: "Kitchen",
      route: 'shop/kitchen',
      image: Kitchen
    },
    {
      id: 2,
      title: "Office",
      route: 'shop/office',
      image: Office
    },
    {
      id: 3,
      title: "Bathroom",
      route: 'shop/bathroom',
      image: Bathroom
    },
    {
      id: 4,
      title: "Livingroom",
      route: 'shop/livingroom',
      image: Livingroom
    },
    {
      id: 5,
      title: "Bedroom",
      route: 'shop/kids',
      image: Bedrooom
    },
    {
      id: 6,
      title: "Kids",
      route: 'shop/kids',
      image: Kids
    },
    {
      id: 7,
      title: "Outside",
      route: 'shop/outside',
      image: Outside
    },
    {
      id: 8,
      title: "Decorations",
      route: 'shop/decorations',
      image: Decorations
    },
    {
      id: 9,
      title: "Lights",
      route: 'shop/lights',
      image: Lights
    },
    {
      id: 10,
      title: "Dining",
      route: 'shop/dining',
      image: Dining
    },
    {
      id: 11,
      title: "Windows",
      route: 'shop/windows',
      image: Windows
    },
  ];
const Directory = () => {
    return (
        <div className="directory-container">
        {categories.map((category) =>(
            <DirectoryItem key={category.id} category={category} />
        ))}
    </div>
    )
}
export default Directory;