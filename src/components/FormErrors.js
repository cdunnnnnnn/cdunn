import React from "react"

export default function FormErrors({ formErrors }) {
  return (
    <div className="italic text-red-500">
      {Object.keys(formErrors).map((fieldName, i) => {
        if (formErrors[fieldName].length > 0) {
          return (
            <p key={i}>
              {fieldName} {formErrors[fieldName]}
            </p>
          )
        } else {
          return ""
        }
      })}
    </div>
  )
}
