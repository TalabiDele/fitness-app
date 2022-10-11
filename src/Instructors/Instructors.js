import React, { useState } from "react";
import { Container } from "./Style";
import donnie from "../imgs/Donnie.jpg";
import ben from "../imgs/Benjamin.png";
import jen from "../imgs/Jenny.png";
import Messaging from "../Messaging/Messaging";
import { ImCancelCircle } from "react-icons/im";

const Instructors = () => {
  const [modal, setModal] = useState(false);
  const [isInstructor, setIsInstructor] = useState({});

  const instructors = [
    {
      id: 1,
      name: "Donnie",
      image: donnie,
      email: "donnie@gmail.com",
      phone: "0803453234",
      specialty: "Weight Lifting",
      gender: "Male",
    },
    {
      id: 2,
      name: "Benjamin",
      image: ben,
      email: "benjamin@gmail.com",
      phone: "0803453234",
      specialty: "Endurance Training",
      gender: "Male",
    },
    {
      id: 3,
      name: "Jenny",
      image: jen,
      email: "jenny@gmail.com",
      phone: "0803453234",
      specialty: "Aerobics",
      gender: "Female",
    },
  ];

  const handleMessaging = (e) => {
    setIsInstructor(e);

    setModal(true);
  };

  return (
    <Container>
      {modal && (
        <>
          <div className="cancel">
            <ImCancelCircle
              onClick={() => setModal(false)}
              fontSize={40}
              color="#000"
            />
          </div>
          <Messaging isInstructor={isInstructor} modal={setModal} />
        </>
      )}
      {instructors.map((i) => (
        <div className="person">
          <img src={i.image} alt={i.name} width="50px" height="50px" />
          <div className="info">
            <h3>{i.name}</h3>
            <p>{i.email}</p>
            <p>{i.phone}</p>
            <p>{i.specialty}</p>
            <p>{i.gender}</p>

            <button href="" onClick={() => handleMessaging(i)}>
              Send a message
            </button>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default Instructors;
