import React, { useContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Wrapper, Container } from "./Style";
import useLocalStorage from "../hooks/useLocalStorage";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Instructors from "../Instructors/Instructors";
import userImg from "../imgs/user.png";
import { Context } from "../Context";

// import {} from "tailwindcss";

const Tasks = () => {
  const [userData, setUserData] = useState([]);
  const [date, setDate] = useState(new Date());
  const [isCompleted, setIsCompleted] = useLocalStorage("Completed", 0);
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false);
  const [six, setSix] = useState(false);
  const [seven, setSeven] = useState();
  //   Set Tasks to local sotroage using local storage hook
  const [tasks, setTasks] = useLocalStorage("Tasks", [
    {
      id: 1,
      name: "Warm up",
      time: 5,
      completed: false,
    },
    {
      id: 2,
      name: "Pushups",
      time: 5,
      completed: false,
    },
    {
      id: 3,
      name: "Squats",
      time: 5,
      completed: false,
    },
    {
      id: 4,
      name: "Single-leg deadlifts",
      time: 10,
      completed: false,
    },
    {
      id: 5,
      name: "Side Plank",
      time: 10,
      completed: false,
    },
    {
      id: 6,
      name: "Glute bridge",
      time: 5,
      completed: false,
    },
    {
      id: 7,
      name: "Lunges",
      time: 10,
      completed: false,
    },
  ]);

  const { logout, useAuth, db } = useContext(Context);

  // Initialize user
  const currentUser = useAuth();

  useEffect(() => {
    getDetails();
  }, []);

  //   Get details of logged in user
  const getDetails = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));

    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    setUserData(data);
  };

  //   Event on date change
  const handleDateChange = () => {
    setDate(new Date());

    // Reset completed tasks
    setIsCompleted(0);

    // Reset tasks
    setTasks([
      {
        id: 1,
        name: "Warm up",
        time: 5,
        completed: false,
      },
      {
        id: 2,
        name: "Pushups",
        time: 5,
        completed: false,
      },
      {
        id: 3,
        name: "Squats",
        time: 5,
        completed: false,
      },
      {
        id: 4,
        name: "Single-leg deadlifts",
        time: 10,
        completed: false,
      },
      {
        id: 5,
        name: "Side Plank",
        time: 10,
        completed: false,
      },
      {
        id: 6,
        name: "Glute bridge",
        time: 5,
        completed: false,
      },
      {
        id: 7,
        name: "Lunges",
        time: 10,
        completed: false,
      },
    ]);
  };

  //   Handle completed task
  const handleCompleted = (e) => {
    e.completed = true;

    if (isCompleted > 0) {
      setOne(true);
    }
    if (isCompleted > 1) {
      setTwo(true);
    }
    if (isCompleted > 2) {
      setThree(true);
    }
    if (isCompleted > 3) {
      setFour(true);
    }
    if (isCompleted > 4) {
      setFive(true);
    }
    if (isCompleted > 5) {
      setSix(true);
    }
    if (isCompleted > 6) {
      setSeven(true);
    }

    setIsCompleted(isCompleted + 1);
    console.log(isCompleted);

    setTasks([...tasks]);
  };

  console.log(tasks);

  //   Logout user
  const signOut = () => {
    logout();
  };

  return (
    <Container
      isCompleted={isCompleted}
      one={one}
      two={two}
      three={three}
      four={four}
      five={five}
      six={six}
      seven={seven}
    >
      {userData.map(
        (e) =>
          currentUser &&
          currentUser.uid === e.id && (
            <div className="all">
              <div className="user_details">
                <img src={userImg} alt="" width={50} height={50} />
                <div>
                  <h1 className="name">{e.name}</h1>
                  <p>{currentUser.email}</p>
                  <p>{e.country}</p>
                  <p>{e.state}</p>
                </div>
              </div>
              <button onClick={signOut} className="logout">
                Logout
              </button>
            </div>
          )
      )}
      <>
        <h3 className="complete">
          Complete your daily task, click finish after each task.
        </h3>
        <div className="container">
          <div className="tasks">
            {tasks.map((e) => (
              <div key={e.id} className="item">
                {e.completed ? (
                  <BsFillCheckCircleFill fontSize={30} color="#ffa82d" />
                ) : (
                  <span className=".bullet"></span>
                )}

                <h3 className="bg-[#C0D3F9] rounded-md shadow-md p-2">
                  {e.name}
                </h3>
                <h5>{e.time} mins</h5>
                {e.completed ? (
                  <button className="disabled" disabled>
                    Completed
                  </button>
                ) : (
                  <button className="finish" onClick={() => handleCompleted(e)}>
                    Finish
                  </button>
                )}
              </div>
            ))}
          </div>

          <Calendar
            onChange={handleDateChange}
            value={date}
            prev2Label=""
            next2Label=""
          />

          <Instructors />
        </div>
      </>

      <div className="progress">
        {isCompleted === 7 ? (
          <h3>Hurray! Tasks completed for today</h3>
        ) : (
          <h3>Tasks Completed</h3>
        )}
        <div className="bar">
          <div className="one load"></div>
          <div className="two load"></div>
          <div className="three load"></div>
          <div className="four load"></div>
          <div className="five load"></div>
          <div className="six load"></div>
          <div className="seven load"></div>
        </div>
        <h3>{isCompleted} of 7</h3>
      </div>
    </Container>
  );
};

export default Tasks;
