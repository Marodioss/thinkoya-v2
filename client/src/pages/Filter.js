import { useEffect } from "react";
import "./Filter.css";
import Dropdown from "react-bootstrap/Dropdown";

function Filter({ data, setFilter, setActiveGender, activeGender }) {
  useEffect(() => {
    if (activeGender === "All") {
      setFilter(data);
      return;
    }
    const filteredData = data.filter((design) => {
      return design.Category === activeGender;
    });
    setFilter(filteredData);
  }, [activeGender]);

  return (
    // <div className="filter">
    //   <ChakraProvider>
    //     <Select
    //       placeholder="Select Category"
    //       onChange={(e) => setActiveGender(e.target.value)}
    //       variant="flushed"
    //     >
    //       <option value="All">All</option>
    //       <option value="Villa">Villa</option>
    //       <option value="Propositions">Propositions</option>
    //       <option value="Equipements">Equipements</option>
    //       <option value="Design Interieur">Design Interieur</option>
    //     </Select>
    //   </ChakraProvider>
    // </div>
    <div className="filter">
      <Dropdown className="dropdown" variant="light">
        {/* <Dropdown.Toggle id="dropdown-basic">Thinkoya</Dropdown.Toggle> */}
        <Dropdown.Toggle id="dropdown-basic" variant="light">
          <img src="./logo192.png" className="logo-top" />
        </Dropdown.Toggle>
        <Dropdown.Menu
          className="dropmenu"
          onChange={(e) => setActiveGender(e.target.value)}
        >
          <Dropdown.Item value="All" onClick={() => setActiveGender("All")}>
            All
          </Dropdown.Item>
          <Dropdown.Item value="Villa" onClick={() => setActiveGender("Villa")}>
            Villas
          </Dropdown.Item>
          <Dropdown.Item
            value="Propositions"
            onClick={() => setActiveGender("Propositions")}
          >
            Propositions
          </Dropdown.Item>
          <Dropdown.Item
            value="Equipements"
            onClick={() => setActiveGender("Equipements")}
          >
            Equipements
          </Dropdown.Item>
          <Dropdown.Item
            value="Design Interieur"
            onClick={() => setActiveGender("Design Interieur")}
          >
            Design Interieur
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              window.location.href = "/ContactUS";
            }}
          >
            Contact US
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              window.location.href = "/About";
            }}
          >
            About US
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Filter;
