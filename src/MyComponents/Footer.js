import React from 'react'

export const Footer = () => {
  let footerStyle={
    position:"bottom",
    top: "100%",
    width:"100%",
    border: "2px solid red"
  }
  return (
    <footer className="bg-dark text-light "  style={footerStyle}>
      <p className= "text-center">
        Copyright &copy; MyTodosList.com
      </p>
    </footer>
  )
}
