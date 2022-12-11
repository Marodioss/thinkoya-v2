import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Contactus.css";

export const ContactUS = () => {
  return (
    <>
      <div className="contactus">
        <div className="container">
          <div className="form">
            <form>
              {/* name */}
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="" placeholder="name" />
              {/* email */}
              <label htmlFor="name">Email</label>
              <input type="email" name="email" id="" placeholder="email" />
              {/* Message */}
              <label htmlFor="name">Your message</label>
              <textarea
                name=""
                id=""
                cols={30}
                placeholder=" type your message here"
                rows={10}
                defaultValue={""}
              />
              {/* phone */}
              <label htmlFor="name">Phone</label>
              <input type="number" name="phone" id="" placeholder="phone" />
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="iframe">
            <iframe
              src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initMap&v=weekly"
              frameBorder={0}
            />
          </div>
        </div>
        <div className="footer">
          <div className="facebook">facebook</div>
          <div className="whatsapp">whatsapp</div>
          <div className="Instagram">Instagram</div>
          <div className="twitter">twitter</div>
        </div>
      </div>
    </>
  );
};

export default ContactUS;
