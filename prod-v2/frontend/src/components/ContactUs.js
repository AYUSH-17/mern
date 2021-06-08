import React from "react";
import { useState } from "react";
import { Menu } from "./Home.js";
import "./ContactUs.css";
import Axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import DatePicker from "react-datepicker";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
// import { useBetween } from 'use-between';

const initialFormState = {
  userId: 101,
  fName: "",
  lName: "",
  username: "",
  events: [
    {
      eventType: "Single Event",
      eventName: "",
      eventStartDate: "",
      eventEndDate: "",
      country: "India",
      state: "",
      region: "",
      eventCategory: "",
    },
  ],
};

const EventData = ({ formData, setFormData }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isSingleEvent, setSingleEvent] = useState(false);
  const [region, setRegion] = useState("Choose State");
  const [OtherEventName, setOtherEventName] = useState("");
  const [zip, setZip] = useState("");
  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };
  const regionSelectHandler = (e) => {
    const newData = { ...formData };
    newData.events[0][e.target.name] = e.target.value;
    setFormData(newData);
    setRegion(e.target.value);
    if (zip) {
      setZip("");
    }
  };

  const eventSelectHandler = (e) => {
    const newData = { ...formData };
    newData.events[0][e.target.name] = e.target.value;
    setFormData(newData);
    e.target.value === "Other" ? setSingleEvent(true) : setSingleEvent(false);
    setOtherEventName("");
  };

  const eventOptions = [
    { value: "Wedding" },
    { value: "Pre-wedding" },
    { value: "Maternity" },
    { value: "Baby Shower" },
    { value: "Product Photoshoot" },
    { value: "Event Photos" },
    { value: "Fashion Photography" },
    { value: "Other" },
  ];

  const stateOptions = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  return (
    <>
      <Form.Group>
        <div className="row">
          <div className="col-md-5">
            <Form.Control
              as="select"
              defaultValue="Select Event"
              name="eventName"
              onChange={(e) => eventSelectHandler(e)}
            >
              <option disabled>Select Event</option>
              {eventOptions.map((option, index) => {
                return (
                  <option key={index} value={option.value}>
                    {option.value}
                  </option>
                );
              })}
            </Form.Control>
          </div>
          <div className="col-md-7">
            <FormControl
              disabled={isSingleEvent === false}
              name="eventName"
              onChange={(e) => {
                setOtherEventName(e.target.value);
                const newData = { ...formData };
                newData.events[0][e.target.name] = e.target.value;
                setFormData(newData);
              }}
              placeholder="Other Event "
              value={OtherEventName}
            />
          </div>
        </div>
      </Form.Group>
      <div className="row">
        <div className="col-md-6 ">
          <Form.Group controlId="formGroupDate">
            <Form.Label>Event Start Date &nbsp;</Form.Label>
            <DatePicker
              placeholderText="Select Start Date"
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              showTimeSelect
              dateFormat=" dd MMMM yyyy h:mm aa"
              timeFormat="h:mm aa"
              timeIntervals={15}
              timeCaption="Time"
              className="text-muted"
              closeOnScroll={true}
              selected={startDate}
              minDate={new Date()}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              filterTime={filterPassedTime}
              onChangeRaw={(e) => e.preventDefault()}
              onChange={(date) => {
                setStartDate(date);
                const newData = { ...formData };
                newData.events[0].eventStartDate = date;
                setFormData(newData);
              }}
            />
          </Form.Group>
        </div>
        <div className="col-md-6 ">
          <Form.Group controlId="formGroupDate">
            <Form.Label>Event End Date &nbsp;</Form.Label>
            <DatePicker
              placeholderText="Select End Date"
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              showTimeSelect
              dateFormat=" dd MMMM yyyy h:mm aa"
              timeFormat="h:mm aa"
              timeIntervals={15}
              timeCaption="Time"
              className="text-muted"
              closeOnScroll={true}
              selected={endDate}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              filterTime={filterPassedTime}
              onChangeRaw={(e) => e.preventDefault()}
              onChange={(date) => {
                setEndDate(date);
                const newData = { ...formData };
                newData.events[0].eventEndDate = date;
                setFormData(newData);
              }}
            />
          </Form.Group>
        </div>
      </div>
      <Form.Group>
        <div className="row">
          <div className="col">
            <Form.Control as="select" defaultValue="India" name="country">
              <option disabled>Choose Country</option>
              <option>India</option>
            </Form.Control>
            &nbsp;
          </div>
          <div className="col">
            <Form.Control
              as="select"
              value={region}
              name="state"
              onChange={regionSelectHandler}
            >
              <option disabled>Choose State</option>
              {stateOptions.map((option, index) => {
                return (
                  <option key={index} value={option}>
                    {option}
                  </option>
                );
              })}
            </Form.Control>
          </div>
          <div className="col">
            <Form.Control
              type="number"
              placeholder="Zip Code"
              name="region"
              onChange={(e) => {
                setZip(e.target.value);
                const newData = { ...formData };
                newData.events[0][e.target.name] = e.target.value;
                setFormData(newData);
              }}
              value={zip}
            />
          </div>
        </div>
      </Form.Group>
      <Form.Group>
        <Form.Control
          as="select"
          name="eventCategory"
          onChange={(e) => {
            const newData = { ...formData };
            newData.events[0][e.target.name] = e.target.value;
            setFormData(newData);
          }}
          defaultValue="Event Style"
        >
          <option disabled>Event Style</option>
          <option>Classic</option>
          <option>Industrial</option>
          <option>Vintage</option>
          <option>Miscellaneous</option>
        </Form.Control>
      </Form.Group>
    </>
  );
};

const ContactUs = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [isMultipleEvent, setMultipleEvent] = useState(false);
  const rowData = [
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 },
  ];

  const MultipleEventRender = () => {
    return (
      <>
        <div className="container">
          <div className="ag-theme-alpine" style={{ height: 400, width: 650 }}>
            <AgGridReact rowData={rowData}>
              <AgGridColumn
                field="make"
                sortable={true}
                filter={true}
              ></AgGridColumn>
              <AgGridColumn
                field="model"
                sortable={true}
                filter={true}
              ></AgGridColumn>
              <AgGridColumn
                field="price"
                sortable={true}
                filter={true}
              ></AgGridColumn>
            </AgGridReact>
          </div>
        </div>
      </>
    );
  };

  const inputHandler = (e) => {
    const newData = { ...formData };
    newData[e.target.name] = e.target.value;
    setFormData(newData);
    console.log(newData);
  };

  const contactUsHandler = (event) => {
    event.preventDefault();

    Axios.post("http://localhost:5000/users/add", formData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Menu />
      <div
        style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "/Wave-10s-1366px.svg"
        })`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      >
        <br />
        <br />
        <div className="offset-md-3 col-md-6 container card ">
          <Form className="mt-2" onSubmit={contactUsHandler}>
            <Form.Group controlId="formGroupFName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                name="fName"
                value={formData.fName}
                onChange={(e) => inputHandler(e)}
              />
            </Form.Group>
            <Form.Group controlId="formGroupLName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                name="lName"
                type="text"
                placeholder="Last Name"
                onChange={(e) => inputHandler(e)}
              />
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>@</InputGroup.Text>
                </InputGroup.Prepend>
                &nbsp;
                <FormControl
                  name="username"
                  type="email"
                  placeholder="Username"
                  onChange={(e) => inputHandler(e)}
                />
              </InputGroup>
            </Form.Group>

            <Form.Group controlId="formGroupEvent">
              <Form.Label>Event:</Form.Label>
              {["radio"].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="Single Event"
                    type={type}
                    id={`inline-${type}-1`}
                    name="eventType"
                    defaultChecked
                    onClick={(e) => {
                      const newData = { ...formData };
                      newData.events[0][e.target.name] = "Single Event";
                      setFormData(newData);
                      setMultipleEvent(false);
                    }}
                  />
                  <Form.Check
                    inline
                    label="Multiple Event"
                    type={type}
                    id={`inline-${type}-2`}
                    name="eventType"
                    onClick={(e) => {
                      const newData = { ...formData };
                      newData.events[0][e.target.name] = "Multiple Event";
                      setFormData(newData);
                      setMultipleEvent(true);
                    }}
                  />
                </div>
              ))}
              <Form.Group>
                {isMultipleEvent ? (
                  <Button
                    type="button"
                    className="btn btn-primary float-right"
                  >
                    Add More Event
                  </Button>
                ) : (
                  <EventData formData={formData} setFormData={setFormData} />
                )}
              </Form.Group>
            </Form.Group>
            <Form.Group>
              <Button variant="primary" type="submit">
                Create Event
              </Button>
            </Form.Group>
          </Form>
        </div>
        <div class="mapouter col" text-align = "center" style = {{
          position:"relative",
          textAlign:"right",
          height:"200px",
          width:"300px"
        
      }}>
        <div class="gmap_canvas" 
        align = "center"
        style ={{
          overflow:"hidden",
          background:"none",
          height:"200px",
          width:"300px"
        }}>
          <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=hauz%20khas%20village%20&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
          <a href="https://123movies-to.org"></a><br/>
          <a href="https://www.embedgooglemap.net">embed google maps iframe</a>
          </div>
          </div>
          <br/>
          <br/>
      </div>
    </>
  );
};

export default ContactUs;
