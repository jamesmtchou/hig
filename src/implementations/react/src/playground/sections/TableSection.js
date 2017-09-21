import React, { Component } from "react";
import PlaygroundSection from "../PlaygroundSection";
import { Table, Icon, TextCellContent} from "../../hig-react";

import tableImage from "../images/table-image.png";

const columns = [
  {
    id: 1,
    alignment: "left",
    width: "30px",
    accessor: "icon",
    Cell: props => <Icon nameOrSVG={props.data.icon} />
  },
  {
    id: 2,
    Header: "Title",
    alignment: "left",
    width: "1fr",
    accessor: "title",
    Cell: props => <TextCellContent text={props.data.title} detail={props.data.detail} />
  },
  {
    id: 3,
    Header: "Type",
    alignment: "left",
    width: "1fr",
    accessor: "type",
  },
  {
    id: 4,
    Header: "Location",
    alignment: "left",
    width: "1fr",
    accessor: "location",
  },
  {
    id: 5,
    Header: "Budget",
    alignment: "right",
    width: "50px",
    accessor: "budget",
    Cell: props => <TextCellContent text={props.data.budget} alignment={props.data.alignment} />
  },
  {
    id: 6,
    Header: "Name",
    alignment: "left",
    width: "1fr",
    accessor: "name",
  }
];

const data = [
  {
    icon: "gear",
    title: "Window Commissioning",
    type: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    location: "Floor 3, Room 21. Building 400. 2nd Street",
    budget: "2535",
    alignment: "right",
    name: "AtlasPlumbi"
    
  },
  {
    icon: "hamburger",
    title: "Pre-Pour Checklist",
    type: "Proin ut arcu vitae urna congue pulvinar.",
    location: "Building 3, Room 3. Building 201. 3rd Street",
    budget: "4500",
    alignment: "right",
    name: "Abby Worgan" 
  },
  {
    icon: "photos",
    title: "Void Slab - Face Up",
    type: "Proin ut arcu vitae urna congue pulvinar.",
    location: "Floor 4, Building 400. 1st Street",
    budget: "3000",
    alignment: "right",
    name: "Ben Ling" 
  },
  {
    icon: "quantities",
    title: "Closure Cypsum Boards",
    type: "Suspendisse faucibus congue odio, vitae tempus quam lobortis non",
    location: "Floor 12, Room 2. Building 100. B Street",
    budget: "5500",
    alignment: "right",
    name: "George Fitzmaur" 
  },
  {
    icon: "cost-control",
    title: "Windows",
    type: "Duis ac sem in massa scelerisque efficitur.",
    location: "Floor 11, Room A. Building 200. 16th Street",
    budget: "3300",
    alignment: "right",
    name: "Claire Louise" 
  },
];


const columns1 = [
  {
    Header: "Title",
    alignment: "left",
    width: "1fr",
    accessor: "title",
    Cell: props => <TextCellContent text={props.data.title} detail={props.data.detail} />
  },
  {
    Header: "Type",
    alignment: "left",
    width: "1fr",
    accessor: "type",
  },
  {
    Header: "Location",
    alignment: "left",
    width: "1fr",
    accessor: "location",
  },
  {
    Header: "Budget",
    alignment: "right",
    width: "50px",
    accessor: "budget",
    Cell: props => <TextCellContent text={props.data.budget} alignment={props.data.alignment} />
  },
  {
    Header: "Name",
    alignment: "left",
    width: "1fr",
    accessor: "name",
  }
];

const data1 = [
  {
    title: "Window Commissioning",
    type: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    location: "Floor 3, Room 21. Building 400. 2nd Street",
    budget: "2535",
    alignment: "right",
    name: "AtlasPlumbi"
    
  },
  {
    title: "Pre-Pour Checklist",
    type: "Proin ut arcu vitae urna congue pulvinar.",
    location: "Building 3, Room 3. Building 201. 3rd Street",
    budget: "4500",
    alignment: "right",
    name: "Abby Worgan" 
  },
  {
    title: "Void Slab - Face Up",
    type: "Proin ut arcu vitae urna congue pulvinar.",
    location: "Floor 4, Building 400. 1st Street",
    budget: "3000",
    alignment: "right",
    name: "Ben Ling" 
  },
  {
    title: "Closure Cypsum Boards",
    type: "Suspendisse faucibus congue odio, vitae tempus quam lobortis non",
    location: "Floor 12, Room 2. Building 100. B Street",
    budget: "5500",
    alignment: "right",
    name: "George Fitzmaur" 
  },
  {
    title: "Windows",
    type: "Duis ac sem in massa scelerisque efficitur.",
    location: "Floor 11, Room A. Building 200. 16th Street",
    budget: "3300",
    alignment: "right",
    name: "Claire Louise" 
  },
];


const columns2 = [
  {
    alignment: "left",
    width: "104px",
    accessor: "image",
    Cell: props => <img alt="slot Cell" src={props.data.image} style={{ width: 104, height: 58, marginLeft: 8, marginRight: 8, marginTop: 4 }}/>
  },
  {
    Header: "Title",
    alignment: "left",
    width: "1fr",
    accessor: "title",
    Cell: props => <TextCellContent text={props.data.title} detail={props.data.detail} />
  },
  {
    Header: "Type",
    alignment: "left",
    width: "1fr",
    accessor: "type",
  },
  {
    Header: "Location",
    alignment: "left",
    width: "1fr",
    accessor: "location",
  },
  {
    Header: "Budget",
    alignment: "right",
    width: "50px",
    accessor: "budget",
    Cell: props => <TextCellContent text={props.data.budget} alignment={props.data.alignment} />
  },
  {
    Header: "Name",
    alignment: "left",
    width: "1fr",
    accessor: "name",
  }
];

const data2 = [
  {
    image: tableImage,
    title: "Window Commissioning",
    type: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    location: "Floor 3, Room 21. Building 400. 2nd Street",
    budget: "2535",
    alignment: "right",
    name: "AtlasPlumbi"
    
  },
  {
    image: tableImage,
    title: "Pre-Pour Checklist",
    type: "Proin ut arcu vitae urna congue pulvinar.",
    location: "Building 3, Room 3. Building 201. 3rd Street",
    budget: "4500",
    alignment: "right",
    name: "Abby Worgan" 
  },
  {
    image: tableImage,
    title: "Void Slab - Face Up",
    type: "Proin ut arcu vitae urna congue pulvinar.",
    location: "Floor 4, Building 400. 1st Street",
    budget: "3000",
    alignment: "right",
    name: "Ben Ling" 
  },
  {
    image: tableImage,
    title: "Closure Cypsum Boards",
    type: "Suspendisse faucibus congue odio, vitae tempus quam lobortis non",
    location: "Floor 12, Room 2. Building 100. B Street",
    budget: "5500",
    alignment: "right",
    name: "George Fitzmaur" 
  },
  {
    image: tableImage,
    title: "Windows",
    type: "Duis ac sem in massa scelerisque efficitur.",
    location: "Floor 11, Room A. Building 200. 16th Street",
    budget: "3300",
    alignment: "right",
    name: "Claire Louise" 
  },
];

function logEvent(event) {
  let messageParts = [`Checkbox triggered a ${event.type} event`];
  if (event.target.value !== undefined) {
    messageParts = messageParts.concat(`: ${event.target.value}`);
  }
  console.log(messageParts.join(""));
}



class TableSection extends Component {
  render() {
    return (
      <PlaygroundSection title="Table">
        <Table density="standard" columns={columns} data={data} checkBoxCallback={logEvent}/>
        <Table density="compressed" columns={columns1} data={data1}/>
        <Table density="large" columns={columns2} data={data2} />
      </PlaygroundSection>
    );
  }
}

export default TableSection;
