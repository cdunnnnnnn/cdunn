import React, { useState } from "react"

import FormErrors from "./FormErrors"

export default function Form() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
    formErrors: { name: "", email: "", message: "" },
    nameValid: false,
    emailValid: false,
    messageValid: false,
    formValid: false,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues((prevState) => ({ ...prevState, [name]: value }))
    validateField(name, value)
  }

  const validateField = (fieldName, value) => {
    const { nameValid, emailValid, messageValid } = formValues

    switch (fieldName) {
      case "name":
        setFormValues((prevState) => ({
          ...prevState,
          nameValid: value.length >= 2,
          formErrors: {
            name: nameValid ? "" : " is too short",
          },
        }))
        break
      case "email":
        setFormValues((prevState) => ({
          ...prevState,
          emailValid: value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i),
          formErrors: {
            email: emailValid ? "" : " is invalid",
          },
        }))
        break
      case "message":
        setFormValues((prevState) => ({
          ...prevState,
          messageValid: value.length >= 10,
          formErrors: {
            message: messageValid ? "" : " should be longer",
          },
        }))
        break
      default:
        break
    }

    validateForm()
  }

  const validateForm = () => {
    setFormValues((prevState) => ({
      ...prevState,
      formValid:
        formValues.nameValid &&
        formValues.emailValid &&
        formValues.messageValid,
    }))
  }

  console.log(formValues)

  return (
    <>
      <form name="contact" method="post">
        <input type="hidden" name="form-name" value="contact" />
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Name:
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border shadow appearance-none focus:outline-none focus:shadow-outline"
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Email:
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border shadow appearance-none focus:outline-none focus:shadow-outline"
            type="email"
            name="email"
            value={formValues.emails}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Message:
          </label>
          <textarea
            className="w-full px-3 py-2 leading-tight text-gray-700 border shadow appearance-none focus:outline-none focus:shadow-outline"
            name="message"
            value={formValues.message}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <button
            className="px-4 py-2 text-white transition-all duration-200 ease-in-out bg-black hover:bg-primary"
            type="submit"
            disabled={!formValues.formValid}
            style={
              !formValues.formValid
                ? {
                    backgroundColor: "gray",
                    cursor: "not-allowed",
                  }
                : {}
            }
          >
            Send
          </button>
        </div>
      </form>
      <FormErrors formErrors={formValues.formErrors} />
    </>
  )
}
