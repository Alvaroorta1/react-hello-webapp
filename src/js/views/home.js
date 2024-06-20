import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import Card from "../component/Card.jsx";
import { useNavigate } from "react-router";

export const Home = () => {
	const [contacts, setContacts] = useState([])
	const navigate = useNavigate()
	useEffect(() => {
		fetch('https://playground.4geeks.com/contact/agendas/alvaro', {
			method: 'POST',
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
			})
			.catch((error) => console.error('Error creating user:', error));
		fetch('https://playground.4geeks.com/contact/agendas/alvaro/contacts')
			.then((response) => response.json())
			.then((data) => setContacts(data.contacts))
	}, [])
	return (
		<>
			<div className="d-flex">
				<button className="btn btn-info ms-auto" onClick={() => navigate("/addContact")}>agregar contacto</button>
			</div>
			<div className=" ">
				{contacts && contacts.map((element, index) => {
					return (
						<Card
							key={index} 
							id={element.id}
							name={element.name}
							address={element.address}
							phone={element.phone}
							email={element.email}

						/>

					)
				})}
			</div>
		</>
	)
};
