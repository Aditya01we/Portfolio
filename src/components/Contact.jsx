import { useState } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import Section from "./Section";
import { profile } from "../data/profile";

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);

  function handleChange(event) {

    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {

    event.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.mobile
    ) {

      toast.error(
        "Please fill all required fields"
      );

      return;
    }

    setLoading(true);

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      mobile: form.mobile,
      address: form.address,
    };

    const sendAdminEmail = emailjs.send(
      "service_aditya",
      "template_mil46a9",
      templateParams,
      "LPfbxS9_yXHXYSCsK"
    );

    const sendUserAutoReply = emailjs.send(
      "service_aditya",
      "template_bgkbgyj",
      templateParams,
      "LPfbxS9_yXHXYSCsK"
    );

    Promise.allSettled([
      sendAdminEmail,
      sendUserAutoReply,
    ])
    .then(() => {

      toast.success(
        "Message Sent Successfully"
      );

      setForm({
        name: "",
        email: "",
        mobile: "",
        address: "",
      });

      setLoading(false);

    })
    .catch(() => {

      toast.error(
        "Failed To Send Message"
      );

      setLoading(false);

    });
  }

  return (
    <Section
      id="contact"
      title="Contact Me"
      variant="alt"
    >

      <div className="contactSection">

        <div className="contactSection__top">

          <p className="contactSection__smallTitle">
            Get In Touch
          </p>

          <h3 className="contactSection__headline">
            Let's Work Together
          </h3>

        </div>

        <div className="contact">

          <form
            className="contact__form"
            onSubmit={handleSubmit}
          >

            <div className="contact__formTop">

              <div className="field">

                <label className="label">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter Full Name"
                  required
                />

              </div>

              <div className="field">

                <label className="label">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter Email Address"
                  required
                />

              </div>

            </div>

            <div className="field">

              <label className="label">
                Mobile Number
              </label>

              <input
                type="text"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                placeholder="Enter Mobile Number"
                required
              />

            </div>

            <div className="field">

              <label className="label">
                Address
              </label>

              <textarea
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Enter Address"
              ></textarea>

            </div>

            <button
              type="submit"
              className="btn btn--primary contact__btn"
              disabled={loading}
            >
              {loading
                ? "Sending..."
                : "Send Message"}
            </button>

          </form>

          <div className="contact__aside">

            <div className="contactInfo">

              <div className="contactInfo__icon">
                📍
              </div>

              <div>

                <h3 className="contactInfo__title">
                  Address
                </h3>

                <p className="contactInfo__text">
                 
                  Dhampur-246761, Bijnor ( Uttar Pradesh )
                </p>

              </div>

            </div>

            <div className="contactInfo">

              <div className="contactInfo__icon">
                📞
              </div>

              <div>

                <h3 className="contactInfo__title">
                  Phone
                </h3>

                <p className="contactInfo__text">
                  {profile.phone}
                </p>

              </div>

            </div>

            <div className="contactInfo">

              <div className="contactInfo__icon">
                ✉️
              </div>

              <div>

                <h3 className="contactInfo__title">
                  Email
                </h3>

                <p className="contactInfo__text">
                  {profile.email}
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </Section>
  );
}