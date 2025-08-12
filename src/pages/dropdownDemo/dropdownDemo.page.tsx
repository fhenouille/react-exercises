import type { FunctionComponent } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GenericAutoFilterDropdown } from "./components/genericAutoFilterDropdown.component";
import "./index.css";

const planets = [
  { name: "Mercury", diameter_km: 4879 },
  { name: "Venus", diameter_km: 12104 },
  { name: "Earth", diameter_km: 12742 },
  { name: "Mars", diameter_km: 6779 },
  { name: "Jupiter", diameter_km: 139820 },
  { name: "Saturn", diameter_km: 116460 },
  { name: "Uranus", diameter_km: 50724 },
  { name: "Neptune", diameter_km: 49244 },
];

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const DropdownDemo: FunctionComponent = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedPlanet, setSelectedPlanet] = useState("");
  const [selectedUser, setSelectedUser] = useState("");

  useEffect(() => {
    void fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data: User[]) => {
        setUsers(data);
      });
  }, []);

  return (
    <>
      <h1>Generic auto-filter dropdown Demo</h1>
      <h2>Planets by name</h2>
      <p>{`Selected planet : ${selectedPlanet}`}</p>
      <GenericAutoFilterDropdown
        listOfData={planets}
        keyLabel={"name"}
        placeholder={"Enter a Planet"}
        valueChange={(item) => {
          setSelectedPlanet(item?.name ?? "");
        }}
      />
      <h2>Users by email</h2>
      <p>{`Selected user : ${selectedUser}`}</p>
      <GenericAutoFilterDropdown
        listOfData={users}
        keyLabel={"email"}
        placeholder={"Enter an email"}
        valueChange={(item) => {
          setSelectedUser(item?.email ? `${item.name} - ${item.email}` : "");
        }}
      />
      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </>
  );
};

export default DropdownDemo;
